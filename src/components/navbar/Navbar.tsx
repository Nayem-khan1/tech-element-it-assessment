"use client";

import { useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { FiShoppingCart, FiUser, FiSearch, FiMenu, FiX } from "react-icons/fi";
import Logo from "./Logo";
import MobileNav from "./MobileNav";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Orders", href: "/orders" },
  { name: "Offers", href: "/offers" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <header className="bg-dark-slate sticky top-0 z-30">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Logo />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex md:items-center md:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-light-blue-grey transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Icons and Mobile Menu Button */}
            <div className="flex items-center gap-4">
              <button
                aria-label="Search"
                className="text-white hover:text-light-blue-grey"
              >
                <FiSearch className="w-6 h-6" />
              </button>

              <Link
                href="/cart"
                aria-label="Shopping Cart"
                className="relative text-white hover:text-light-blue-grey"
              >
                <FiShoppingCart className="w-6 h-6" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
                    {cartItemCount}
                  </span>
                )}
              </Link>

              <Link
                href="/profile"
                aria-label="User Profile"
                className="text-white hover:text-light-blue-grey"
              >
                <FiUser className="w-6 h-6" />
              </Link>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label="Open mobile menu"
                  className="text-white"
                >
                  {isMobileMenuOpen ? (
                    <FiX className="w-6 h-6" />
                  ) : (
                    <FiMenu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <MobileNav isOpen={isMobileMenuOpen} navLinks={navLinks} />
    </>
  );
};

export default Navbar;
