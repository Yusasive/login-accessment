"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { registerUser } from "../../utils/api"; 

const containerVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const RegisterPage: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = await registerUser(email, password);

      if (data.error) {
        throw new Error(data.message || "Failed to register");
      }

      router.push("/dashboard"); // Redirect after successful registration
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }



    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <motion.div
        className="w-full max-w-md p-8 space-y-10 bg-white rounded-md shadow-md"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, ease: "easeInOut" }}>
        <motion.div className="space-y-2" variants={itemVariants}>
          <h2 className="text-[28px] font-semibold text-center text-[#101928]">
            Create an account
          </h2>
          <p className="text-center text-[#667185] text-base font-normal">
            Enter your credentials to create your account
          </p>
        </motion.div>

        <motion.form
          className="space-y-4"
          onSubmit={handleSignup}
          variants={itemVariants}>
          <div>
            <label className="block text-sm font-medium text-[#101928]">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                className="w-full px-4 py-2 border text-black rounded-md focus:ring focus:ring-blue-200 placeholder:text-[#98A2B3] placeholder:text-sm placeholder:font-normal"
                required
              />
              <span className="absolute inset-y-0 right-4 flex items-center">
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.8335 15.5C17.6744 15.5 19.1668 14.0076 19.1668 12.1667V4.68557C19.1671 4.67283 19.1671 4.66005 19.1668 4.64725V3.83333C19.1668 1.99238 17.6744 0.5 15.8335 0.5H4.16681C2.32586 0.5 0.833474 1.99238 0.833474 3.83333V4.64726C0.833177 4.66005 0.833179 4.67282 0.833474 4.68556V12.1667C0.833474 14.0076 2.32586 15.5 4.16681 15.5H15.8335ZM2.50014 12.1667C2.50014 13.0871 3.24633 13.8333 4.16681 13.8333H15.8335C16.7539 13.8333 17.5001 13.0871 17.5001 12.1667V5.89753L11.2381 8.40234C10.4434 8.72022 9.55687 8.72022 8.76217 8.40234L2.50014 5.89753V12.1667ZM10.6191 6.85488L17.5001 4.10247V3.83333C17.5001 2.91286 16.7539 2.16667 15.8335 2.16667H4.16681C3.24633 2.16667 2.50014 2.91286 2.50014 3.83333V4.10247L9.38116 6.85488C9.77851 7.01382 10.2218 7.01382 10.6191 6.85488Z"
                    fill="#667185"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#101928]">
              Password
            </label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                className="w-full px-4 py-2 border text-black rounded-md focus:ring focus:ring-blue-200 placeholder:text-[#98A2B3] placeholder:text-sm placeholder:font-normal"
                required
              />
              <span
                className="absolute inset-y-0 right-4 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}>
                {passwordVisible ? (
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    {" "}
                    <path
                      d="M16.2556 0.744078C16.5811 1.06951 16.5811 1.59715 16.2556 1.92259L2.9223 15.2559C2.59687 15.5814 2.06923 15.5814 1.74379 15.2559C1.41836 14.9305 1.41836 14.4028 1.74379 14.0774L15.0771 0.744078C15.4026 0.418641 15.9302 0.418641 16.2556 0.744078Z"
                      fill="#667185"
                    />
                    <path
                      d="M12.166 2.4767C11.2274 2.03469 10.1691 1.75 8.9997 1.75C6.54629 1.75 4.58202 3.00308 3.18604 4.33307C1.78685 5.66611 0.878967 7.14973 0.519581 7.7915C0.284063 8.21207 0.256012 8.71426 0.449336 9.16031C0.584347 9.47181 0.813951 9.95437 1.15237 10.5143C1.39041 10.9082 1.9027 11.0346 2.29659 10.7965C2.69049 10.5585 2.81683 10.0462 2.57879 9.65232C2.3066 9.20192 2.11772 8.81241 2.00316 8.55369C2.34129 7.95778 3.14208 6.67693 4.33569 5.53975C5.56858 4.36513 7.14141 3.41667 8.9997 3.41667C9.66808 3.41667 10.2995 3.53937 10.8915 3.75116L12.166 2.4767Z"
                      fill="#667185"
                    />
                    <path
                      d="M13.7418 5.61491C14.8923 6.73288 15.6655 7.97087 15.9962 8.55369C15.8817 8.81241 15.6928 9.20192 15.4206 9.65232C15.1826 10.0462 15.3089 10.5585 15.7028 10.7965C16.0967 11.0346 16.609 10.9082 16.847 10.5143C17.1855 9.95437 17.4151 9.47181 17.5501 9.1603C17.7434 8.71426 17.7153 8.21207 17.4798 7.7915C17.1297 7.16625 16.2589 5.74193 14.9204 4.43629L13.7418 5.61491Z"
                      fill="#667185"
                    />
                    <path
                      d="M8.99971 4.66667C9.30256 4.66667 9.59786 4.69898 9.88236 4.76034L8.1675 6.47519C7.45625 6.7262 6.89258 7.28987 6.64157 8.00112L4.92672 9.71597C4.86536 9.43148 4.83305 9.13618 4.83305 8.83333C4.83305 6.53215 6.69853 4.66667 8.99971 4.66667Z"
                      fill="#667185"
                    />
                    <path
                      d="M8.99971 11.3333C8.70732 11.3333 8.42665 11.2831 8.16585 11.1909L6.91498 12.4418C7.52815 12.7968 8.2402 13 8.99971 13C11.3009 13 13.1664 11.1345 13.1664 8.83333C13.1664 8.07382 12.9632 7.36177 12.6081 6.74859L11.3573 7.99947C11.4495 8.26027 11.4997 8.54094 11.4997 8.83333C11.4997 10.214 10.3804 11.3333 8.99971 11.3333Z"
                      fill="#667185"
                    />
                  </svg>
                ) : (
                  "👁️"
                )}
              </span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#101928]">
              Confirm Password
            </label>
            <div className="relative">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter Password"
                className="w-full px-4 py-2 border text-black rounded-md focus:ring focus:ring-blue-200 placeholder:text-[#98A2B3] placeholder:text-sm placeholder:font-normal"
                required
              />
              <span
                className="absolute inset-y-0 right-4 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}>
                {passwordVisible ? (
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    {" "}
                    <path
                      d="M16.2556 0.744078C16.5811 1.06951 16.5811 1.59715 16.2556 1.92259L2.9223 15.2559C2.59687 15.5814 2.06923 15.5814 1.74379 15.2559C1.41836 14.9305 1.41836 14.4028 1.74379 14.0774L15.0771 0.744078C15.4026 0.418641 15.9302 0.418641 16.2556 0.744078Z"
                      fill="#667185"
                    />
                    <path
                      d="M12.166 2.4767C11.2274 2.03469 10.1691 1.75 8.9997 1.75C6.54629 1.75 4.58202 3.00308 3.18604 4.33307C1.78685 5.66611 0.878967 7.14973 0.519581 7.7915C0.284063 8.21207 0.256012 8.71426 0.449336 9.16031C0.584347 9.47181 0.813951 9.95437 1.15237 10.5143C1.39041 10.9082 1.9027 11.0346 2.29659 10.7965C2.69049 10.5585 2.81683 10.0462 2.57879 9.65232C2.3066 9.20192 2.11772 8.81241 2.00316 8.55369C2.34129 7.95778 3.14208 6.67693 4.33569 5.53975C5.56858 4.36513 7.14141 3.41667 8.9997 3.41667C9.66808 3.41667 10.2995 3.53937 10.8915 3.75116L12.166 2.4767Z"
                      fill="#667185"
                    />
                    <path
                      d="M13.7418 5.61491C14.8923 6.73288 15.6655 7.97087 15.9962 8.55369C15.8817 8.81241 15.6928 9.20192 15.4206 9.65232C15.1826 10.0462 15.3089 10.5585 15.7028 10.7965C16.0967 11.0346 16.609 10.9082 16.847 10.5143C17.1855 9.95437 17.4151 9.47181 17.5501 9.1603C17.7434 8.71426 17.7153 8.21207 17.4798 7.7915C17.1297 7.16625 16.2589 5.74193 14.9204 4.43629L13.7418 5.61491Z"
                      fill="#667185"
                    />
                    <path
                      d="M8.99971 4.66667C9.30256 4.66667 9.59786 4.69898 9.88236 4.76034L8.1675 6.47519C7.45625 6.7262 6.89258 7.28987 6.64157 8.00112L4.92672 9.71597C4.86536 9.43148 4.83305 9.13618 4.83305 8.83333C4.83305 6.53215 6.69853 4.66667 8.99971 4.66667Z"
                      fill="#667185"
                    />
                    <path
                      d="M8.99971 11.3333C8.70732 11.3333 8.42665 11.2831 8.16585 11.1909L6.91498 12.4418C7.52815 12.7968 8.2402 13 8.99971 13C11.3009 13 13.1664 11.1345 13.1664 8.83333C13.1664 8.07382 12.9632 7.36177 12.6081 6.74859L11.3573 7.99947C11.4495 8.26027 11.4997 8.54094 11.4997 8.83333C11.4997 10.214 10.3804 11.3333 8.99971 11.3333Z"
                      fill="#667185"
                    />
                  </svg>
                ) : (
                  "👁️"
                )}
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3.5 flex items-center justify-center text-white bg-[#0D5EBA] rounded-md hover:bg-blue-700 text-base font-semibold"
            disabled={loading}>
            {loading ? (
              <svg
                className="w-5 h-5 mr-2 text-white animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"></path>
              </svg>
            ) : (
              "Create an account"
            )}
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </motion.form>

        <motion.div
          className="flex flex-col space-y-4 w-full"
          variants={itemVariants}>
          {/* Google & Twitter Login Buttons */}
        </motion.div>

        <motion.div
          className="flex items-center justify-center mt-6"
          variants={itemVariants}>
          <span className="text-sm text-[#667185]">Already here? </span>
          <Link
            href="/login"
            className="ml-1 text-sm font-medium text-[#0D5EBA]">
            Login
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RegisterPage;
