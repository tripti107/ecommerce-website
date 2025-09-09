import React from 'react';
import { X, ShoppingCart, Star } from 'lucide-react';
import './ProductModal.scss';

const ProductModal = ({ product, isOpen, onClose, onAddToCart }) => {
  if (!isOpen || !product) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleAddToCart = () => {
    onAddToCart(product);
    onClose();
  };

  return (
    <div className="product-modal" onClick={handleOverlayClick}>
      <div className="product-modal__content">
        <button 
          className="product-modal__close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <div className="product-modal__body">
          <div className="product-modal__image-section">
            <img 
              src={product.image} 
              alt={product.name}
              className="product-modal__image"
            />
          </div>

          <div className="product-modal__info-section">
            <div className="product-modal__category">
              {product.category}
            </div>
            
            <h2 className="product-modal__name">{product.name}</h2>
            
            <div className="product-modal__rating">
              {[1, 2, 3, 4, 5].map(star => (
                <Star 
                  key={star}
                  size={16} 
                  className={star <= 4 ? 'star-filled' : 'star-empty'}
                />
              ))}
              <span className="product-modal__rating-text">(4.0) • 128 reviews</span>
            </div>

            <div className="product-modal__price">
              ${product.price.toFixed(2)}
            </div>

            <p className="product-modal__description">
              {product.description}
            </p>

            <div className="product-modal__features">
              <h4>Key Features:</h4>
              <ul>
                <li>High quality materials and construction</li>
                <li>1-year manufacturer warranty included</li>
                <li>Free shipping on orders over $50</li>
                <li>30-day return policy</li>
              </ul>
            </div>

            <div className="product-modal__actions">
              <button 
                className="product-modal__add-to-cart"
                onClick={handleAddToCart}
              >
                <ShoppingCart size={18} />
                Add to Cart
              </button>
              
              <button className="product-modal__wishlist">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;