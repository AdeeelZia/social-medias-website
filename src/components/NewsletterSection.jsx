import React from "react";

const NewsletterSection = () => {
  return (
    <section className="sm-container pt-20 py-4 relative">
      <div className="hidden lg:block absolute right-[68px] -z-10 top-[24px] lg:right-[39px] lg:-top-[35px] xl:right-[71px] xl:top-[24px]"></div>
      <div className="hidden lg:block absolute -bottom-8 -z-10 left-16 lg:left-[3rem] lg:-bottom-[1rem] xl:left-[4rem]"></div>
      <div className="mx-1 md:mx-auto lg:w-[85%] lg:h-[270px] bg-[#F1F1F1] rounded-[4.75rem] sm:flex sm:justify-between items-center">
        <div className="py-2 text-center sm:text-start sm:w-[50%] lg:w-[60%] sm:px-16">
          <h4 className="gradient-text text-base font-bold sm:text-xl pb-2">
            Subscribe to Our Newsletter
          </h4>
          <p className="text-sm text-[#565656] font-medium lg:text-base pb-2">
            Stay updated with the latest news, tips, and promotions from us.
          </p>
        </div>
        <div className="hidden sm:block sm:w-[50%] lg:w-[40%] relative bg-gradient-to-b from-[#8933BA] to-[#D82370] h-[270px] rounded-tr-[70px] rounded-tl-[140px] rounded-br-[70px] rounded-bl-[200px]">
          <div className="absolute top-24 -left-14 flex justify-between items-center bg-[#fff] sm:h-[22%] lg:h-[24%] rounded-full">
            <input
              className="sm:px-4 lg:px-8 outline-none w-full"
              type="email"
              placeholder="Enter your email address..."
              required
            />
            <div className="px-4">
              <button
                className="border p-2 bg-gradient-to-b from-[#8933BA] to-[#D82370] rounded-full text-[#fff] cursor-pointer hover:opacity-90"
                type="submit"
              >
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
        <div className="sm:hidden w-[100%] h-[25%] flex flex-col items-center">
          <input
            className="w-[95%] text-center bg-[#fff] p-3 rounded-lg outline-none"
            type="email"
            placeholder="Enter your email address..."
            required
          />
          <div className="py-4">
            <button className="border p-2 bg-gradient-to-b from-[#8933BA] to-[#D82370] rounded-full text-[#fff] cursor-pointer hover:opacity-90">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
