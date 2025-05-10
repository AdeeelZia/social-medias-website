import React from 'react';

const FeaturesSection = () => {
  return (
    <section className='sm-container'>
      <div className="py-8 md:flex md:px-4 lg:gap-14 md:gap-4 xl:gap-16">
        <div className="md:flex md:items-center">
          <img src="/images/social.jpg" alt="image" />
        </div>
        <div className="md:w-1/2">
          <div className="py-3 md:pb-3 md:pt-0">
            <h2 className="text-[15px] uppercase font-bold md:text-xl md:whitespace-nowrap lg:text-2xl xl:text-3xl">
              Manage Social Media in one Place
            </h2>
          </div>
          <div className="w-6/12 border border-solid border-[#8933BA]"></div>
          <div className="py-3 lg:py-4">
            <p className="text-base font-normal text-justify lg:text-lg">
              Social Medias are feeds that display the content from your connected social accounts and let you take part in industry conversations. You can use streams to monitor activity across all of your accounts.
            </p>
          </div>
          {/* Repeat these feature blocks */}
          <div className="py-1 flex gap-3 lg:py-3">
            <div className="h-full border border-solid p-2 rounded-md bg-gradient-to-b from-purple-700 to-pink-600"></div>
            <div>
              <h3 className="text-[#000] text-base font-semibold">Light up your profiles</h3>
              <p className="text-sm">Schedule and publish content to all of your social profiles, track effectiveness in real-time.</p>
            </div>
          </div>
          {/* More feature items can go here */}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
