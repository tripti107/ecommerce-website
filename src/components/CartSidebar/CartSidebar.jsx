import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import './CartSidebar.scss';

const CartSidebar = ({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveFromCart, 
  getCartTotal 
}) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleCheckout = () => {
    alert('Checkout functionality would be implemented here!');
    onClose();
  };

  return (
    <div 
      className={`cart-sidebar ${isOpen ? 'cart-sidebar--open' : ''}`}
      onClick={handleOverlayClick}
    >
      <div className="cart-sidebar__content">
        <div className="cart-sidebar__header">
          <div className="cart-sidebar__title">
            <ShoppingBag size={20} />
            Shopping Cart ({cartItems.length})
          </div>
          <button 
            className="cart-sidebar__close"
            onClick={onClose}
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        <div className="cart-sidebar__body">
          {cartItems.length === 0 ? (
            <div className="cart-sidebar__empty">
              <ShoppingBag size={48} className="cart-sidebar__empty-icon" />
              <p>Your cart is empty</p>
              <button className="cart-sidebar__continue-shopping" onClick={onClose}>
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="cart-sidebar__items">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item__image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  
                  <div className="cart-item__details">
                    <h4 className="cart-item__name">{item.name}</h4>
                    <div className="cart-item__price">
                      ${item.price.toFixed(2)}
                    </div>
                    
                    <div className="cart-item__controls">
                      <div className="cart-item__quantity">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className="cart-item__quantity-btn"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="cart-item__quantity-value">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="cart-item__quantity-btn"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      
                      <button 
                        onClick={() => onRemoveFromCart(item.id)}
                        className="cart-item__remove"
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-sidebar__footer">
            <div className="cart-sidebar__total">
              <div className="cart-sidebar__total-label">Total:</div>
              <div className="cart-sidebar__total-amount">
                ${getCartTotal().toFixed(2)}
              </div>
            </div>
            
            <button 
              className="cart-sidebar__checkout"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;