import Image from "next/image";
import React from "react";
import frame from "@/app/assets/frame6.png";

const PersonalizedExperience = () => {
  return (
    <div id="personalize" className="container py-24 ">
      <div className="md:grid grid-cols-2  flex-grow">
        <div className="text-center sm:mb-10">
          <Image
            src={frame.src}
            height={403}
            width={550}
            alt="frame"
            quality={100}
            unoptimized={true}
            className=""
            style={{ height: "auto" }}
          />
        </div>
        <div className="p-10 md:p-0">
          <div className="text-4xl md:text-5xl font-semibold mb-6">
            More personalized
            <br /> experience
          </div>
          <div className="col-span-1 text-sm text-slate-700 ">
            Kacente provides a seamless way for users to connect and manage
            multiple bank accounts within a single platform. This feature
            eliminates the hassle of switching between different banking apps or
            websites when sending money. <br /> <br /> By centralizing your
            accounts, Kacente enhances your ability to make all your mobile
            payment transactions in one place, making your financial life more
            organized and streamlined. <br /> <br />
            Whether you have accounts with different banks or multiple accounts
            with the same bank, Kacente gives you the power to link them all to
            your profile, thus simplifying the process of transfering funds from
            bank to bank immediately and securerly.
            {/* <ul>
              {[
                "Kacente Empowers you to link multiple bank accounts to your profile, offering enhanced flexibility and convenience",
                "Easily select any of your linked bank accounts when you need to send money",
                "Giving you the freedom to manage your finances according to your preferences"
              ]}
              <li></li>
              <li>
                
              </li>
              <li>
                
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalizedExperience;
