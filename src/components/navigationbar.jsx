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
    <nav className="bg-red-600 dark:bg-black">
      <div className="overflow-x-auto">
        <ul className="flex whitespace-nowrap justify-start md:justify-center gap-4 md:gap-8 text-white font-medium py-3 px-4">
          {categories.map((category) => (
            <li
              key={category}
              className="shrink-0 flex items-center gap-1 cursor-pointer hover:text-gray-200 text-sm md:text-base"
            >
              {category}
              <ChevronDown size={14} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}