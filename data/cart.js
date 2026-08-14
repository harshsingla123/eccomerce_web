const CART_STORAGE_KEY = "shopease-cart";

function loadCart() {
  try {
    const savedCart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY));
    return Array.isArray(savedCart) ? savedCart : [];
  } catch {
    return [];
  }
}

export const cart = loadCart();

function saveCart() {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

export function addToCart(product) {
  cart.push(product);
  saveCart();
}

export function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
}

export function clearCart() {
  cart.length = 0;
  saveCart();
}
