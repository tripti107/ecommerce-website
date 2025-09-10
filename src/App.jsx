import React, { useState, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import CartSidebar from "./components/CartSidebar/CartSidebar";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import { useCart } from "./hooks/useCart";
import "./App.scss";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Cart functionality
  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    getCartItemsCount,
  } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    console.log(`Added ${product.name} to cart`);
  };

  return (
    <Router>
      <div className="app">
        <Header
          onCartClick={() => setIsCartOpen(true)}
          cartItemsCount={getCartItemsCount()}
          onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          isMenuOpen={isMobileMenuOpen}
        />

        <main className="app__main">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  onAddToCart={handleAddToCart}
                  selectedProduct={selectedProduct}
                  setSelectedProduct={setSelectedProduct}
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                />
              }
            />
            <Route
              path="/products"
              element={
                <Products
                  onAddToCart={handleAddToCart}
                  selectedProduct={selectedProduct}
                  setSelectedProduct={setSelectedProduct}
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <CartSidebar
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onUpdateQuantity={updateQuantity}
          onRemoveFromCart={removeFromCart}
          getCartTotal={getCartTotal}
        />
      </div>
    </Router>
  );
}

export default App;
