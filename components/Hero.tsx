"use client";

import Image from "next/image";

import { CustomButton } from "@components";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
        Effortless Car Discovery, Booking, and Rental – Fast and Intuitive!
        </h1>

        <p className="hero__subtitle">
        Simplify Your Car Rental: Effortless Booking Made Easy!
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-blue-900 text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};
