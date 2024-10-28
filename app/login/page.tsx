import Link from "next/link";
import React from "react";

const LoginPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-10 bg-white rounded-md shadow-md">
        <div className="space-y-2">
          <h2 className="text-[28px] font-semibold text-center text-[#101928]">
            Log In
          </h2>
          <p className="text-center text-[#667185] text-base font-normal">
            Enter your credentials to access your account
          </p>
        </div>
        <form className="space-y-8 ">
          <div>
            <label className="block text-sm font-medium text-[#101928]">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full px-4 py-2 border text-black rounded-md focus:ring focus:ring-blue-200 placeholder:text-[#98A2B3] placeholder:text-sm placeholder:font-normal"
              />
              <span className="absolute inset-y-0 right-4 flex items-center">
                📧
              </span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#101928]">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full px-4 py-2 border text-black rounded-md focus:ring focus:ring-blue-200 placeholder:text-[#98A2B3] placeholder:text-sm placeholder:font-normal"
              />
              <span className="absolute inset-y-0 right-4 flex items-center">
                👁️ {/* Replace with an eye icon */}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="ml-2 block text-sm font-medium text-[#101928]">
                Remember me
              </span>
            </label>
            <a href="#" className="text-sm text-[#CC400C] font-medium">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-[#0D5EBA] rounded-md hover:bg-blue-700 text-base font-semibold">
            Log into Account
          </button>
        </form>

        <div className="flex items-center justify-between">
          <hr className="flex-grow border-gray-200 border-1" />
          <span className="px-2 text-sm font-medium text-[#000000]">Or</span>
          <hr className="flex-grow border-gray-200 border-1" />
        </div>
        <div className="flex flex-col space-y-4 w-full">
          <button className="flex items-center text-center px-4 py-2 text-[#344054] text-base font-semibold border rounded-md hover:bg-gray-50">
            <img src="/google.png" alt="Google" className="w-5 h-5 mr-2" />
            Continue with Google
          </button>
          <button className="flex items-center px-4 py-2 text-[#344054] text-base font-semibold border rounded-md hover:bg-gray-50">
            <img
              src="/twitter.png"
              alt="Twitter"
              className="w-5 h-5 mr-2"
            />
            Continue with Twitter
          </button>
        </div>
        <div className="flex items-center justify-center mt-6">
          <span className="text-sm text-gray-500">Are you new here? </span>
          <Link href="/register" className="ml-1 text-blue-600">
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
