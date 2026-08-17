const CART_STORAGE_KEY = 'shopease-cart';

export class Cart {
  constructor(storageKey = CART_STORAGE_KEY) {
    this.storageKey = storageKey;
    this.items = this.load();
  }

  load() {
    try {
      const savedCart = JSON.parse(localStorage.getItem(this.storageKey));
      if (!Array.isArray(savedCart)) return [];

      return savedCart.reduce((items, product) => {
        const existingItem = items.find((item) => item.id === product.id);
        const quantity = Number(product.quantity) || 1;

        if (existingItem) {
          existingItem.quantity += quantity;
        } else {
          items.push({ ...product, quantity });
        }

        return items;
      }, []);
    } catch {
      return [];
    }
  }

  save() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.items));
  }

  add(product) {
    const existingItem = this.items.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.items.push({ ...product, quantity: 1 });
    }

    this.save();
  }

  remove(index) {
    if (index < 0 || index >= this.items.length) return;

    this.items.splice(index, 1);
    this.save();
  }

  changeQuantity(index, amount) {
    const item = this.items[index];
    if (!item) return;

    item.quantity += amount;
    if (item.quantity <= 0) this.items.splice(index, 1);

    this.save();
  }

  clear() {
    this.items.length = 0;
    this.save();
  }

  get itemCount() {
    return this.items.reduce((count, item) => count + item.quantity, 0);
  }

  get subtotal() {
    return this.items.reduce(
      (sum, item) => sum + Number(item.price || 0) * item.quantity,
      0
    );
  }
}

export const cart = new Cart();
