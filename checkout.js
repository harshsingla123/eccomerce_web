import { cart, clearCart, removeFromCart } from './data/cart.js';

const cartContainer = document.querySelector('.js-cart-items');
const itemCount = document.querySelector('.js-item-count');
const subtotalElement = document.querySelector('.js-subtotal');
const totalElement = document.querySelector('.js-total');
const cartCountElement = document.querySelector('.cart-icon');
const checkoutButton = document.querySelector('.checkout-btn');

const currencyFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0
});

function renderCart() {
  const total = cart.reduce((sum, product) => sum + Number(product.price || 0), 0);

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
        <button class="remove-btn" data-index="${index}">Remove</button>
      </div>
    `).join('');
  }

  itemCount.textContent = cart.length;
  subtotalElement.textContent = currencyFormatter.format(total);
  totalElement.textContent = currencyFormatter.format(total);
  cartCountElement.textContent = cart.length;
  checkoutButton.disabled = cart.length === 0;

  document.querySelectorAll('.remove-btn').forEach((button) => {
    button.addEventListener('click', () => {
      removeFromCart(Number(button.dataset.index));
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
