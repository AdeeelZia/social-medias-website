import React from 'react';

export default function SignUp() {
  return (
    <main>
        <div className="bg-[url('SM.Imgs/Background-Pattern.png')] bg-cover bg-center object-cover bg-no-repeat h-screen">
            <div className="Card flex justify-center items-center sm:my-8">
                <div
                    className="w-[92%] sm:w-[65%] md:w-[55%] lg:w-[45%] xl:w-[35%] p-4 md:p-8 shadow-lg bg-[#fff] rounded-md">
                    <div className="svg-logo flex justify-center items-center">
                        {/* Add your SVG logo here */}
                    </div>
                    <div>
                        <p className="py-4 text-lg font-semibold text-[#110229]">Create your account</p>
                    </div>
                    <div className="py-2">
                        <p className="pb-3 text-base font-semibold text-[#272B41]">Email</p>
                        <input 
                            className="w-full p-2 border border-[#E3E6EF] text-sm font-medium text-[#5A5F7D]" 
                            type="email"
                            placeholder="andrew@gmail.com" 
                            required 
                        />
                    </div>
                    <div className="py-2">
                        <p className="pb-3 text-base font-semibold text-[#272B41]">Password</p>
                        <input 
                            className="w-full p-2 border border-[#E3E6EF] text-sm font-medium text-[#5A5F7D]" 
                            type="password"
                            placeholder="*******" 
                            required 
                        />
                    </div>
                    <div className="py-4">
                        <button
                            className="w-full py-2 px-4 rounded-md bg-gradient-to-b from-[#8933BA] to-[#D82370] text-[#fff]"
                        >
                            Sign Up
                        </button>
                    </div>
                    <div className="flex items-center justify-center gap-x-4">
                        <p className="text-sm font-medium text-[#272B41]">Already a member?</p>
                        <p className="text-sm font-semibold gradient-text">Sign In</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}