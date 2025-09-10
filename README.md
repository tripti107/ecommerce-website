# ShopEasy - Modern Ecommerce Website

A modern, responsive ecommerce website built with React, SCSS, and JavaScript. Perfect for learning frontend development concepts and modern web development practices.

![ShopEasy Preview](https://via.placeholder.com/800x400/2563eb/ffffff?text=ShopEasy+Ecommerce+Website)

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive Layout**: Mobile-first design that works on all devices
- **Product Catalog**: Browse products with search and category filtering
- **Shopping Cart**: Add, remove, and manage items with persistent storage
- **Product Details**: Modal view with detailed product information
- **Multi-page Navigation**: Home, Products, About, and Contact pages
- **Interactive Forms**: Contact form with validation
- **Local Storage**: Cart persists between sessions

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **React Router DOM** - Client-side routing
- **SCSS** - Advanced CSS with variables and mixins
- **Lucide React** - Beautiful, customizable icons
- **Vite** - Fast build tool and development server
- **JavaScript ES6+** - Modern JavaScript features

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/shopeasy-ecommerce.git
   cd shopeasy-ecommerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header/         # Navigation header
│   ├── ProductCard/    # Individual product display
│   ├── ProductGrid/    # Product listing grid
│   ├── ProductModal/   # Product detail modal
│   ├── ProductFilters/ # Search and filter controls
│   └── CartSidebar/    # Shopping cart sidebar
├── pages/              # Page components
│   ├── Home/          # Homepage with hero section
│   ├── Products/      # Product catalog page
│   ├── About/         # About us page
│   └── Contact/       # Contact form page
├── hooks/              # Custom React hooks
│   └── useCart.js     # Shopping cart logic
├── data/               # Static data
│   └── products.js    # Product catalog data
├── styles/             # SCSS styling
│   ├── variables.scss # Design tokens
│   └── mixins.scss    # Reusable style mixins
└── App.jsx            # Main application component
```

## 🎨 Design System

### Colors
- **Primary**: #2563eb (Blue)
- **Secondary**: #64748b (Slate)
- **Accent**: #f59e0b (Amber)
- **Success**: #10b981 (Emerald)
- **Error**: #ef4444 (Red)

### Typography
- **Font Family**: Inter
- **Weights**: 400, 500, 600, 700
- **Responsive scaling** with proper line heights

### Spacing
- **8px grid system** for consistent spacing
- **Responsive breakpoints**: Mobile (480px), Tablet (768px), Desktop (1024px)

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The website is fully responsive with:
- **Mobile-first approach**
- **Flexible grid layouts**
- **Touch-friendly interactions**
- **Optimized images and performance**

## 🛒 Cart Functionality

- Add products to cart
- Update quantities
- Remove items
- Persistent storage using localStorage
- Real-time cart total calculation
- Cart badge with item count

## 🔧 Customization

### Adding New Products
Edit `src/data/products.js` to add new products:

```javascript
{
  id: 9,
  name: "Your Product Name",
  price: 99.99,
  image: "https://your-image-url.jpg",
  category: "your-category",
  description: "Product description"
}
```

### Styling
- Modify `src/styles/variables.scss` for colors and spacing
- Update component-specific SCSS files for styling changes
- Use the mixin system for consistent styling patterns

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Pexels** for providing high-quality product images
- **Lucide** for beautiful icons
- **Inter Font** for clean typography
- **React Team** for the amazing framework

## 📞 Contact

- **Email**: your.email@example.com
- **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
- **Portfolio**: [Your Portfolio Website](https://yourportfolio.com)

---

⭐ **Star this repository if you found it helpful!**