import { Heart, ShoppingCart, Phone, Search, Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="px-4 py-3 shadow bg-white">
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
        <div className="hidden md:flex items-center border rounded-md overflow-hidden w-64">
          <input
            type="text"
            placeholder="Search Flower Cake Gifts..."
            className="px-3 py-2 outline-none w-full"
          />
          <button className="px-3 text-red-500">
            <Search size={18} />
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center text-black">
            <Phone className="text-red-500 mr-2" size={18} />
            <span>+91-955 515 1500</span>
          </div>

          <button className="border border-teal-500 text-teal-500 px-3 py-1 rounded-md">
            Sell with us
          </button>

          <div className="flex items-center gap-4 text-red-500 cursor-pointer">
            <div className="flex items-center gap-1">
              <Heart size={18} /> Wishlist
            </div>
            <div className="flex items-center gap-1">
              <ShoppingCart size={18} /> Cart
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-red-500"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-3 space-y-3 text-sm">
          {/* Search */}
          <div className="flex items-center border rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-2 outline-none w-full"
            />
            <button className="px-3 text-red-500">
              <Search size={18} />
            </button>
          </div>

          {/* Contact */}
          <div className="flex items-center text-black">
            <Phone className="text-red-500 mr-2" size={18} />
            <span>+91-955 515 1500</span>
          </div>

          {/* Buttons */}
          <button className="w-full border border-teal-500 text-teal-500 px-3 py-2 rounded-md">
            Sell with us
          </button>

          <div className="flex justify-around text-red-500">
            <div className="flex items-center gap-1">
              <Heart size={18} /> Wishlist
            </div>
            <div className="flex items-center gap-1">
              <ShoppingCart size={18} /> Cart
            </div>
          </div>
        </div>
      )}
    </header>
  );
}