"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const sliderData = [
  {
    id: 1,
    title: "Modern Furniture Collection",
    info: "Find the perfect pieces to complete your home. Stylish, durable, and affordable.",
    buttonName: "Shop Collection",
    url: "/shop",
    image: "/slider1.png",
  },
  {
    id: 2,
    title: "Exclusive Tech Gadgets",
    info: "Discover the latest in tech. Upgrade your life with our new arrivals.",
    buttonName: "Explore Gadgets",
    url: "/shop/tech",
    image: "/slider2.png",
  },
  {
    id: 3,
    title: "Summer Fashion Deals",
    info: "Get ready for the sun with our vibrant summer collection. Up to 40% off.",
    buttonName: "View Deals",
    url: "/offers",
    image: "/slider3.png",
  },
];

const HeroCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="rounded-lg">
      <div className="embla rounded-lg" ref={emblaRef}>
        <div className="embla__container rounded-lg">
          {sliderData.map((item) => (
            <div
              className="embla__slide relative h-96 rounded-lg"
              key={item.id}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                objectFit="cover"
                className="z-0 rounded-lg"
              />
              <div className="absolute inset-0 bg-black/35 z-10 rounded-lg"></div>
              <div className="absolute inset-0 z-20 flex items-center justify-start text-left text-white p-6 md:p-12">
                <div className="max-w-lg">
                  <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    {item.title}
                  </h1>
                  <p className="text-base md:text-xl mb-6">{item.info}</p>
                  <Link
                    href={item.url}
                    className="bg-white text-dark-slate font-bold py-3 px-8 rounded-lg hover:bg-light-blue-grey transition-colors"
                  >
                    {item.buttonName}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
