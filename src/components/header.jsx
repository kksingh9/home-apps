import { Heart, ShoppingCart, Phone, Search, Menu, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext.jsx";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="px-4 py-3 shadow bg-white dark:bg-black dark:text-white">
      <div className="flex items-center justify-between">
        {/* Logo + Tagline */}
        <div className="flex flex-col items-start">
          <div className="flex items-center text-xl md:text-2xl font-bold">
            <span className="text-red-500">Send</span>
            <span className="text-teal-500">Best</span>
            <span className="text-red-500">Gift</span>
          </div>
          <span className="text-[10px] md:text-xs text-gray-500 italic">
            SMILES AT YOUR DOORSTEP
          </span>
        </div>

        {/* Search Bar (hidden on very small screens) */}
        <div className="hidden md:flex items-center border border-gray-300 dark:border-gray-700 rounded-md overflow-hidden w-64 bg-white dark:bg-gray-900">
          <input
            type="text"
            placeholder="Search Flower Cake Gifts..."
            className="px-3 py-2 outline-none w-full bg-transparent text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          />
          <button className="px-3 text-red-500 dark:text-red-400">
            <Search size={18} />
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center text-black dark:text-white">
            <Phone className="text-red-500 dark:text-red-400 mr-2" size={18} />
            <span>+91-955 515 1500</span>
          </div>

          <button className="border border-teal-500 text-teal-500 dark:border-teal-400 dark:text-teal-400 px-3 py-1 rounded-md">
            Sell with us
          </button>

          <div className="flex items-center gap-4 text-red-500 dark:text-red-400 cursor-pointer">
            <div className="flex items-center gap-1">
              <Heart size={18} /> Wishlist
            </div>
            <div className="flex items-center gap-1">
              <ShoppingCart size={18} /> Cart
            </div>
          </div>

          {/* Theme Toggle */}
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="ml-2 p-2 rounded-md border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-red-500 dark:text-red-400"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-3 space-y-3 text-sm">
          {/* Search */}
          <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-md overflow-hidden bg-white dark:bg-gray-900">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-2 outline-none w-full bg-transparent text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
            <button className="px-3 text-red-500 dark:text-red-400">
              <Search size={18} />
            </button>
          </div>

          {/* Contact */}
          <div className="flex items-center text-black dark:text-white">
            <Phone className="text-red-500 dark:text-red-400 mr-2" size={18} />
            <span>+91-955 515 1500</span>
          </div>

          {/* Buttons */}
          <button className="w-full border border-teal-500 text-teal-500 dark:border-teal-400 dark:text-teal-400 px-3 py-2 rounded-md">
            Sell with us
          </button>

          <div className="flex justify-around text-red-500 dark:text-red-400">
            <div className="flex items-center gap-1">
              <Heart size={18} /> Wishlist
            </div>
            <div className="flex items-center gap-1">
              <ShoppingCart size={18} /> Cart
            </div>
          </div>

          {/* Theme Toggle (mobile) */}
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <span className="inline-flex items-center gap-2 justify-center">
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              <span>{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>
            </span>
          </button>
        </div>
      )}
    </header>
  );
}