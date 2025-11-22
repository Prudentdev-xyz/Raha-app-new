import React, { useState } from "react";
import logo from "/logo.svg";
import { Building2, User } from "lucide-react";

export const FundraisePage = () => {
  const [mode, setMode] = useState("login");
  const [accountType, setAccountType] = useState("individual");

  const switchMode = () => {
    setMode(mode === "login" ? "signup" : "login");
  };

  return (
    <div>
      <div className="p-10 flex flex-col items-center justify-center bg-gray-50 pt-30 md:pt-2">
        <img
          src={logo}
          alt="logo"
          className=" flex items-center md:items-start pb-3"
        />
        <h1 className="text-xl md:text-3xl font-bold mb-6 text-center">
          {mode === "login" ? "Login to Raha" : "Sign up to Raha"}
        </h1>

        <div className="bg-white p-4 md:p-8 rounded-2xl shadow-xl w-full max-w-sm md:max-w-md">
          <div className="flex mb-6 border rounded-xl overflow-hidden">
            <button
              className={`flex-1 py-2 px-8 text-center font-medium transition-all ${
                accountType === "individual"
                  ? "bg-primary text-white"
                  : "bg-gray-100"
              }`}
              onClick={() => setAccountType("individual")}
            >
              <p className="flex gap-1">
                <User /> Individual
              </p>
            </button>

            <button
              className={`flex-1 py-2 px-1 md:px-3 text-center font-medium transition-all ${
                accountType === "organization"
                  ? "bg-primary text-white"
                  : "bg-gray-100"
              }`}
              onClick={() => setAccountType("organization")}
            >
              <p className="flex gap-1 px-3">
                <Building2 /> Organization
              </p>
            </button>
          </div>

          <form action="" className="space-y-4">
            {mode === "signup" && (
              <>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-primary focus:outline-none"
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </>
            )}

            <input
              type="text"
              placeholder="Email Address"
              className="w-full p-3 border focus:ring-2 focus:ring-primary focus:outline-none rounded-xl"
            />

            <input
              type="text"
              placeholder="Password"
              className="w-full p-3 border focus:ring-2 focus:ring-primary focus:outline-none rounded-xl"
            />

            {mode === "signup" && (
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" />
                Subscribe to Newsletter
              </label>
            )}

            <a href="/"><button className="w-full p-3 bg-primary text-white rounded-xl font-semibold pt-4 hover:bg-primary/50 transition-all">
              {mode === "login"
                ? `Log in as ${
                    accountType === "individual" ? "Individual" : "Organization"
                  }`
                : `Create ${
                    accountType === "individual" ? "Individual" : "Organization"
                  } Account`}
            </button>
            </a>
          </form>

          <div className="text-center mt-4">
            <button className="underline" onClick={switchMode}>
                {mode === "login" ? "Or Create a new Account" : "Or Log in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
