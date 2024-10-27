import Link from 'next/link';
import React from 'react';

const LoginPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-md shadow-md">
        <h2 className="text-[28px] font-semibold text-center text-[#101928]">Log In</h2>
        <p className="text-center text-[#667185] text-base font-normal">Enter your credentials to access your account</p>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#101928]">Email Address</label>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 placeholder:text-[#98A2B3] placeholder:text-sm placeholder:font-normal"
              />
              <span className="absolute inset-y-0 right-4 flex items-center">
                📧 {/* Replace with an email icon */}
              </span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#101928]">Password</label>
            <div className="relative">
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 placeholder:text-[#98A2B3] placeholder:text-sm placeholder:font-normal"
              />
              <span className="absolute inset-y-0 right-4 flex items-center">
                👁️ {/* Replace with an eye icon */}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
              <span className="ml-2 block text-sm font-medium text-[#101928]">Remember me</span>
            </label>
            <a href="#" className="text-sm text-red-600">Forgot Password?</a>
          </div>
          <button type="submit" className="w-full py-2 text-white bg-[#0D5EBA] rounded-md hover:bg-blue-700 text-base font-semibold">
            Log into Account
          </button>
        </form>
        <div className="flex items-center justify-center space-x-4 mt-4">
          <button className="flex items-center px-4 py-2 text-gray-700 border rounded-md hover:bg-gray-50">
            <img src="/google-icon.svg" alt="Google" className="w-5 h-5 mr-2" />
            Continue with Google
          </button>
          <button className="flex items-center px-4 py-2 text-gray-700 border rounded-md hover:bg-gray-50">
            <img src="/twitter-icon.svg" alt="Twitter" className="w-5 h-5 mr-2" />
            Continue with Twitter
          </button>
        </div>
        <div className="flex items-center justify-center mt-6">
          <span className="text-sm text-gray-500">Are you new here? </span>
          <Link href="/register" className="ml-1 text-blue-600">Create Account</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
