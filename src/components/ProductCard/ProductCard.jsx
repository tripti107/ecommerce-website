import React from 'react';
import { ShoppingCart, Eye } from 'lucide-react';
import './ProductCard.scss';

const ProductCard = ({ product, onAddToCart, onViewDetails }) => {
  const handleAddToCart = (e) => {
    e.stopPropagation();
    onAddToCart(product);
  };

  const handleViewDetails = () => {
    onViewDetails(product);
  };

  return (
    <div className="product-card" onClick={handleViewDetails}>
      <div className="product-card__image-container">
        <img 
          src={product.image} 
          alt={product.name}
          className="product-card__image"
          loading="lazy"
        />
        <div className="product-card__overlay">
          <button 
            className="product-card__quick-view"
            onClick={handleViewDetails}
            aria-label={`View details for ${product.name}`}
          >
            <Eye size={16} />
            Quick View
          </button>
        </div>
      </div>
      
      <div className="product-card__content">
        <div className="product-card__category">
          {product.category}
        </div>
        
        <h3 className="product-card__name">{product.name}</h3>
        
        <p className="product-card__description">
          {product.description.length > 80 
            ? `${product.description.substring(0, 80)}...` 
            : product.description
          }
        </p>
        
        <div className="product-card__footer">
          <span className="product-card__price">
            ${product.price.toFixed(2)}
          </span>
          
          <button 
            className="product-card__add-to-cart"
            onClick={handleAddToCart}
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart size={16} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;