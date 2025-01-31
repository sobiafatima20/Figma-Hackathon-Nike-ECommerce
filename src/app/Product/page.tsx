"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "@sanity/client";

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
  colors: string[];
  status: string;
  imageUrl: string;
  description?: string;
  slug: { 
    current: string 
  };
};

const ProductPage = () => {

  const [products, setProducts] = useState<Product[]>([]);
  const [sortedProducts, setSortedProducts] = useState<Product[]>([]);
  const [filterVisible, setFilterVisible] = useState(true);
  const [productsVisible, setProductsVisible] = useState(true);
  const [sortVisible, setSortVisible] = useState(false);
  const [sortCriteria, setSortCriteria] = useState<string>("");

  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

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
        description,
        slug
      }`;
      try {
        const result = await client.fetch(query);
        setProducts(result);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let sorted = [...products];
    if (sortCriteria === "featured") {
      sorted = sorted.sort((a, b) => a.productName.localeCompare(b.productName));
    } else if (sortCriteria === "newest") {
      sorted = sorted.sort((a, b) => b.price - a.price); // Assuming price indicates newness
    } else if (sortCriteria === "lowToHigh") {
      sorted = sorted.sort((a, b) => a.price - b.price);
    } else if (sortCriteria === "highToLow") {
      sorted = sorted.sort((a, b) => b.price - a.price);
    }
    setSortedProducts(sorted);
  }, [sortCriteria, products]);

  // Handle pagination and page change
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(sortedProducts.length / productsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSortClick = (criteria: string) => {
    setSortCriteria(criteria);
    setSortVisible(false); // Close dropdown after selection
  };

  // Toggle filter visibility
  const toggleFilters = () => {
    setFilterVisible(!filterVisible);
    setProductsVisible(!filterVisible); // Hide products when filters are hidden
  };

  return (
    <section className="w-full px-4 md:px-8 py-8">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside>
          {/* Sidebar Content */}
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search for products..."
            className="border border-gray-300 rounded-lg px-4 py-2 w-full max-w-xs focus:outline-none focus:ring focus:border-blue-300"
          />

          {/* Categories Section */}
          <h3 className="font-sans font-bold text-[18px] text-[#111111]">Categories</h3>
          <div>
            <ul className="space-y-3">
              {[
                "Shoes",
                "Sports Bras",
                "Tops & T-Shirts",
                "Hoodies & Sweatshirts",
                "Jackets",
                "Trousers & Tights",
                "Shorts",
                "Tracksuits",
                "Jumpsuits & Rompers",
                "Skirts & Dresses",
                "Socks",
                "Accessories & Equipment",
              ].map((item, index) => (
                <li
                  key={index}
                  className="text-slate-800 font-medium leading-tight hover:underline cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Gender Filter */}
          <div className="relative border-t border-b border-slate-200 py-4">
            <h3 className="text-lg font-medium mb-3">Gender</h3>
            <div className="space-y-2">
              {["Men", "Women", "Unisex"].map((gender, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    id={gender.toLowerCase()}
                    className="form-checkbox h-4 w-4 text-slate-800 bg-slate-200 border-gray-300 rounded-sm focus:ring-slate-500"
                  />
                  <label
                    htmlFor={gender.toLowerCase()}
                    className="ml-2 text-slate-800 font-medium cursor-pointer"
                  >
                    {gender}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div className="border-b border-slate-200 py-4">
            <h3 className="text-lg font-medium mb-3">Shop By Price</h3>
            <div className="space-y-2">
              {["Under ₹2500.00", "₹2501.00 - ₹5000.00"].map((price, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`price-${index}`}
                    className="form-checkbox h-4 w-4 text-slate-800 bg-slate-200 border-gray-300 rounded-sm focus:ring-slate-500"
                  />
                  <label
                    htmlFor={`price-${index}`}
                    className="ml-2 text-slate-800 font-medium cursor-pointer"
                  >
                    {price}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 md:ml-6">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-white shadow rounded-lg">
            <div className="text-lg font-semibold mx-4">
              New{" "}
              <span className="text-gray-500">({currentProducts.length})</span>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleFilters}
                className="flex items-center bg-gray-100 px-4 py-2 rounded-lg shadow-sm text-gray-600 hover:bg-gray-200"
              >
                {filterVisible ? "Hide Filters" : "Show Filters"}
              </button>

              {/* Sort By Button */}
              <div className="relative">
                <button
                  onClick={() => setSortVisible(!sortVisible)}
                  className="flex items-center bg-gray-100 px-4 py-2 rounded-lg shadow-sm text-gray-600 hover:bg-gray-200"
                >
                  Sort By
                </button>

                {sortVisible && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
                    <button
                      onClick={() => handleSortClick("featured")}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Featured
                    </button>
                    <button
                      onClick={() => handleSortClick("newest")}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Newest
                    </button>
                    <button
                      onClick={() => handleSortClick("lowToHigh")}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Price: Low to High
                    </button>
                    <button
                      onClick={() => handleSortClick("highToLow")}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Price: High to Low
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          {productsVisible && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {currentProducts.map((product) => {
                // const productSlug = product?.slug?.current || "default-slug";

                return (
                  <div
                    key={product._id}
                    className="border border-[#CCCCCC] p-4 rounded-lg hover:shadow-md transition-shadow duration-300 cursor-pointer"
                  >
                    <Link href={`./Product/${product.slug}`}>
                      <div className="relative w-full h-[300px] mb-4">
                        <Image
                          src={product.imageUrl}
                          alt={product.productName}
                          width={200}
                          height={200}
                          className="mb-4 object-cover rounded-lg"
                        />
                        <p className="font-sans font-medium text-[14px] text-[#FF0000] mb-2">
                          {product.status}
                        </p>
                        <p className="font-sans font-bold text-[16px] text-[#111111]">
                          {product.productName}
                        </p>
                        <p className="font-sans font-medium text-[14px] text-[#666666]">
                          ₹{product.price}
                        </p>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          )}

          {/* Pagination Controls */}
          <div className="flex justify-center mt-8">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg mr-4 disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === Math.ceil(sortedProducts.length / productsPerPage)}
              className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </main>
      </div>
    </section>
  );
};

export default ProductPage;
