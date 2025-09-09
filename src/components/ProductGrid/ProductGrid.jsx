import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductGrid.scss';

const ProductGrid = ({ products, onAddToCart, onViewDetails }) => {
  if (products.length === 0) {
    return (
      <div className="product-grid__empty">
        <h3>No products found</h3>
        <p>Try adjusting your search or filter criteria.</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
};

export default ProductGrid;