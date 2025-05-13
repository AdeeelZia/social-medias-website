import React from "react";
import { Heading, Button } from "../components/common/common";
import { DOT_ICON } from "../svg/HomeIconsGrabbar";

const NewsletterSection = () => {
  return (
    <section className="py-[150px] relative">
      <div className="mx-1 md:mx-auto lg:w-[85%] lg:h-[270px] bg-[#F1F1F1] rounded-[75px] sm:flex sm:justify-between items-center">
        <div className="absolute right-[68px] top-[92px]">
          <DOT_ICON />
        </div>
        <div className="absolute left-[69px] bottom-[115px] -z-50">
          <img src="/images/Rectangle.png" alt="image" />
        </div>
        <div className="py-2 text-center sm:text-start sm:w-[50%] lg:w-[60%] sm:px-16">
          <Heading
            text="Subscribe to Our Newsletter"
            level={4}
            customStyleHeading="text-[36px] font-bold !text-start pb-2"
          />
          <p className="text-sm text-[#565656] font-medium lg:text-base pb-2">
            Stay updated with the latest news, tips, and promotions from us.
          </p>
        </div>
        <div className="hidden sm:block sm:w-[50%] lg:w-[40%] relative bg-gradient-to-b from-[#8933BA] to-[#D82370] h-[270px] rounded-tr-[70px] rounded-tl-[140px] rounded-br-[70px] rounded-bl-[200px]">
          <div className="absolute top-24 -left-14 flex justify-between items-center bg-white sm:h-[22%] lg:h-[24%] rounded-full shadow-3xl">
            <input
              className="sm:px-4 lg:px-8 outline-none w-full"
              type="email"
              placeholder="Enter your email address.."
              required
            />
            <Button
              text="Subscribe Now"
              gradient={true}
              customStyleButton="!py-3 !px-8 !mx-4 !whitespace-nowrap !rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
