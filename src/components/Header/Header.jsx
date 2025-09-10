import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import './Header.scss';

const Header = ({ onCartClick, cartItemsCount, onMenuToggle, isMenuOpen }) => {
  const location = useLocation();

  const isActiveLink = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

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
          <Link to="/">
            <h1>ShopEasy</h1>
          </Link>
        </div>

        {/* Navigation */}
        <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
          <Link 
            to="/" 
            className={`header__nav-link ${isActiveLink('/') ? 'header__nav-link--active' : ''}`}
            onClick={() => onMenuToggle && onMenuToggle()}
          >
            Home
          </Link>
          <Link 
            to="/products" 
            className={`header__nav-link ${isActiveLink('/products') ? 'header__nav-link--active' : ''}`}
            onClick={() => onMenuToggle && onMenuToggle()}
          >
            Products
          </Link>
          <Link 
            to="/about" 
            className={`header__nav-link ${isActiveLink('/about') ? 'header__nav-link--active' : ''}`}
            onClick={() => onMenuToggle && onMenuToggle()}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`header__nav-link ${isActiveLink('/contact') ? 'header__nav-link--active' : ''}`}
            onClick={() => onMenuToggle && onMenuToggle()}
          >
            Contact
          </Link>
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