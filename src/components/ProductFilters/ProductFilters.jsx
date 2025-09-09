import React from 'react';
import { Search, Filter } from 'lucide-react';
import { categories } from '../../data/products';
import './ProductFilters.scss';

const ProductFilters = ({ 
  searchTerm, 
  onSearchChange, 
  selectedCategory, 
  onCategoryChange,
  sortBy,
  onSortChange 
}) => {
  return (
    <div className="product-filters">
      <div className="product-filters__search">
        <div className="product-filters__search-input">
          <Search size={20} className="product-filters__search-icon" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="product-filters__input"
          />
        </div>
      </div>

      <div className="product-filters__controls">
        <div className="product-filters__group">
          <label className="product-filters__label">
            <Filter size={16} />
            Category
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="product-filters__select"
          >
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="product-filters__group">
          <label className="product-filters__label">Sort By</label>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="product-filters__select"
          >
            <option value="name">Name</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest First</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;