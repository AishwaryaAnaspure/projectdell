# projectdell
# **E-Commerce Website Project**

A fully functional, responsive e-commerce website showcasing products and enabling basic shopping functionalities like adding items to a cart or wishlist. This project is built with HTML, CSS, and JavaScript, using a Glitch server for backend operations and deployed on Netlify for hosting.

---

## **Features**

- **Responsive Navbar**: Fully responsive navigation bar with links to the homepage, cart, and wishlist.
- **Dynamic Product Display**: Dynamically fetch and display products with images, titles, and prices.
- **Shopping Cart**: Add products to the cart and view the list of selected items.
- **Wishlist**: Save your favorite products in a wishlist for future reference.
- **Custom Logo and Images**: Integrated brand logo and product images hosted on Netlify.
- **Backend API Integration**: Data fetched from a backend server hosted on Glitch.
- **Deployed on Netlify**: Fully hosted and deployed for public access.

---

## **Project Structure**

```
PROJECTDELL/
├── assets/                   # Contains logo and product images
│   ├── logo.png
│   ├── Laptop.png
│   ├── Mouse.png
│   ├── Keyboard.png
│   ├── Headphones.png
│   └── CPU.png
├── css/                      # Stylesheets for the website
│   └── styles.css
├── js/                       # JavaScript modules
│   ├── app.js                # Main application logic
│   ├── navbar.js             # Navbar creation module
│   ├── displayProducts.js    # Product display functionality
│   ├── cart.js               # Cart functionality
│   └── wishlist.js           # Wishlist functionality
├── pages/                    # HTML files for different pages
│   ├── index.html            # Homepage
│   ├── cart.html             # Shopping cart page
│   └── wishlist.html         # Wishlist page
└── README.md                 # Project documentation (this file)
```

---

## **Technologies Used**

### **Frontend**
- HTML5
- CSS3
- JavaScript (ES6 Modules)

### **Backend**
- Glitch Server (Node.js)
  - Handles API requests for product data.

### **Hosting**
- **Frontend**: Deployed on Netlify
- **Backend**: Hosted on Glitch

---

## **Setup Instructions**

### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/your-repo.git
cd PROJECTDELL
```

### **2. Run the Glitch Server**
1. Go to (https://glitch.com/).
2. Import the backend code into Glitch and start the server.
3. Note the Glitch project URL (e.g., `https://your-glitch-project.glitch.me`).

### **3. Update Backend API URLs**
- Open your JavaScript files (e.g., `app.js`, `displayProducts.js`).
- Replace any hardcoded API URLs with your Glitch server's URL.

### **4. Deploy to Netlify**
1. Log in to (https://www.netlify.com/).
2. Drag and drop your project folder or connect your GitHub repository.
3. Update asset URLs to point to your Netlify deployment (if needed).

### **5. View the Site**
- Access your deployed site via the Netlify domain provided.

---

## **Live Demo**

- **Frontend**: (https://projectdell.netlify.app/)
- **Backend**: (https://projectdell.glitch.me/)

---

## **Contributing**

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Added a new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Submit a pull request.

---


## **Contact**

If you have any questions, suggestions, or issues, feel free to reach out:

- **Your Name**: Aishwarya M Anaspure
- **Email**: anaspureaish123@gmail.com

---
