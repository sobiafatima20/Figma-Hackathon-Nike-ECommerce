'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface CartItem {
  _id: string;
  productName: string;
  category: string;
  price: number;
  inventory: number;
  colors?: string[];
  status: string;
  imageUrl: string;
  description?: string;
  slug: { current: string };
  size?: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (productId: string, size?: string) => void;
  getCartItemsCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== 'undefined') {
      try {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
          setCart(JSON.parse(storedCart));
        }
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []);

  useEffect(() => {
    if (isClient && typeof window !== 'undefined') {
      try {
        localStorage.setItem('cart', JSON.stringify(cart));
      } catch (error) {
        console.error('Error saving cart to localStorage:', error);
      }
    }
  }, [cart, isClient]);

  const addToCart = (product: CartItem) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId: string, productSize?: string) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) => item._id !== productId || (productSize && item.size !== productSize)
      )
    );
  };

  const getCartItemsCount = () => cart.length;

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getCartItemsCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
