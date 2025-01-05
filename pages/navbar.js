// js/navbar.js
export function createNavbar() {
    return `
        <nav>
            <div class="logo">
                <img src="assets/logo.png" alt="Logo" />
            </div>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="wishlist.html">Wishlist</a></li>
                <li><a href="cart.html">Cart</a></li>
            </ul>
        </nav>
    `;
}
