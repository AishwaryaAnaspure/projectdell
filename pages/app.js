import { displayProducts } from '../js/displayProducts.js';

// Utility functions for localStorage
function getStoredData(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}

function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Fetch products from the Glitch server
async function fetchProducts() {
    try {
        const response = await fetch('https://projectdell.glitch.me/'); 
        const products = await response.json();

        // Display products on index.html
        if (document.getElementById('products')) {
            displayProducts(products, 'products', (product, index) => `
                <button onclick="addToCart(${index})">Add to Cart</button>
                <button onclick="addToWishlist(${index})">Add to Wishlist</button>
            `);
        }

        // Store products in localStorage for other pages
        saveData('products', products);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Add product to cart
window.addToCart = function (index) {
    const products = getStoredData('products');
    const cart = getStoredData('cart');

    const product = products[index];
    if (cart.find(item => item.name === product.name)) {
        alert('Product is already in the cart!');
    } else {
        if (confirm('Are you sure you want to add this product to the cart?')) {
            cart.push(product);
            saveData('cart', cart);
            alert('Product added to cart!');
        }
    }
};

// Add product to wishlist
window.addToWishlist = function (index) {
    const products = getStoredData('products');
    const wishlist = getStoredData('wishlist');

    const product = products[index];
    if (wishlist.find(item => item.name === product.name)) {
        alert('Product is already in the wishlist!');
    } else {
        if (confirm('Are you sure you want to add this product to the wishlist?')) {
            wishlist.push(product);
            saveData('wishlist', wishlist);
            alert('Product added to wishlist!');
        }
    }
};

// Display wishlist products
function displayWishlist() {
    const wishlist = getStoredData('wishlist');
    displayProducts(wishlist, 'products', (product, index) => `
        <button onclick="addToCartFromWishlist(${index})">Add to Cart</button>
    `);
}

// Move product from wishlist to cart
window.addToCartFromWishlist = function (index) {
    const wishlist = getStoredData('wishlist');
    const cart = getStoredData('cart');

    const product = wishlist[index];
    if (cart.find(item => item.name === product.name)) {
        alert('Product is already in the cart!');
    } else {
        cart.push(product);
        saveData('cart', cart);
        alert('Product moved to cart!');
    }

    // Remove product from wishlist
    wishlist.splice(index, 1);
    saveData('wishlist', wishlist);
    displayWishlist();
};

// Display cart products
function displayCart() {
    const cart = getStoredData('cart');
    displayProducts(cart, 'products', () => ``); // No buttons for cart
}

// Initialize the app
function init() {
    const path = window.location.pathname;

    if (path.includes('index.html')) {
        fetchProducts();
    } else if (path.includes('wishlist.html')) {
        displayWishlist();
    } else if (path.includes('cart.html')) {
        displayCart();
    }
}

init();
