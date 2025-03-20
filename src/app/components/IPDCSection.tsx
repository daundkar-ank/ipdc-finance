import React from "react";
import Image from "next/image";
import glance from "@/assets/Images/glance.png";

const IPDCSection = () => {
  return (
    <section className="py-16">
      <div className="flex flex-col md:flex-row items-center">
        {/* Image Section (Moves up on mobile) */}
        <div className="w-full md:w-1/2 flex mb-4">
          <Image
            src={glance}
            alt="Plant growing from money"
            width={610}
            height={618}
            className="max-w-full h-auto"
          />
        </div>

        {/* Text Section (Moves below on mobile) */}
        <div className="w-full md:w-1/2 px-6 mr:4 lg:mr-24 flex flex-col justify-center sm:text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 ">
            IPDC AT A GLANCE
          </h2>
          <p className="text-gray-600 mt-4 leading-relaxed md:text-xs lg:text-base">
            IPDC Finance Limited (previously known as &quot;Industrial Promotion
            and Development Company of Bangladesh Limited&quot;) is the first
            private sector financial institution of the country established in
            1981 by a distinguished group of shareholders namely International
            Finance Corporation (IFC), USA, German Investment and Development
            Company (DEG), Germany, The Aga Khan Fund for Economic Development
            (AKFED), Switzerland, Commonwealth Development Corporation (CDC),
            UK, and the Government of Bangladesh.
          </p>
          <p className="text-pink-500 font-medium mt-4 inline-flex items-center cursor-pointer">
            Read More <span className="ml-2">→</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default IPDCSection;
