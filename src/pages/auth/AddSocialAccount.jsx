import React from "react";
import { LOGO } from "../../svg/Logo";
import { Button, Heading } from "../../components/common/common";

export default function SocialAccount() {
  const SocialLinks = () => {
    return (
      <>
        <div className="p-4 w-[8rem] h-[5rem] border border-[#A7B1CE33]">
          <p>Hello</p>
        </div>
      </>
    );
  };

  return (
    <div className="bg-[#fff8fe] overflow-hidden">
      <div className="relative h-screen mt-8">
        <img
          src="/images/Background.png"
          alt="background_image"
          className="absolute top-40 w-full object-cover"
        />
        <div className="relative z-10 flex justify-center items-center">
          <div
            className="w-full py-[40px] px-[112px] max-w-[43rem] bg-white"
            style={{ boxShadow: "0px 6px 8px 0px #0000000D" }}
          >
            <LOGO customClass="mx-auto mb-10" />
            <Heading
              level={2}
              text="Let’s add some social accounts"
              customClass="!text-[1.5rem] !font-medium mb-[30px] !text-[#110229]"
            />
            <p className="text-[#272B41] mb-[24px]">
              Choose a social network to add an account
            </p>
            <div className="mb-[30px] grid grid-cols-3 gap-4">
              {[1,2,3,4,5].map((item) => {
                return (
                  <SocialLinks />
                )
              })}
            </div>
            <div className="flex justify-center gap-4">
              <Button text="Skip" customClass='border' />
              <Button gradient text="Confirm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
