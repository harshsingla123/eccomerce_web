const CART_STORAGE_KEY = "shopease-cart";

function loadCart() {
  try {
    const savedCart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY));
    if (!Array.isArray(savedCart)) return [];

    return savedCart.reduce((items, product) => {
      const existingItem = items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += Number(product.quantity) || 1;
      } else {
        items.push({ ...product, quantity: Number(product.quantity) || 1 });
      }

      return items;
    }, []);
  } catch {
    return [];
  }
}

export const cart = loadCart();

function saveCart() {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

export function addToCart(product) {
  const existingItem = cart.find((item) => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  saveCart();
}

export function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
}

export function changeQuantity(index, amount) {
  const item = cart[index];
  if (!item) return;

  item.quantity += amount;
  if (item.quantity <= 0) cart.splice(index, 1);
  saveCart();
}

export function clearCart() {
  cart.length = 0;
  saveCart();
}
