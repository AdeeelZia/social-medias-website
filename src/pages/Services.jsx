import React from "react";
import NewsletterSection from "../components/NewsletterSection";

export default function Services() {
  return (
    <main className="px-4">
      {/* What We Do Section */}
      <section className="What We Do py-4">
        <div className="md:pt-6 xl:pt-10 md:px-6 md:flex md:flex-row-reverse md:gap-4 lg:gap-16 lg:px-10 xl:px-16">
          <div className="md:w-1/2 relative">
            <div className="hidden xl:block absolute -bottom-[15px] -left-[35px]"></div>
            <div className="relative flex justify-between">
              <img
                className="w-[30%] md:w-[32%]"
                src="Rectangle 34624926.png"
                alt="Img"
              />
              <img
                className="absolute left-[35%] md:left-[34%] top-5 w-[30%] md:w-[32%] xl:top-12"
                src="Rectangle 34624927.png"
                alt="Img"
              />
              <img
                className="w-[30%] md:w-[32%]"
                src="Rectangle 34624928.png"
                alt="Img"
              />
            </div>
            <div className="hidden xl:block absolute -z-10 -top-[14px] right-[33px]"></div>
          </div>
          <div className="pt-12 md:p-0 md:w-1/2 xl:w-[45%]">
            <h1 className="text-2xl font-bold pb-3 text-[#110229] xl:text-4xl xl:pb-6">
              What We Do
            </h1>
            <p className="text-sm text-justify text-[#000000B2] pb-3 lg:text-base xl:text-lg xl:pb-6 xl:leading-relaxed">
              Social Medias are feeds that display the content from your
              connected social accounts and let you take part in industry
              conversations. You can use streams to monitor activity across all
              of your accounts. Share real-time insights by monitoring mentions
              of your brand, company, products, and competitors. Social Medias
              is a social media management tool with features to help with
              planning, scheduling, and syndicating social posts.
            </p>
            <div className="sm:flex sm:flex-wrap gap-x-3">
              <button className="border p-3 md:px-5 rounded-md text-sm font-bold text-[#fff] bg-gradient-to-b from-[#8933BA] to-[#D82370] cursor-pointer hover:opacity-90">
                Get Started
              </button>
              <div className="py-2 sm:p-0 flex items-center gap-x-3">
                <div className="border p-3 rounded-full"></div>
                <p className="text-sm font-bold uppercase gradient-text">
                  See How it Works
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hire Us Section */}
      <section className="Hire Us py-4">
        <div className="flex flex-col items-center">
          <div className="w-fit pb-4">
            <h4 className="py-4 text-xl uppercase text-center font-semibold md:text-2xl">
              Our Services
            </h4>
            <hr className="w-28 md:w-36 border border-purple-500" />
          </div>
        </div>

        <div className="flex flex-wrap justify-between lg:gap-2 gap-y-2 md:px-8 xl:px-16">
          {[
            {
              title: "Publish and schedule",
              desc: "Plan your posts with ease to create high-performing content to stay on top of things and get more done. Social Medias is incredibly helpful for our social media management.",
            },
            {
              title: "Advertise content",
              desc: "Advertise across social channels seamlessly by managing multi-channel paid and organic efforts side-by-side from one convenient dashboard.",
            },
            {
              title: "Engage Customers",
              desc: "Don’t miss a single message or mention by monitoring incoming messages across your social networks quickly and easily.",
            },
            {
              title: "Analyze Results",
              desc: "See your results by Analyzing your performance across all your social networks and create custom reports to show the impact.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="sm:max-w-[49%] xl:max-w-[24%] p-3 border bg-white rounded-md shadow-lg sm:hover:scale-125 transition-all duration-1000 ease-in-out"
            >
              <div className="w-fit border p-2 rounded-md bg-gradient-to-b from-purple-700 to-pink-600"></div>
              <div className="py-3">
                <span className="py-2 text-lg font-medium">
                  {service.title}
                </span>
                <p className="py-2 text-sm text-gray-600">{service.desc}</p>
              </div>
              <button className="border p-2 text-white text-xs rounded-md bg-gradient-to-b from-purple-700 to-pink-600 cursor-pointer hover:opacity-90">
                Hire us
              </button>
            </div>
          ))}
        </div>

        <div className="py-4 text-center">
          <button className="text-sm uppercase border font-bold p-3 rounded-md gradient-text border-[#8933BA] cursor-pointer hover:opacity-90">
            Explore All Features
          </button>
        </div>
      </section>

      {/* How We're Different Section */}
      <section>
        <div className="py-8 md:flex md:px-4 lg:gap-14 md:gap-4 xl:gap-16 xl:px-32">
          <div className="md:flex md:items-center">
            <img
              className="md:h-[470px] lg:max-h-[568px]"
              src="house image 2-2 why choose us.png"
              alt="Image"
            />
          </div>
          <div className="md:w-1/2">
            <div className="py-3 md:pb-3 md:pt-0">
              <h2 className="text-[15px] uppercase font-bold md:text-xl lg:text-2xl xl:text-3xl">
                How We're Different?
              </h2>
            </div>
            <div className="w-6/12 border border-[#8933BA]"></div>
            <div className="py-3 lg:py-4">
              <p className="text-base font-normal text-justify lg:text-lg">
                Social Medias are feeds that display the content from your
                connected social accounts and let you take part in industry
                conversations.
              </p>
            </div>

            {[
              {
                title: "Light up your profiles",
                desc: "Schedule and publish content to all of your social profiles, track effectiveness in real time.",
              },
              {
                title: "Plan your content with ease",
                desc: "View all of your social media content in one calendar. Easily see all your scheduled and published content.",
              },
              {
                title: "Stay on top of trends by posting on time",
                desc: "Set up customizable streams that let you monitor trends and stay notified. Get actionable insights on the best times to post.",
              },
            ].map((point, i) => (
              <div key={i} className="py-1 flex gap-3 lg:py-3">
                <div className="h-full border p-2 rounded-md bg-gradient-to-b from-purple-700 to-pink-600"></div>
                <div>
                  <h3 className="text-black text-base font-semibold">
                    {point.title}
                  </h3>
                  <p className="text-sm">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <NewsletterSection />
    </main>
  );
}
