import React from "react";

export default function SocialAccount() {
  return (
    <main>
      <div class="bg-[url('SM.Imgs/Background-Pattern.png')] bg-cover bg-center object-cover bg-no-repeat h-screen">
        <div class="Card flex justify-center items-center sm:my-8">
          <div class="w-[92%] sm:w-[65%] md:w-[55%] lg:w-[45%] xl:w-[35%] p-4 md:p-8 shadow-lg bg-[#fff] rounded-md">
            <div class="svg-logo flex justify-center items-center"></div>
            <div>
              <p class="py-4 text-lg font-semibold text-[#110229]">
                Let’s add some social accounts
              </p>
            </div>
            <div>
              <p>Choose a social network to add an account</p>
              <div class="flex flex-col flex-wrap items-center">
                <div class="border flex flex-col items-center py-6 px-12">
                  <p>Facebook</p>
                </div>
                <div class="border flex flex-col items-center py-6 px-12">
                  <p>Instagram</p>
                </div>
                <div class="border flex flex-col items-center py-6 px-12">
                  <p>Twitter</p>
                </div>
                <div class="border flex flex-col items-center py-6 px-12">
                  <p>LinkedIn</p>
                </div>
                <div class="border flex flex-col items-center py-6 px-12">
                  <p>Youtube</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
