import { Heart, ShoppingCart, Phone, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-3 shadow">
      {/* Logo + Tagline */}
      <div className="flex items-center gap-3 flex-col">
        <div className="flex items-center text-2xl font-bold">
          <span className="text-red-500">Send</span>
          <span className="text-teal-500">Best</span>
          <span className="text-red-500">Gift</span>
        </div>
        <span className="text-xs text-gray-500 italic">
          SMILES AT YOUR DOORSTEP
        </span>
      </div>

      {/* Search Bar */}
      <div className="flex items-center border rounded-md overflow-hidden">
        <input
          type="text"
          placeholder="Search Flower Cake Gifts..."
          className="px-3 py-2 outline-none w-72"
        />
        <button className="px-3 text-red-500">
          <Search size={18} />
        </button>
      </div>

      {/* Contact + Navigation */}
      <div className="flex items-center gap-6">
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
    </header>
  );
}