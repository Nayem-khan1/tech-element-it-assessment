import Link from "next/link";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import Logo from "./navbar/Logo";

const Footer = () => {
  return (
    <footer className="bg-dark-slate text-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-light-blue-grey text-sm">
              The best place to find stylish and high-quality products for your
              home and lifestyle.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="hover:text-light-blue-grey">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-light-blue-grey">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-light-blue-grey">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold">Customer Service</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/shipping"
                  className="hover:text-light-blue-grey"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-light-blue-grey"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex mt-4 space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-light-blue-grey"
              >
                <FiFacebook className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-light-blue-grey"
              >
                <FiTwitter className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-light-blue-grey"
              >
                <FiInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-charcoal-blue pt-8 text-center text-sm text-light-blue-grey">
          <p>
            &copy; {new Date().getFullYear()} Shop. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
