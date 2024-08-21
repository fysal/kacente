'use client';
import Image from "next/image";
import React, { useMemo, useState } from "react";
import screenshot from "@/app/assets/screenshot.jpg";
import short1 from "@/app/assets/short1.jpg";
import short3 from "@/app/assets/short3.jpg";
import short4 from "@/app/assets/short4.jpg";
import short5 from "@/app/assets/short5.jpg";
import short6 from "@/app/assets/short6.jpg";

const HowItWorks = () => {

  let shorts = [short1,short3,short4,short5,short6]
  let [activeShort, setactiveShot] = useState<number>(0)
  let steps = [
    {
      step: 1,
      title: "Create account",
      desc: (
        <>
          Download the app from <br />
          google play of app store
        </>
      ),
    },
    //   {
    //     step: 2,
    //     title: "Verify identity",
    //     desc: "From January 1st to February 1st",
    //   },
    {
      step: 2,
      title: "Select your bank",
      desc: (
        <>
          Choose your desired bank <br /> to send money from
        </>
      ),
    },
    {
      step: 3,
      title: "Add receipint",
      desc: "From January 1st to February 1st",
    },
    {
      step: 4,
      title: "Confirm and send money",
      desc: "From January 1st to February 1st",
    },
  ];

  let process = [
    {
      step: 1,
      title: "Create account",
      desc: (
        <>
          Download the app from google play or app store <br />
          and sign up for the account
        </>
      ),
    },
    // {
    //   step: 2,
    //   title: "Create account",
    //   desc: "Verify your identity ",
    // },
    {
      step: 2,
      title: "Select your bank",
      desc: <>Choose your desired bank to send money from</>,
    },
    {
      step: 3,
      title: "Add receipint",
      desc: "From January 1st to February 1st",
    },
    {
      step: 4,
      title: "Enter desired amount",
      desc: "Enter the amount of money you would like to send",
    },
    {
      step: 5,
      title: "Confirm and send money",
      desc: "From January 1st to February 1st",
    },
  ];

  useMemo(() => {
incrementWithReset();
  },[]);

function incrementWithReset() {
  let counter = 0;

  const interval = setInterval(() => {

    counter++;
    if (counter > 4) {
      counter = 0;
       // Reset the counter when it exceeds 6
    }
    setactiveShot(counter);
    
  }, 3000); // Increment every 1000 milliseconds (1 second)
}

  return (
    <div id="how-it-works" className="container mx-auto py-4">
      <h5 className="text-center text-3xl font-semibold mb-5">How it works</h5>
      <p className="text-center mb-10 text-slate-400">
        Our goal is to provide a secure, efficient, and cost-effective solution
        <br />
        for all your financial transaction needs.
      </p>
      {/* <div className="flex items-center shadow primary-bg rounded text-center py-3">
        {steps.map((step: any, index: number) => (
          <div key={index} className="stat place-items-center text-white">
            <div className="stat-value mb-3 ">Step {step.step}</div>
            <div className="stat-title mb-3 text-white text-lg">
              {step.title}
            </div>
            <div className="stat-desc text-white text-xs">{step.desc}</div>
          </div>
        ))}
      </div> */}
      <div className=" md:grid grid-cols-2">
        <div className=" col-span-1 text-center">
          <div className="mockup-phone ">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-0 relative">
                <Image
                  src={shorts[activeShort].src}
                  alt="screen"
                  fill
                  unoptimized
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <ul className="mt-12 px-10 md:mt-5 md:px-0">
            {process.map((step: any, index: number) => (
              <li
                key={index}
                className="mb-10 flex items-start gap-3 cursor-pointer"
                onClick={() => setactiveShot(index)}
              >
                <span
                  className={`font-bold  primary-bg text-white w-9 h-9 rounded-full flex items-center justify-center transition-opacity ease-in-out ${
                    index !== activeShort && "opacity-40"
                  }`}
                >
                  {step.step}
                </span>
                <div>
                  <div
                    className={`text-xl font-semibold mb-2 transition-opacity ease-in-out ${
                      index !== activeShort && "opacity-65"
                    }`}
                  >
                    {step.title}
                  </div>
                  <div
                    className={`text-sm ${
                      index !== activeShort && "opacity-65"
                    }`}
                  >
                    {step.desc}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
