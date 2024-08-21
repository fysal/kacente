'use client';
import React, { useEffect } from 'react'; 
import android_logo from '@/app/assets/and_logo.png';
import app_logo from '@/app/assets/app_logo.png'
import Image from 'next/image';
import hand_image from '@/app/assets/wood-hand.png';
import qr_code_vect from '@/app/assets/qr-code.png';

import  AOS from 'aos';


const FinanceHero = () => {

     let logos = [android_logo, app_logo];
useEffect(() => {
  // import("aos").then((AOS) =>
    
  // );
  AOS.init({ offset: 200, duration: 600, easing: "ease-in-sine", delay: 100 });
},[])

  return (
    <div id="download" className="container">
      <div className="md:grid grid-cols-2 gap-24 bg-slate-300/20 ">
        <div className="p-10 md:py-24 md:ps-24">
          <h5 className="text-4xl md:text-5xl font-semibold mb-4">
            Easy transactions management with our mobile app
          </h5>
          <p className="text-slate-500 mb-10">
            No more paperwork, no more hassle. With our mobile app, you can
            manage your transactions easily.
          </p>

          <div className="flex items-center gap-3 mb-4 ">
            {logos.map((logo: any, index: number) => (
              <div
                key={index}
                className="relative"
                style={{ width: "150px", height: "100px" }}
              >
                <Image
                  className="opacity-85"
                  src={logo.src}
                  alt="logo"
                  fill
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            ))}
          </div>

          <Image src={qr_code_vect.src} width={60} height={60} alt="qr code" />
        </div>
        <div
          className="relative md:pt-24 text-center"
          data-aos="fade"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <Image
            src={hand_image.src}
            height={400}
            width={400}
            alt="wood hand"
            className=" bottom-0 left-5"
          />
        </div>
      </div>
    </div>
  );
}

export default FinanceHero