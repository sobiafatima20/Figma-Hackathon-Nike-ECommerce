"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { createClient } from "@sanity/client";
import { CiHeart } from "react-icons/ci";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: "2021-08-31",
});

type Product = {
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
};

const ProductDetail = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"] {
        _id,
        productName,
        category,
        price,
        inventory,
        colors,
        status,
        "imageUrl": image.asset->url,
        slug,
        description
      }`;
      try {
        const result = await client.fetch(query);
        setProducts(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleBack = () => {
    setSelectedProduct(null);
  };

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
  };

  // cart handle
  const handleAddToCart = (product: Product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const isProductInCart = existingCart.some(
      (item: Product) => item._id === product._id
    );

    if (isProductInCart) {
      setNotification(`${product.productName} is already in your cart!`);
    } else {
      const updatedCart = [...existingCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setNotification(`${product.productName} added to cart!`);
    }

    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  // wishlist handle
  const handleAddToFavirote = (product: Product) => {
    const existingWishlist = JSON.parse(
      localStorage.getItem("wishlist") || "[]"
    );
    const isProductInWishlist = existingWishlist.some(
      (item: Product) => item._id === product._id
    );

    if (isProductInWishlist) {
      setNotification(`${product.productName} is already in your Wishlist!`);
    } else {
      const updatedWishlist = [...existingWishlist, product];
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      setNotification(`${product.productName} added to Wishlist!`);
    }

    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  return (
    <section className="w-full px-4 md:px-8 py-8">
      {notification && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-md shadow-md">
          {notification}
        </div>
      )}
      {loading ? (
        <div className="text-center">Loading products...</div>
      ) : selectedProduct ? (
        <div>
          <button
            onClick={handleBack}
            className="text-blue-500 mb-4 underline hover:text-blue-700"
          >
            Back to products
          </button>
          <div className="flex flex-col md:flex-row items-start">
            <div className="w-full md:w-1/2">
              <Image
                src={selectedProduct.imageUrl}
                alt={selectedProduct.productName}
                width={400}
                height={400}
                className="object-cover rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2 md:ml-8">
              <h1 className="text-2xl font-bold">
                {selectedProduct.productName}
              </h1>
              <p className="text-lg text-gray-600 my-2">
                {selectedProduct.status}
              </p>
              <p className="text-lg text-gray-600 my-2">
                {selectedProduct.category}
              </p>
              <p className="text-sm text-gray-500">
                {selectedProduct.description}
              </p>
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Available Colors</h3>
                {selectedProduct.colors && selectedProduct.colors.length > 0 ? (
                  <div className="flex space-x-2 mt-2">
                    {selectedProduct.colors.map((color, index) => (
                      <span
                        key={index}
                        className="w-6 h-6 rounded-full"
                        style={{ backgroundColor: color }}
                      ></span>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">No colors available</p>
                )}
              </div>
              <p className="text-lg text-gray-600 my-2">
                Stock {selectedProduct.inventory}
              </p>
              <p className="text-lg text-gray-600 my-2">
                ₹{selectedProduct.price}
              </p>
              <div className="mt-6">
                <div className="flex items-center space-x-4 mt-6">
                  <button
                    onClick={() => handleAddToCart(selectedProduct)}
                    className="flex items-center justify-center bg-[#111111] text-[#FFFFFF] px-8 py-4 rounded-[30px] w-[450px] shadow-md hover:bg-gray-300 transition"
                  >
                    Add To Cart
                  </button>

                  <button
                    onClick={() => handleAddToFavirote(selectedProduct)}
                    className="flex items-center justify-center bg-[#FFFFFF] border border-gray-300 text-gray-800 px-6 py-3 rounded-[30px] shadow-md hover:bg-gray-200 transition"
                  >
                    <CiHeart size={24} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div
              key={product._id}
              className="cursor-pointer border p-4 rounded-md shadow-md"
              onClick={() => handleProductSelect(product)}
            >
              <Image
                src={product.imageUrl}
                alt={product.productName}
                width={200}
                height={200}
                className="object-cover rounded-md"
              />
              <h2 className="text-xl font-semibold mt-4">
                {product.productName}
              </h2>
              <p className="text-lg text-gray-600 mt-2">₹{product.price}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductDetail;
