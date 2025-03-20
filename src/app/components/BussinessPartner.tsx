"use client";
import React from "react";
import Image from "next/image";
import Westin from "@/assets/Images/Westin.png";
import Summit from "@/assets/Images/summit.png";
import Holcim from "@/assets/Images/holcim.png";
import ETV from "@/assets/Images/etv.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const BusinessPartners = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900, // Mobile
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480, // Small Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const partners = [
    { src: Westin, alt: "Westin" },
    { src: Summit, alt: "Summit" },
    { src: Holcim, alt: "Holcim" },
    { src: ETV, alt: "ETV" },
    { src: Westin, alt: "Westin" },
  ];

  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto text-center px-4">
        <h3 className="text-2xl sm:text-3xl font-bold">Business Partners</h3>
        <div className="mt-6">
          <Slider {...settings}>
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex justify-center items-center h-24"
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={140} // Fixed size for consistency
                  height={80}
                  className="object-contain"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default BusinessPartners;
