const products = [
  { id: '1', name: 'Nike Air Max', price: 6999, oldPrice: 8999, discount: 20, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80', rating: '★★★★★' },
  { id: '2', name: 'Adidas Sneakers', price: 5499, oldPrice: 6499, discount: 15, image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80', rating: '★★★★☆' },
  { id: '3', name: 'Apple Watch', price: 39999, oldPrice: 44999, discount: 30, image: 'https://images.unsplash.com/photo-1624096104992-9b4fa3a279dd?auto=format&fit=crop&w=900&q=80', rating: '★★★★★' },
  { id: '4', name: 'MacBook Air M4', price: 114900, oldPrice: 129900, discount: 18, image: 'https://images.unsplash.com/photo-1522040883829-9104eee3488a?auto=format&fit=crop&w=900&q=80', rating: '★★★★★' },
  { id: '5', name: 'Premium Hoodie', price: 1799, oldPrice: 2999, discount: 40, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=80', rating: '★★★★☆' },
  { id: '6', name: 'Sony Headphones', price: 24999, oldPrice: 31999, discount: 25, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80', rating: '★★★★★' },
  { id: '7', name: 'Classic Denim Jacket', price: 2999, oldPrice: 3999, discount: 25, image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=80', rating: '★★★★☆' },
  { id: '8', name: 'Polarized Sunglasses', price: 1499, oldPrice: 2199, discount: 32, image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80', rating: '★★★★★' },
  { id: '9', name: 'Wireless Speaker', price: 3499, oldPrice: 4999, discount: 30, image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=80', rating: '★★★★☆' },
  { id: '10', name: 'Mirrorless Camera', price: 62999, oldPrice: 69999, discount: 10, image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80', rating: '★★★★★' },
  { id: '11', name: 'Smartphone Pro', price: 54999, oldPrice: 59999, discount: 8, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80', rating: '★★★★★' },
  { id: '12', name: 'Mechanical Keyboard', price: 5999, oldPrice: 7499, discount: 20, image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80', rating: '★★★★☆' },
  { id: '13', name: 'Everyday Backpack', price: 2299, oldPrice: 3299, discount: 30, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80', rating: '★★★★★' },
  { id: '14', name: 'Cotton T-Shirt', price: 899, oldPrice: 1299, discount: 31, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80', rating: '★★★★☆' },
  { id: '15', name: 'Minimal Wrist Watch', price: 7999, oldPrice: 9999, discount: 20, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80', rating: '★★★★★' },
  { id: '16', name: 'Ultrabook Laptop', price: 78999, oldPrice: 89999, discount: 12, image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80', rating: '★★★★★' },
  { id: '17', name: 'Comfort Fit Hoodie', price: 1999, oldPrice: 2799, discount: 29, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80', rating: '★★★★☆' },
  { id: '18', name: 'Gaming Mouse', price: 1899, oldPrice: 2499, discount: 24, image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=80', rating: '★★★★★' }
];

export async function loadrequest() {
  return products.map((product) => ({ ...product }));
}
