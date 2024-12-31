"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "lucide-react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign-in logic here
  };

  return (
    <div className="flex flex-col items-center justify-center p-10 bg-white w-full max-w-sm mx-auto">
        <Image
            src="/images/headerLogo.png"
            alt="Logo"
            width={100}
            height={100}
            className="mb-5"
        />
      <h1 className="text-2xl font-bold text-center mb-5">YOUR ACCOUNT <br /> FOR EVERYTHING <br /> NIKE</h1>
      
      <form onSubmit={handleSignIn} className="flex flex-col space-y-4 w-full">
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-500 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-500 rounded"
          required
        />

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className="h-5 w-5 text-black"
          />
          <label className="text-sm text-black/50">Keep me signed in</label>
          <span className="text-sm text-black/50 text-right">Forgotten your password?</span>
        </div>

        <p className="text-xs text-gray-700 text-center mt-4">
        By logging in, you agree to Nike's Privacy Policy and Terms of Use.
      </p>

        <button
          type="submit"
          className="w-full bg-black text-white font-medium text-sm py-2 rounded"
        >
          SIGN IN
        </button>
      </form>

      
      <p className="text-sm text-black text-center mt-2">
        Not a Member? <a href="#" className="font-bold">Join Us.</a>
      </p>
    </div>
  );
};

export default SignIn;