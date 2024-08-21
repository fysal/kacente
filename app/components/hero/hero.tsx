import Image from 'next/image';
import React from 'react'
import phoneIllustration from '@/app/assets/phone.png';
import Link from 'next/link';


const Hero = () => {
  return (
    <div className="container mx-auto">
      <div className="md:grid md:grid-cols-5 order-last item-center justify-between gap-10 text-base-200 min-h-96 w-full mx-auto pt-10 pb-14 md:py-20">
        <div className="hero-content_ col-span-2 px-10 md:px-0">
          <div className="">
            {/* <h1 className="text-1xl ">Kacente payment processing</h1> */}
            <h1 className="text-4xl md:text-5xl font-extrabold  leading-tight">
              Fast and Secure Bank-to-Bank Transfers!
            </h1>
            <p className="py-6 mb-3">
              Transfer money from one bank to another or from mobile telco
              services with just a few clicks, 24/7 with Kacente.
              <br />
              It&apos;s simple, seamless and secure.
            </p>
            <div className=" mb-10 md:mb-0">
              {" "}
              <Link
                href="#how-it-works"
                className="primary-bg py-4 px-5 rounded text-white"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
        <div className="md:col-span-3 text-center">
          <Image
            className=" duration-700 ease-in-out mx-auto"
            alt="phone"
            src={phoneIllustration.src}
            width={800}
            height={800}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero