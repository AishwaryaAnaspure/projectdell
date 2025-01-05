// js/displayProducts.js
export function displayProducts(products, containerId, extraButtons = () => '') {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    products.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image" />
        <h3>${product.name}</h3>
        <p>Category: ${product.category}</p>
        <p>Price: $${product.price}</p>
        <p>Rating: ${product.rating}⭐</p>
        ${extraButtons(product, index)}
    `;
    
        container.appendChild(productCard);
    });
}
