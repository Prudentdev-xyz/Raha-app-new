import { Mail, Phone } from "lucide-react";
import React from "react";

export const ContactUs = () => {
  return (
    <div className="py-7 px-10 flex flex-col md:flex-row gap-10 md:gap-30 relative">
      <div>
        <h1 className="text-black font-semibold text-xl md:text-4xl">
          Contact Us
        </h1>
        <p className="font-regular text-gray text-sm md:text-xl space-x-5 md:space-x-11 max-w-sm md:max-w-2xl py-3 md:py-6">
          We’re here to help! Reach out with any questions or support needs, and
          our team will get back to you promptly. Let’s connect!
        </p>
        <div className="text-gray">
          <p className="flex py-2 items-center md:items-start gap-3">
            <Mail /> <p className="underline">Raha-app@yahoo.com</p>
          </p>
          <p className="flex py-2 items-center md:items-start gap-3">
            <Phone /> +8801846447109
          </p>
        </div>

        <div className="py-2 md:py-5 flex flex-col md:flex-row gap-10">
          <div>
            <h2 className="text-primary font-medium text-xl md:text-4xl">
              Customer support
            </h2>
            <p className="text-gray font-regular text-sm md:text-xl space-x-5 max-w-xs">
              Our support team is available 24/7 to assist with any questions or
              concerns you may have.
            </p>
          </div>
          <div>
            <h2 className="text-primary font-medium text-xl md:text-4xl">
              Feedback and Suggestions
            </h2>
            <p className="text-gray font-regular text-sm md:text-xl space-x-5 max-w-xs">
              We value your feedback and are continuously working to improve
              Raha. Your input is essential in shaping its future.
            </p>
          </div>
          <div>
            <h2 className="text-primary font-medium text-xl md:text-4xl">
              Media Inquries
            </h2>
            <p className="text-gray font-regular text-sm md:text-xl space-x-5 max-w-xs">
              For media inquiries or press-related questions, please contact us
              at Raha-app@yahoo.com.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-primary px-5 md:px-6 py-4">
        <h2 className="font-medium text-tetiary text-lg md:text-3xl">
          Get In Touch
        </h2>
        <p className="font-regular text-gray text-sm md:text-xl">
          You can reach us any time
        </p>
        <p className="py-5">
          <input
            type="email"
            placeholder="Full Name"
            className="rounded-xl bg-tetiary/10 h-11 md:h-11 w-70 md:w-90 px-4 placeholder:text-gray border-0"
          />
        </p>
        <p className="pb-5">
          <input
            type="email"
            placeholder="Enter your Email Address"
            className="rounded-xl bg-tetiary/10 h-11 md:h-11 w-70 md:w-90 px-4 placeholder:text-gray border-0"
          />
        </p>
        <p>
          <input
            type="email"
            placeholder="Enter your Phone Number"
            className="rounded-xl bg-tetiary/10 h-11 md:h-11 w-70 md:w-90 px-4 placeholder:text-gray border-0"
          />
        </p>
        <p className="py-5">
          <input
            type="message"
            placeholder="Type your message here"
            className="rounded-xl bg-tetiary/10 h-40 md:h-40 w-70 md:w-90 px-4 placeholder:text-gray border-0"
          />
        </p>
        <button className="bg-secondary px-30 md:px-40 py-2 rounded-full">Send</button>
      </div>
      <img
        src="/ContactUsRight.svg"
        alt="ContactUsRight"
        className=" absolute right-0 top-0"
      />
    </div>
  );
};
