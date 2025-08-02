"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import OfferCard from "./OfferCard";

const offersData = [
  {
    title: "New Arrivals",
    discount: "20% OFF",
    imageUrl: "/slider4.png",
    href: "/shop/new",
  },
  {
    title: "Summer Sale",
    discount: "UP TO 50%",
    imageUrl: "/slider5.png",
    href: "/offers",
  },
  {
    title: "Tech Deals",
    discount: "SAVE $100",
    imageUrl: "/slider2.png",
    href: "/shop/tech",
  },
  {
    title: "Home Decor",
    discount: "30% OFF",
    imageUrl: "/slider1.png",
    href: "/shop/home",
  },
  {
    title: "Kids Collection",
    discount: "BOGO FREE",
    imageUrl: "/slider3.png",
    href: "/shop/kids",
  },
];

const OffersSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {offersData.map((offer, index) => (
            <div className="embla__slide p-2" key={index}>
              <OfferCard {...offer} />
            </div>
          ))}
        </div>
      </div>
      <button
        className="embla__prev absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-light-blue-grey"
        onClick={scrollPrev}
      >
        <FiChevronLeft className="w-6 h-6 text-dark-slate" />
      </button>
      <button
        className="embla__next absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-light-blue-grey"
        onClick={scrollNext}
      >
        <FiChevronRight className="w-6 h-6 text-dark-slate" />
      </button>
    </div>
  );
};

export default OffersSlider;
