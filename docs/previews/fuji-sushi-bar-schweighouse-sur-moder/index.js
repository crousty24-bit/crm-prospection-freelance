const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = Array.from(document.querySelectorAll(".site-nav a"));
const categoryButtons = Array.from(document.querySelectorAll("[data-menu-filter]"));
const productCards = Array.from(document.querySelectorAll("[data-product-card]"));
const cartItemsNode = document.querySelector("[data-cart-items]");
const cartEmpty = document.querySelector("[data-cart-empty]");
const cartCount = document.querySelector("[data-cart-count]");
const cartTotal = document.querySelector("[data-cart-total]");
const cartPrepare = document.querySelector("[data-cart-prepare]");
const cartStatus = document.querySelector("[data-cart-status]");
let headerSentinel;

const priceFormatter = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
});

const products = new Map(
  productCards.map((card) => [
    card.dataset.productId,
    {
      id: card.dataset.productId,
      name: card.dataset.name,
      price: Number(card.dataset.price),
      card,
      quantityNode: document.querySelector(`[data-product-qty="${card.dataset.productId}"]`),
    },
  ]),
);

const cart = new Map();

function closeNav() {
  nav?.classList.remove("is-open");
  navToggle?.setAttribute("aria-expanded", "false");
  document.body.classList.remove("nav-open");
}

navToggle?.addEventListener("click", () => {
  const isOpen = nav?.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
  document.body.classList.toggle("nav-open", Boolean(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeNav);
});

function activateCategory(button) {
  const category = button.dataset.menuFilter;
  categoryButtons.forEach((item) => {
    const isActive = item === button;
    item.classList.toggle("is-active", isActive);
    item.setAttribute("aria-pressed", String(isActive));
  });
  productCards.forEach((item) => {
    const isVisible = category === "all" || item.dataset.category === category;
    item.classList.toggle("is-hidden", !isVisible);
  });
}

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => activateCategory(button));
});

const initialCategory = categoryButtons.find((button) => button.classList.contains("is-active"));
if (initialCategory) activateCategory(initialCategory);

function getCartQuantity(productId) {
  return cart.get(productId)?.quantity ?? 0;
}

function setCartQuantity(productId, quantity) {
  const product = products.get(productId);
  if (!product) return;

  if (quantity <= 0) {
    cart.delete(productId);
  } else {
    cart.set(productId, { product, quantity });
  }

  renderCart();
}

function updateProductStates() {
  products.forEach((product) => {
    const quantity = getCartQuantity(product.id);
    product.card.classList.toggle("has-quantity", quantity > 0);
    if (product.quantityNode) product.quantityNode.textContent = String(quantity);
  });
}

function renderCart() {
  updateProductStates();
  if (!cartItemsNode || !cartCount || !cartTotal || !cartPrepare) return;

  const items = Array.from(cart.values());
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  cartItemsNode.innerHTML = "";
  items.forEach(({ product, quantity }) => {
    const row = document.createElement("article");
    row.className = "cart-row";
    row.dataset.cartRow = product.id;
    row.innerHTML = `
      <div class="cart-row-top">
        <div>
          <strong>${product.name}</strong>
          <span>${priceFormatter.format(product.price)} unite</span>
        </div>
        <span class="cart-line-total">${priceFormatter.format(product.price * quantity)}</span>
      </div>
      <div class="cart-row-actions">
        <div class="cart-stepper" aria-label="Quantite ${product.name}">
          <button class="cart-control" type="button" data-cart-decrease="${product.id}">-</button>
          <span>${quantity}</span>
          <button class="cart-control" type="button" data-cart-increase="${product.id}">+</button>
        </div>
        <button class="cart-remove" type="button" data-cart-remove="${product.id}">Retirer</button>
      </div>
    `;
    cartItemsNode.append(row);
  });

  cartCount.textContent = `${totalQuantity} ${totalQuantity > 1 ? "articles" : "article"}`;
  cartTotal.textContent = priceFormatter.format(subtotal);
  cartEmpty?.classList.toggle("is-hidden", items.length > 0);
  cartPrepare.disabled = items.length === 0;

  if (items.length === 0 && cartStatus) {
    cartStatus.textContent = "";
  }
}

document.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add-product]");
  if (addButton) {
    const productId = addButton.dataset.addProduct;
    setCartQuantity(productId, getCartQuantity(productId) + 1);
    if (cartStatus) cartStatus.textContent = "";
    return;
  }

  const increaseButton = event.target.closest("[data-cart-increase]");
  if (increaseButton) {
    const productId = increaseButton.dataset.cartIncrease;
    setCartQuantity(productId, getCartQuantity(productId) + 1);
    if (cartStatus) cartStatus.textContent = "";
    return;
  }

  const decreaseButton = event.target.closest("[data-cart-decrease]");
  if (decreaseButton) {
    const productId = decreaseButton.dataset.cartDecrease;
    setCartQuantity(productId, getCartQuantity(productId) - 1);
    if (cartStatus) cartStatus.textContent = "";
    return;
  }

  const removeButton = event.target.closest("[data-cart-remove]");
  if (removeButton) {
    setCartQuantity(removeButton.dataset.cartRemove, 0);
    if (cartStatus) cartStatus.textContent = "";
  }
});

cartPrepare?.addEventListener("click", () => {
  if (!cart.size || !cartStatus) return;
  cartStatus.textContent =
    "Selection prete pour le retrait. Aucun paiement ni envoi automatique depuis cette preview.";
});

renderCart();

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-45% 0px -45% 0px" },
);

["concept", "carte", "horaires", "contact"].forEach((id) => {
  const section = document.getElementById(id);
  if (section) sectionObserver.observe(section);
});

if (header && "IntersectionObserver" in window) {
  headerSentinel = document.createElement("span");
  headerSentinel.setAttribute("aria-hidden", "true");
  headerSentinel.className = "header-sentinel";
  document.body.prepend(headerSentinel);

  const headerObserver = new IntersectionObserver(
    ([entry]) => {
      header.classList.toggle("is-scrolled", !entry.isIntersecting);
    },
    { rootMargin: "-16px 0px 0px 0px", threshold: 0 },
  );

  headerObserver.observe(headerSentinel);
}
