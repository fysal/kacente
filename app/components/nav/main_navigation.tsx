import React from 'react' 
import logo from '@/app/assets/kacente-logo.png'
import Image from 'next/image';
import Link from 'next/link';
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
    <div className="shadow-sm ">
      <div className="container mx-auto">
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              ></div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
            <Image src={logo.src} width={200} height={10} alt="logo" />
            {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {links.map((link: any, index: number) => (
                <li key={index}>
                  <Link href={link.link}>{link.title}</Link>
                 </li>
              ))}
           
            </ul>
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
    </div>
  );
}

export default MainNavigation