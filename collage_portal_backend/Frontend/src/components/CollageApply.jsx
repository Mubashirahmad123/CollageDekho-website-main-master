import React from 'react';
import '../../tailwind.apply.config';
import Worldwidelocation from '../images/worldwidelocation.png';
import Email from '../images/email.png';
import circledUserMaleSkinType from '../images/circledUserMaleSkinType.png';
import ringervolume from '../images/ringer-volume.png';
import cap from '../images/graduation-cap@2x.png';
import student from '../images/graduated-student@2x.png';

const ApplyForm = () => {
  return (
    <div className="w-full relative overflow-hidden flex flex-col items-center justify-center py-[50px] px-[20px] pb-[50px] box-border lg:px-[231px] lg:pt-[147px] lg:pr-[115px] lg:pb-[127px] mq750:px-[76px] mq750:pt-[37px] mq750:pr-[57px] mq750:pb-[45px]" style={{backgroundColor: '#f1f5f9'}}>
      <form className="w-full max-w-[1025px] flex flex-col items-center gap-4 box-border p-8 rounded-lg shadow-lg" style={{backgroundColor: '#4ade80'}}>


        <h2 className="text-2xl font-medium text-center text-gray-800 mb-4">
          Apply Here
        </h2>

        {/* Name and Icon */}
        <div className="w-full max-w-sm flex flex-row items-center justify-center gap-2">
        <img className="w-10 h-10" alt="" src={circledUserMaleSkinType} />

          <input
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Name"
            type="text"
          />
        </div>

        {/* Contact and Icon */}
        <div className="w-full max-w-sm flex flex-row items-center justify-center gap-2">
        <img className="w-10 h-10" alt="" src={ringervolume} />

          <input
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Contact"
            type="text"
          />
        </div>

        {/* Email and Icon */}
        <div className="w-full max-w-sm flex flex-row items-center justify-center gap-2">
        <img className="w-10 h-10" alt="" src={Email} />

          <input
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Email"
            type="text"
          />
        </div>

        {/* Stream and Icon */}
        <div className="w-full max-w-sm flex flex-row items-center justify-center gap-2">
        <img className="w-10 h-10" alt="" src={cap} />

          <input
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Stream"
            type="text"
          />
        </div>

        {/* Address and Icon */}
        <div className="w-full max-w-sm flex flex-row items-center justify-center gap-2">
        <img className="w-10 h-10" alt="" src={Worldwidelocation} />

          <input
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Address"
            type="text"
          />
        </div>

      
        {/* Submit Button */}
        <div className="w-full flex flex-row items-center justify-center">
        <button className="w-22 px-3 py-2 bg-royalblue text-white rounded-md focus:outline-none  " style={{transition: 'background-color 0.3s ease'}} onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'green'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'royalblue'}>


            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplyForm;
