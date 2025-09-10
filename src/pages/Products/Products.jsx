import React, { useState, useMemo } from 'react';
import ProductFilters from '../../components/ProductFilters/ProductFilters';
import ProductGrid from '../../components/ProductGrid/ProductGrid';
import ProductModal from '../../components/ProductModal/ProductModal';
import { products } from '../../data/products';
import { Package, Filter, Grid } from 'lucide-react';
import './Products.scss';

const Products = ({ onAddToCart, selectedProduct, setSelectedProduct, isModalOpen, setIsModalOpen }) => {
  // Filter and search states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
    onAddToCart(product);
    console.log(`Added ${product.name} to cart`);
  };

  return (
    <div className="products-page">
      <div className="products-page__header">
        <div className="products-page__title-section">
          <div className="products-page__icon">
            <Package size={32} />
          </div>
          <div>
            <h1 className="products-page__title">Our Products</h1>
            <p className="products-page__subtitle">
              Browse our complete collection of {products.length} carefully selected products
            </p>
          </div>
        </div>
        
        <div className="products-page__stats">
          <div className="products-page__stat">
            <Grid size={20} />
            <span>{filteredProducts.length} Products</span>
          </div>
          <div className="products-page__stat">
            <Filter size={20} />
            <span>Advanced Filters</span>
          </div>
        </div>
      </div>

      <div className="products-page__content">
        <ProductFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        <ProductGrid
          products={filteredProducts}
          onAddToCart={handleAddToCart}
          onViewDetails={handleViewDetails}
        />
      </div>

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
};

export default Products;