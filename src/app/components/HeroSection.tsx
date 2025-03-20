import React from "react";
import Image from "next/image";
import phone from "@/assets/icons/phone.svg";
import facebook from "@/assets/icons/facebook.svg";
import youtube from "@/assets/icons/youtube.svg";
import linkedIn from "@/assets/icons/linkedIn.svg";
import instagram from "@/assets/icons/instagram.svg";
import car from "@/assets/icons/car.svg";
import home from "@/assets/icons/home.svg";
import familyImage from "@/assets/Images/family.png";

const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between bg-white pl-0 lg:pl-6 md:px-12">
      {/* Left Section */}
      <div className="lg:w-1/2 flex flex-col justify-center">
        <p className="sm:text-3xl lg:text-6xl font-bold text-gray-900 lg:text-left text-center md:text-center pt-4 lg:pt-0">
          Chase Your Dream with us
        </p>
        <p className="text-gray-500 text-base md:text-lg text-center lg:text-left px-4 lg:px-0">
          The harder you work for something, the greater you’ll feel when you
          achieve it.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center lg:justify-start gap-4 px-4 lg:px-0">
          <button className="bg-pink-500 text-white px-6 py-3 rounded font-medium hover:bg-pink-600 transition">
            APPLY ONLINE
          </button>
          <button className="border border-pink-500 text-pink-500 px-6 py-3 rounded font-medium hover:bg-pink-100 transition">
            LOAN CALCULATOR
          </button>
        </div>

        {/* Contact & Social Icons */}
        <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-4 mt-6 text-gray-700">
          <div className="flex gap-2 text-gray-900 font-bold">
            <Image src={phone} alt="phone" className="w-6 h-6" />
            <span>16519</span>
          </div>
          <div className="flex gap-3">
            <Image src={facebook} alt="facebook" className="w-6 h-6" />
            <Image src={youtube} alt="youtube" className="w-6 h-6" />
            <Image src={linkedIn} alt="linkedIn" className="w-6 h-6" />
            <Image src={instagram} alt="instagram" className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative lg:w-1/2 flex justify-center bg-pink-100">
        <div className="relative w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px]">
          <Image
            src={familyImage}
            alt="Family"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Floating Labels */}
        <div className="absolute top-5 left-5 sm:top-10 sm:left-10 bg-white shadow-lg px-4 py-2 rounded-full flex items-center gap-2 text-sm sm:text-base">
          <Image src={car} alt="Car Loan" className="w-5 h-5 sm:w-6 sm:h-6" />
          <span>Car Loans</span>
        </div>
        <div className="absolute bottom-5 right-5 sm:bottom-10 sm:right-10 bg-white shadow-lg px-4 py-2 rounded-full flex items-center gap-2 text-sm sm:text-base">
          <Image src={home} alt="Home Loan" className="w-5 h-5 sm:w-6 sm:h-6" />
          <span>Home Loan</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
