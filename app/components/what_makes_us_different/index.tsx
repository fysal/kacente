import React from 'react'
 import { MoneyCardAddTwotone, MoneyCardsTwotone, MoneyConvertCardTwotone } from "react-icons-sax";

const WhatMakesUsDifferent = () => {

     const iconSize = 30;

     let advs = [
       {
         icon: <MoneyCardsTwotone size={iconSize} />,
         title: "Easiest money transfer",
         desc: "Cashless paymane are now very easy and safe. With us all that can be achieved",
       },
       {
         icon: <MoneyConvertCardTwotone size={iconSize} />,
         title: "Instant bank to bank transfer",
         desc: "Experience instant, secure bank-to-bank transfers with just a few quick taps.",
       },
       {
         icon: <MoneyCardAddTwotone size={iconSize} />,
         title: "Friendly transfer rates",
         desc: "Benefit from friendly, competitive transfer rates on every transaction.",
       },
     ];
  return (
    <div id="why-us" className="container py-24">
      <h5 className="text-center text-3xl font-semibold mb-4">
        {" "}
        What makes us different?
      </h5>
      <div className="text-center font-light  text-slate-500 mb-4">
        We have various advantanges that our competitors<br/> do not have and among
        them are
      </div>
      <div className="md:grid grid-cols-3 gap-4">
        {advs.map((adv: any, index: number) => (
          <div key={index} className={`${index === 1 ? "shadow-sm" : ""} p-10`}>
               <div className="text-blue-500 mb-3">{adv.icon}</div>
            <div className="font-semibold mb-2">{adv.title}</div>
            <div className="text-sm text-slate-600">{adv.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhatMakesUsDifferent;