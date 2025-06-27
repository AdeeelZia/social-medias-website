import React from "react";

const StartSection = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-10 md:flex flex-col md:flex-row xl:gap-12 lg:relative">
      <div className="w-full md:w-1/2 mb-8 md:mb-0 xl:flex xl:justify-end">
        <img
          src="/images/still.jpg"
          alt="still"
          className="w-full h-auto rounded-md"
        />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl uppercase font-bold mb-4">
          Still Not Sure Where to Start?
        </h2>

        <div className="w-1/2 sm:w-2/3 lg:w-1/2 my-4 border border-solid border-[#8933BA]"></div>

        <p className="text-sm sm:text-base lg:text-lg text-justify mb-4">
          Share real-time insights by monitoring mentions of your brand,
          company, products, and competitors. Measure the impact of your social
          marketing campaigns through comprehensive social channel reporting.
        </p>

        <ul className="space-y-2 mb-6">
          {[
            "Choose the right plan",
            "Choose the right plan",
            "Start your free trial",
            "Attend free classes for beginners",
            "Charging less sounds good to me",
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span>•</span>
              <p className="text-sm sm:text-base lg:text-lg">{item}</p>
            </li>
          ))}
        </ul>

        <button className="text-sm sm:text-base font-medium rounded-md py-2 px-4 text-white bg-gradient-to-b from-[#8933BA] to-[#D82370] hover:opacity-90 transition">
          Sounds good to me
        </button>
      </div>
    </div>
  );
};

export default StartSection;
