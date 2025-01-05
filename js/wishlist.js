// js/wishlist.js
import { displayProducts } from './displayProducts.js';

// Load Wishlist
const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

displayProducts(wishlist, 'products', (product, index) => `
    <button onclick="addToCart(${index})">Add to Cart</button>
`);

// Add to Cart
function addToCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(wishlist[index]);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
}
