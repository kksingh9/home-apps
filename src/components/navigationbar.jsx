import { ChevronDown } from "lucide-react";

const categories = [
  "Best Seller",
  "Cakes",
  "Flowers",
  "Gifts",
  "Chocolates",
  "Personalized Gifts",
  "Combos",
  "Birthday",
  "Anniversary",
  "Occasions",
  "Cities",
];

export default function Navbar() {
  return (
    <nav className="bg-red-600">
      <ul className="flex justify-center gap-8 text-white font-medium py-3">
        {categories.map((category) => (
          <li
            key={category}
            className="flex items-center gap-1 cursor-pointer hover:text-gray-200"
          >
            {category}
            <ChevronDown size={14} />
          </li>
        ))}
      </ul>
    </nav>
  );
}