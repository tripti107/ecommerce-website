import React from 'react';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import './Header.scss';

const Header = ({ onCartClick, cartItemsCount, onMenuToggle, isMenuOpen }) => {
  return (
    <header className="header">
      <div className="header__container">
        {/* Mobile Menu Toggle */}
        <button 
          className="header__menu-toggle"
          onClick={onMenuToggle}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <div className="header__logo">
          <h1>ShopEasy</h1>
        </div>

        {/* Navigation */}
        <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
          <a href="#home" className="header__nav-link">Home</a>
          <a href="#products" className="header__nav-link">Products</a>
          <a href="#about" className="header__nav-link">About</a>
          <a href="#contact" className="header__nav-link">Contact</a>
        </nav>

        {/* Actions */}
        <div className="header__actions">
          <button className="header__search-btn" aria-label="Search">
            <Search size={20} />
          </button>
          
          <button 
            className="header__cart-btn"
            onClick={onCartClick}
            aria-label={`Cart with ${cartItemsCount} items`}
          >
            <ShoppingCart size={20} />
            {cartItemsCount > 0 && (
              <span className="header__cart-badge">{cartItemsCount}</span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;