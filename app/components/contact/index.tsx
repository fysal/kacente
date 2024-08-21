import React from 'react'
 import {
   CallCallOutline,
   EmailsMessagesSmsOutline,
   CryptoCompanyMessengerOutline,
 } from "react-icons-sax";



const Contact = () => {

     let contactInfo = [
       {
         title: "Call us",
         icon: <CallCallOutline className="text-blue-600" size={20} />,
         text: "(+256) 772 800 000",
         caption: "Speak to our friendly team.",
       },
       {
         title: "Email us",
         icon: <EmailsMessagesSmsOutline className="text-blue-600" size={20} />,
         text: "info@kacente.com",
         caption: "We'll respond with 24 hours",
       },
       {
         title: "Chat with us",
         icon: (
           <CryptoCompanyMessengerOutline
             color="#2563eb"
             className="text-blue-600"
             size={20}
           />
         ),
         text: "Whatsapp: +256 772 800 000",
         caption: "We're here to help",
       },
     ];
  return (
    <div id="contact" className="container">
      <div className="bg-slate-300/20 p-10 md:py-24">
        <h5 className="text-center text-4xl md:text-5xl font-semibold mb-3">
          Get in touch
        </h5>
        <p className="text-center text-slate-500 mb-14">
          Kacente Financial Technologies Limited
          <br /> Plot 2 Lugard Road, Nakasero Hill Kampala Uganda
        </p>

        <div className="md:grid grid-cols-3 gap-10 w-full md:w-9/12 mx-auto bg-red relative ">
          {contactInfo.map((cont: any, index: number) => (
            <div className="border border-slate-200 p-4 rounded-lg mb-5" key={index}>
              <span className=" bg-blue-400/20 p-2 rounded-md">
                {cont.icon}
              </span>
              <p className="font-semibold text-sm mt-10 mb-1">{cont.title}</p>
              <p className=" text-xs mb-5 text-slate-500">{cont.caption}</p>
              <p className="font-semibold text-sm text-slate-500">
                {cont.text}
              </p>{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact