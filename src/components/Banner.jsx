import React from "react";

const Banner = () => {
  return (
    <div className="md:pb-24 relative">
      <div
        className="bg-center bg-cover h-64 sm:h-80 md:h-96"
        style={{ backgroundImage: "url('/images/partner.jpg')" }}
      ></div>
      <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 -mt-40 sm:-mt-52 md:-mt-72 text-center text-white relative z-10">
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium">
          Social medias are awesome for planning out social media posts
        </h3>

        <div className="mx-auto w-2/3 sm:w-3/4 md:w-2/3 my-4 border border-solid border-[#8933BA]"></div>

        <p className="py-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-normal xl:font-light">
          We offer you a true concierge experience, combining the expertise if
          you run multiple social media accounts for your business.
        </p>

        <button className="mt-2 text-sm sm:text-base font-medium rounded-md py-3 px-6 bg-gradient-to-b from-[#8933BA] to-[#D82370] cursor-pointer hover:opacity-90">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Banner;
