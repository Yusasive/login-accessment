import React from 'react';

const RegisterPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800">Create an account</h2>
        <p className="text-center text-gray-500">Enter your credentials to create your account</p>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input type="email" placeholder="Enter Email" className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" placeholder="Enter Password" className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input type="password" placeholder="Enter Password" className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200" />
          </div>
          <button type="submit" className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">Create an account</button>
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
          <span className="text-sm text-gray-500">Already here?</span>
          <a href="#" className="ml-1 text-blue-600">Login</a>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
