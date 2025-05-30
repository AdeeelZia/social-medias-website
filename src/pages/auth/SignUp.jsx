import React from "react";
import { LOGO } from "../../svg/Logo";
import { Button, Heading, Input } from "../../components/common/common";
import { Link } from "react-router-dom";

export default function SignUp() {
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
              text="Create your account"
              customClass="!text-[1.5rem] !font-medium !text-[#110229]"
            />
            <form className="space-y-4 mt-4">
              <Input
                type="text"
                mainDiv="flex flex-col"
                label="Email"
                placeholder="alexhales@gmail.com"
              />
              <Input
                type="password"
                mainDiv="flex flex-col"
                label="Password"
                placeholder="*******"
                icon={true}
              />
              <Button
                text="Sign In"
                customClass="!w-full !text-white"
                gradient
              />
            </form>
            <div className="flex flex-col items-center space-y-6 mt-6">
              <div className="flex items-center w-full max-w-xs">
                <hr className="flex-grow border-t border-gray-200" />
                <span className="px-3 text-sm text-gray-400">or</span>
                <hr className="flex-grow border-t border-gray-200" />
              </div>
              <p className="text-sm text-[#272B41]">
                Already a member?
                <Link
                  to="/auth/signin"
                  className="text-transparent pl-2.5 bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 font-medium hover:underline"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
