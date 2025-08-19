const categories = [
    { name: "Cakes", img: "/images/cakes.jpg" },
    { name: "Flowers", img: "/images/flowers.jpg" },
    { name: "Combos", img: "/images/combos.jpg" },
    { name: "Chocolates", img: "/images/chocolates.jpg" },
    { name: "Fruits", img: "/images/fruits.jpg" },
    { name: "Soft Toys", img: "/images/soft-toys.jpg" },
    { name: "Sweets", img: "/images/sweets.jpg" },
    { name: "Personalized", img: "/images/personalized.jpg" },
  ];
  
  export default function CategoryGrid() {
    return (
      <section className="py-6 px-4">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-4 sm:gap-6 text-center">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover rounded-md shadow"
              />
              <span className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-100">{cat.name}</span>
            </div>
          ))}
        </div>
      </section>
    );
  }