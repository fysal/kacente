import React from 'react'
import { EssetionalCupTwotone, SecurityEyeTwotone,NotificationsLampChargeTwotone } from 'react-icons-sax';

const Content = () => {

     const iconSize=12;

     const iconColor = "#2563eb";

     const msv = [
       {
         title: "Mission",
         icon:   <NotificationsLampChargeTwotone color={iconColor} />,
         content:
           "To revolutionize the way people manage their daily finances by providing a trustworthy and mobile money transfer application. We are committed to empowering individuals",
       },
       {
         title: "vision",
         icon:  <SecurityEyeTwotone color={iconColor} />,
         content:
           "Empowering seamless financial transactions locally and globally, our innovative mobile transaction transfer platform envisions a future where 24-hours accessible, secure and instant",
       },
       {
         title: "values",
         icon: <EssetionalCupTwotone color={iconColor} /> ,
         content:
           "Our innovative mobile money transfer application is founded on the principles of user-centricity, social responsibility, security and accessibility. We are committed to empowering individuals",
       },
     ];
  return (
    <div className="continer mx-auto p-20 ">
      <h2 className="text-4xl md:text-5xl font-bold mb-10">About Kacente</h2>
      <div className="text-base text-slate-700 leading-relaxed mb-14 border-b pb-10">
        Kacente was founded on a technology idea born out of frustration with
        the existing mobile money transfer paradigms in place, typically
        monopolized by the existing mobile telco service providers who have the
        majority of voice subscribers on their network. Other players on the
        market with mobile money transfer capabilities are banks, that have
        their own individualized mobile app applications, but use the telco
        network and cash out methodology to avail monies to their customers.
        What is missing is a mechanism of efficiently and immediately
        transferring money via interoperable technology from one bank account to
        another bank account immediately.
      </div>

      <div className="grid md:grid-cols-3 gap-5 mb-10 border-b pb-20">
        {msv.map((item: any, index: number) => (
          <div key={index} className={`${index < 2 && "border-r "} pe-5`}>
            <div className="flex items-end gap-4 mb-5">
              <div className="bg-blue-500/20 p-3 rounded-sm ">{item.icon}</div>
              <div className="text-3xl font-semibold capitalize ">
                {item.title}
              </div>
            </div>

            <div className="text-sm text-slate-700">{item.content}</div>
          </div>
        ))}
      </div>

      <div className="text-2xl md:text-3xl font-bold mb-5 leading-loose">
        At Kacente,<br/> we are committed to revolutionizing the way people transfer
        money between banks.
      </div>
      <div className="text-base text-slate-600">
        Our goal is to provide a secure, efficient, and cost-effective solution
        for all your financial transaction needs. Join us in the journey towards
        a more connected and financially inclusive future. Don&apos;t miss out
        on the opportunity to experience a new era of banking. Sign up with Test
        today and start enjoying seamless bank-to-bank transfers like never
        before!
      </div>
    </div>
  );
}

export default Content;