import { cart } from './data/cart.js';
import { loadrequest } from './data/products.js';

const container = document.querySelector('.js-product-container');
let products = [];

try {
  products = await loadrequest();
  renderProducts();
} catch (error) {
  console.error('Unable to load products:', error);
  container.innerHTML = '<p class="product-load-error">Products could not be loaded. Please refresh and try again.</p>';
}

function renderProducts() {
  container.innerHTML = products.map((product) => {
    const price = product.price ?? (product.priceCents ? product.priceCents / 100 : 0);
    const oldPrice = product.oldPrice ?? product.originalPrice;
    const rating = typeof product.rating === 'object'
      ? `⭐ ${product.rating.stars} (${product.rating.count})`
      : (product.rating ?? 'No ratings yet');
    const image = product.image;

    return `
      <div class="product-card">
        ${product.discount ? `<span class="discount">-${product.discount}%</span>` : ''}
        <span class="wishlist">❤</span>
        <img src="${image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <div class="rating">${rating}</div>
        <div class="price">
          <span class="new-price">₹${price}</span>
          ${oldPrice ? `<span class="old-price">₹${oldPrice}</span>` : ''}
        </div>
        <button class="add-to-cart" data-product-id="${product.id}">Add To Cart</button>
      </div>`;
  }).join('');

  document.querySelectorAll('.add-to-cart').forEach((button) => {
    button.addEventListener('click', () => addProductToCart(button.dataset.productId));
  });
}

function addProductToCart(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  cart.add(product);
  updateCartCount();
}

function updateCartCount() {
  document.querySelector('.cart-icon').textContent = cart.itemCount;
}

updateCartCount(); 
