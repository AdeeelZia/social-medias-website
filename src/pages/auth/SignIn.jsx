import React from "react";
import { LOGO } from "../../svg/Logo";
import { Button, Heading, Input } from "../../components/common/common";
import { Link } from "react-router-dom";

export default function SignIn() {
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
              text="Sign in to your account"
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
              <div className="flex justify-between items-center gap-2">
                <div className="flex items-center">
                  <Input type="checkbox" customClass="my-4" />
                  <span className="pl-2">Keep me logged in</span>
                </div>
                <span className="text-sm cursor-pointer hover:underline bg-gradient-to-r from-[#8933BA] to-[#D82370] text-transparent bg-clip-text">
                  Forgot Password?
                </span>
              </div>
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
                Not a member yet?
                <Link
                  to="/auth/signup"
                  className="pl-2.5 bg-gradient-to-r from-[#8933BA] to-[#D82370] text-transparent bg-clip-text font-medium hover:underline"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
