import React, { useState, useMemo } from 'react';
import ProductFilters from '../../components/ProductFilters/ProductFilters';
import ProductGrid from '../../components/ProductGrid/ProductGrid';
import ProductModal from '../../components/ProductModal/ProductModal';
import { products } from '../../data/products';
import './Home.scss';

const Home = ({ onAddToCart, selectedProduct, setSelectedProduct, isModalOpen, setIsModalOpen }) => {
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
    <div className="home">
      <section className="home__hero">
        <div className="home__hero-content">
          <h1>Welcome to ShopEasy</h1>
          <p>
            Discover amazing products at great prices. From electronics to home goods, 
            find everything you need with our carefully curated selection.
          </p>
          <div className="home__hero-stats">
            <div className="home__stat">
              <span className="home__stat-number">1000+</span>
              <span className="home__stat-label">Products</span>
            </div>
            <div className="home__stat">
              <span className="home__stat-number">50k+</span>
              <span className="home__stat-label">Happy Customers</span>
            </div>
            <div className="home__stat">
              <span className="home__stat-number">24/7</span>
              <span className="home__stat-label">Support</span>
            </div>
          </div>
        </div>
      </section>

      <section className="home__products-section">
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
      </section>

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
};

export default Home;