'use client';
import React from 'react' 
import logo from '@/app/assets/kacente-logo.png'
import Image from 'next/image';
import Link from 'next/link';
import About from '../about';
import Content from '../about/content';
import { EssetionalCloseCircleOutline } from 'react-icons-sax';
import MobileContent from '../about/mobile_content';
const MainNavigation = () => {


  let links = [{
    title:'How it works',
    link:'#how-it-works',
  },{
    title:'Why us',
    link:'#why-us',
  },
  {title:'Personalize',
    link:'#personalize',
  },
    {title:'Contact us',
    link:'#contact',
  }

]
  return (
    <div className="shadow-sm drawer drawer-end">
      <div className="container mx-auto">
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>{" "}
              </div>
              <div
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <ul>
                  {links.map((link: any, index: number) => (
                    <li key={index}>
                      <Link href={link.link}>{link.title}</Link>
                    </li>
                  ))}
                  <li>
                    <span
                      className=""
                      onClick={() => {
                        if (document.getElementById("my_modal_5")) {
                          (
                            document?.getElementById(
                              "my_modal_5"
                            ) as HTMLFormElement
                          ).showModal();
                        }
                      }}
                    >
                      About us
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <Image src={logo.src} width={250} height={20} alt="logo" unoptimized />
            {/* <a className="btn btn-ghost text-xl">Kacente</a> */}
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {links.map((link: any, index: number) => (
                <li key={index}>
                  <Link href={link.link}>{link.title}</Link>
                </li>
              ))}
            </ul>
            <About />
          </div>

          <div className="navbar-end">
            <a
              href="#download"
              className="py-2 px-4 rounded primary-bg border-0 text-white text-xs"
            >
              Download
            </a>
          </div>
        </div>
      </div>
<MobileContent/>
    </div>
  );
}

export default MainNavigation