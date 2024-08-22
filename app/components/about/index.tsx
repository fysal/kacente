import React from 'react'
import Content from './content';
 import { EssetionalCloseCircleOutline } from 'react-icons-sax';


const About = () => {
  return (
    <div className="">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer-4" className=" text-sm">
          About us
        </label>
      </div>
      <div className="drawer-side z-50">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu bg-white  min-h-full w-11/12 p-4 ">
          {/* Sidebar content here */}
          <label htmlFor="my-drawer-4" className=" text-sm flex justify-end items-end px-10 cursor-pointer">
            <EssetionalCloseCircleOutline />
          </label>
          <Content />
        </div>
      </div>
    </div>
  );
}

export default About