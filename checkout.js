import { cart, changeQuantity, clearCart, removeFromCart } from './data/cart.js';

const cartContainer = document.querySelector('.js-cart-items');
const subtotalElement = document.querySelector('.js-subtotal');
const gstElement = document.querySelector('.js-gst');
const totalElement = document.querySelector('.js-total');
const cartCountElement = document.querySelector('.cart-icon');
const checkoutButton = document.querySelector('.checkout-btn');

const currencyFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0
});

function renderCart() {
  const subtotal = cart.reduce(
    (sum, product) => sum + Number(product.price || 0) * product.quantity,
    0
  );
  const gst = subtotal * 0.18;
  const total = subtotal + gst;

  if (cart.length === 0) {
    cartContainer.innerHTML = '<div class="empty-cart">Your cart is empty.</div>';
  } else {
    cartContainer.innerHTML = cart.map((product, index) => `
      <div class="cart-item">
        <img src="${product.image}" alt="${product.name}">
        <div class="cart-item-info">
          <h3>${product.name}</h3>
          <p class="cart-price">${currencyFormatter.format(product.price)}</p>
        </div>
        <div class="quantity-controls" aria-label="Quantity controls">
          <button class="quantity-btn" data-index="${index}" data-change="-1" aria-label="Decrease quantity">−</button>
          <span>${product.quantity}</span>
          <button class="quantity-btn" data-index="${index}" data-change="1" aria-label="Increase quantity">+</button>
        </div>
        <p class="item-total">${currencyFormatter.format(product.price * product.quantity)}</p>
        <button class="remove-btn" data-index="${index}">Remove</button>
      </div>
    `).join('');
  }

  subtotalElement.textContent = currencyFormatter.format(subtotal);
  gstElement.textContent = currencyFormatter.format(gst);
  totalElement.textContent = currencyFormatter.format(total);
  cartCountElement.textContent = cart.reduce((count, product) => count + product.quantity, 0);
  checkoutButton.disabled = cart.length === 0;

  document.querySelectorAll('.remove-btn').forEach((button) => {
    button.addEventListener('click', () => {
      removeFromCart(Number(button.dataset.index));
      renderCart();
    });
  });

  document.querySelectorAll('.quantity-btn').forEach((button) => {
    button.addEventListener('click', () => {
      changeQuantity(Number(button.dataset.index), Number(button.dataset.change));
      renderCart();
    });
  });
}

checkoutButton.addEventListener('click', () => {
  if (cart.length === 0) return;

  clearCart();
  renderCart();
  alert('Your order has been placed successfully!');
});

renderCart();
