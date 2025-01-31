'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface CartItem {
  _id: string; // ID of the product
  productName: string; // Name of the product
  category: string; // Category of the product
  price: number; // Price of the product
  inventory: number; // Available inventory
  colors?: string[]; // Colors of the product
  status: string; // Product availability status
  imageUrl: string; // Image URL for the product
  description?: string; // Description of the product
  slug: { current: string }; // Slug of the product
  size?: string; // Optional size property
  quantity: number; // Quantity of the product in the cart
}

interface CartContextType {
  cart: CartItem[]; // Array of items in the cart
  addToCart: (product: CartItem) => void; // Function to add a product to the cart
  removeFromCart: (productId: string, size?: string) => void; // Function to remove a product from the cart
  updateQuantity: (productId: string, size?: string, quantity: number) => void; // Function to update product quantity
  getCartItemsCount: () => number; // Function to get the total number of items in the cart
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// CartProvider to manage cart state and interact with localStorage
interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isClient, setIsClient] = useState(false);

  // Load cart from localStorage when the component mounts
  useEffect(() => {
    setIsClient(true);
    try {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isClient) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart, isClient]);

  // Add a product to the cart
  const addToCart = (product: CartItem) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item._id === product._id && item.size === product.size
      );
      if (existingProduct) {
        return prevCart.map((item) =>
          item._id === product._id && item.size === product.size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove a product from the cart (match both id and size)
  const removeFromCart = (productId: string, productSize?: string) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) =>
          item._id !== productId || (productSize && item.size !== productSize)
      )
    );
  };

  // Update the quantity of a product
  // const updateQuantity = (productId: string, size: string, quantity: number) => {
  //   setCart((prevCart) =>
  //     prevCart.map((item) =>
  //       item._id === productId && item.size === size ? { ...item, quantity } : item
  //     )
  //   );
  // };

  // Get the total number of cart items
  const getCartItemsCount = () => cart.reduce((total, item) => total + item.quantity, 0);

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
