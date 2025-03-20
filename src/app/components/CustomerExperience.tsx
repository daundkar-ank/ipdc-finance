import React from "react";
// import styles from "@/app/styles/home.module.scss";
import Image from "next/image";
import integrity from "@/assets/icons/integrity.svg";
import demontrate from "@/assets/icons/demontrate.svg";
import diversity from "@/assets/icons/diversity.svg";
import teamwork from "@/assets/icons/teamwork.svg";
import technology from "@/assets/icons/technology.svg";
import corporate from "@/assets/icons/corporate.svg";
import digital from "@/assets/icons/digital.svg";

const CustomerExperience = () => {
  const customerExp = [
    {
      image: integrity,
      header: "Integrity",
      subTitle:
        "Displaying the highest level of Integrity in the way we conduct our business",
    },
    {
      image: demontrate,
      header: "Demonstrate",
      subTitle: "Demonstrating a strong Will to Win in the marketplace",
    },
    {
      image: diversity,
      header: "Diversity",
      subTitle: "Promoting Diversity in the workplace and community",
    },
    {
      image: teamwork,
      header: "Teamwork",
      subTitle:
        "Working together to achieve more and create a better future for all.",
    },
    {
      image: integrity,
      header: "Collaboration",
      subTitle:
        "Fostering partnerships to drive innovation and business success.",
    },
    {
      image: technology,
      header: "Technology",
      subTitle:
        "Harnessing the power of technology to deliver better customer experiences.",
    },
    {
      image: corporate,
      header: "Corporate",
      subTitle:
        "Setting the standard for corporate citizenship in the communities we serve.",
    },
    {
      image: digital,
      header: "Digital",
      subTitle:
        "Embracing digital transformation to enhance our services and operations.",
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-20 my-16">
      {/* Title Section */}
      <div className="text-center mb-10">
        <p className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          Creating Extraordinary Customer Experience
        </p>
        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          bibendum eget morbi <br className="hidden sm:block" /> dignissim eu
          pharetra consequat montes, sagittis.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {customerExp.map((item, index) => (
          <div key={index} className="flex flex-col sm:items-start">
            <Image src={item.image} alt={item.header} width={50} height={50} />
            <p className="text-lg font-bold mt-3">{item.header}</p>
            <p className="text-sm text-gray-600 mt-1">{item.subTitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerExperience;
