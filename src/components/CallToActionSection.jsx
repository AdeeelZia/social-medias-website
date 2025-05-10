import React from 'react';

const CallToActionSection = () => {
  return (
    <section>
      <div className="md:pb-24">
        <div className="bg-center bg-cover h-96" style={{ backgroundImage: "url('/images/partner.jpg')" }}></div>
        <div className="px-4 -mt-[300px] text-center text-[#fff]">
          <h3 className="text-base font-medium md:text-2xl lg:text-3xl xl:text-4xl">
            Social medias are awesome for planning out social media posts
          </h3>
          <div className="mx-10 md:mx-16 lg:mx-24 xl:mx-40 my-4 border border-solid border-[#8933BA]"></div>
          <p className="py-5 text-base font-normal md:text-lg lg:text-xl xl:text-3xl xl:font-light">
            We offer you a true concierge experience, combining the expertise if you run multiple social media accounts for your business.
          </p>
          <button className="font-medium text-sm rounded-md py-3 px-5 bg-gradient-to-b from-[#8933BA] to-[#D82370] cursor-pointer hover:opacity-90">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
