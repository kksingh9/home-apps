import Slider from "react-slick";

const slides = [
  {
    title: "A BEAUTIFUL ANNIVERSARY GIFT",
    subtitle: "for a Beautiful Couple",
    button: "Order Now",
    bg: "/images/anniversary-banner.jpg",
  },
  {
    title: "SEND LOVE WITH FLOWERS",
    subtitle: "Fresh & Beautiful Bouquets",
    button: "Shop Now",
    bg: "/images/flowers-banner.jpg",
  },
  {
    title: "CELEBRATE WITH CAKES",
    subtitle: "Delicious Treats for Every Occasion",
    button: "Order Cake",
    bg: "/images/cakes-banner.jpg",
  },
];

export default function HeroSlider() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className="h-[400px] flex items-center justify-center text-center text-white"
            style={{
              backgroundImage: `url(${slide.bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="bg-black/40 p-6 rounded-lg">
              <h2 className="text-3xl md:text-5xl font-bold">{slide.title}</h2>
              <p className="text-lg md:text-2xl mt-2 italic">{slide.subtitle}</p>
              <button className="mt-4 bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600">
                {slide.button}
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}