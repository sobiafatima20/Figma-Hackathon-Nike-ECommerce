"use client";
import { useState, useEffect } from "react";
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
  description: string;
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (searchQuery.trim() !== "") {
      setIsSearching(true);
      const fetchProducts = async () => {
        const query = `*[_type == "product" && productName match "${searchQuery}*"] {
          _id,
          productName,
          category,
          price,
          inventory,
          colors,
          status,
          "imageUrl": image.asset->url,
          description
        }`;
        try {
          const result = await client.fetch(query);
          setFilteredProducts(result);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
      fetchProducts();
    } else {
      setIsSearching(false);
      setFilteredProducts([]);
    }
  }, [searchQuery]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() === "") {
      return;
    }
    setSearchQuery(""); // Clear the search bar
  };

  return (
    <>
      <header>
        {/* Top Header */}
        <div className="hidden sm:flex items-center justify-between w-full h-[28.8px] bg-[#F5F5F5] px-4 sm:px-10">
          <div className="flex items-center w-[19.2px] h-[19.2px]">
            <Image
              src="/images/Topheaderlogo.svg"
              alt="Top Header Logo"
              width={15.36}
              height={14.38}
            />
          </div>
          <div className="flex items-center gap-6 text-sm font-medium text-[#111111]">
            <Link href="./Product">Find a Store</Link>
            <span>|</span>
            <Link href="./Help">Help</Link>
            <span>|</span>
            <Link href="./Joinus">Join Us</Link>
            <span>|</span>
            <Link href="./Signup">Sign In</Link>
          </div>
        </div>

        {/* Navbar */}
        <div className="flex items-center justify-between w-full h-[60px] bg-white px-4 sm:px-10">
          <Link href="./Hero">
            <Image
              src="/images/Logo.svg"
              alt="Logo"
              width={58.85}
              height={20.54}
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="sm:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[#F5F5F5]"
          >
            ☰
          </button>

          {/* Desktop Menu */}
          <nav className="hidden sm:flex items-center space-x-8">
            <ul className="flex items-center space-x-6 text-sm font-medium text-[#111111]">
              <Link href="./Product">New & Featured</Link>
              <Link href="./Product">Men</Link>
              <Link href="./Product">Women</Link>
              <Link href="./Product">Kids</Link>
              <Link href="./Product">Sale</Link>
              <Link href="./Product">SNKRS</Link>
            </ul>
          </nav>

          {/* Search Bar */}
          <div className="hidden sm:flex items-center gap-4">
            <form
              onSubmit={handleSearchSubmit}
              className="flex items-center bg-[#F5F5F5] rounded-full px-3 py-1"
            >
              <Image
                src="/images/searchbar.svg"
                alt="Search"
                width={16.72}
                height={16.72}
              />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent text-sm text-[#CCCCCC] focus:outline-none ml-2 w-20 sm:w-40"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
            <div className="flex items-center justify-center w-9 h-9 bg-[#F5F5F5] rounded-full cursor-pointer">
              <Link href="./Wishlist">
                <Image
                  src="/images/like.svg"
                  alt="Like"
                  width={19.5}
                  height={16.76}
                />
              </Link>
            </div>

            {/* Buy/Cart Icon */}
            <div className="relative flex items-center justify-center w-9 h-9 bg-[#F5F5F5] rounded-full cursor-pointer">
              <Link href="./Cart">
                <Image
                  src="/images/box.svg"
                  alt="Cart"
                  width={19.5}
                  height={16.76}
                />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Render filtered products if searching */}
      {isSearching && (
        <div className="products-list px-4 sm:px-10 py-6">
          {filteredProducts.length === 0 ? (
            <div className="no-products-found text-center py-10">
              <p className="text-lg font-medium text-gray-600">
                No products found
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product._id}
                  className="product-item border p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300"
                >
                  <h3 className="text-xl font-semibold text-gray-800">
                    {product.productName}
                  </h3>
                  <p className="text-sm text-gray-500">{product.category}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Header;
