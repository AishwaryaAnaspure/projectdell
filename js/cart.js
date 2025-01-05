// js/cart.js
import { displayProducts } from './displayProducts.js';

// Load Cart
const cart = JSON.parse(localStorage.getItem('cart')) || [];

// Display Products without Extra Buttons
displayProducts(cart, 'products');
