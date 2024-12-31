"use client";

import { useState } from "react";
import Image from "next/image";

const JoinUsForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [country, setCountry] = useState("India");
  const [gender, setGender] = useState("Male");
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="flex flex-col items-center p-8 bg-white w-full max-w-md mx-auto ">
       <Image
                  src="/images/headerLogo.png"
                  alt="Logo"
                  width={100}
                  height={100}
                  className="mb-5"
              />
      <h1 className="text-2xl font-bold mb-4">BECOME A NIKE MEMBER</h1>
      <p className="text-gray-700 mb-6 text-center">
        Create your Nike Member profile and get <br /> first access to the very best of Nike <br /> products, inspiration and community.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full">
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="date"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />

        <p className="text-[11px] font-normal text-center text-[#8D8D8D] ">Get a Nike Member Reward every year on your Birthday.</p>

        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="India">Pakistan</option>
          <option value="India">India</option>
          <option value="India">Afganistan</option>
          <option value="India">Iran</option>
          
        </select>
        <div className="flex items-center space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              value="Male"
              checked={gender === "Male"}
              onChange={() => setGender("Male")}
              className="h-5 w-5"
            />
            <span className="ml-2">Male</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="Female"
              checked={gender === "Female"}
              onChange={() => setGender("Female")}
              className="h-5 w-5 text-[#8D8D8D]"
            />
            <span className="ml-2">Female</span>
          </label>
        </div>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className="h-5 w-5 text-[#8D8D8D]"
          />
          <span className="ml-2 text-[#8D8D8D]">Sign up for emails to get updates from Nike on products, offers and your Member benefits</span>
        </label>
        <p className="text-sm text-center mt-4 text-[#8D8D8D]">
          By creating an account, you agree to Nike's Privacy Policy and Terms of Use.
        </p>
        <button
          type="submit"
          className="w-full bg-black text-white font-bold py-2 rounded mt-4"
        >
          JOIN US
        </button>
        <p className="text-gray-700 text-sm text-center mt-2">
          Already a Member? <a href="#" className="font-bold">Sign in.</a>
        </p>
      </form>
    </div>
  );
};

export default JoinUsForm;