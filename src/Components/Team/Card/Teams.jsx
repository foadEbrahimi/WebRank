import React, { useState } from 'react';

import {
  BiLogoInstagramAlt,
  BiLogoFacebookCircle,
  BiLogoTwitter,
  BiLogoLinkedin,
} from 'react-icons/bi';

export default function (data) {
  const [social] = useState([
    <BiLogoFacebookCircle />,
    <BiLogoTwitter />,
    <BiLogoLinkedin />,
    <BiLogoInstagramAlt />,
  ]);
  return (
    <div className="group shadow-sm shadow-gray-300 rounded-xl w-fit">
      <div className="relative">
        <img
          src={data.src}
          className="relative rounded-t-lg w-[25rem] h-[20rem] md:w-[20rem] xl:w-[17rem] object-cover"
          alt="member img"
        />
        <div className="Social opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center gap-x-5 absolute bottom-6 right-20 md:right-10 lg:right-12 xl:right-6 z-[2]">
          {social.map((icon, inedx) => (
            <span
              key={inedx}
              className="text-2xl text-gray-100 bg-Primary p-2 rounded-xl cursor-pointer hover:text-gray-900 transition-all duration-500"
            >
              {icon}
            </span>
          ))}
        </div>
      </div>
      <div className="p-4 text-right">
        <h1 className="text-2xl">{data.name}</h1>
        <p className="text-lg">{data.silence}</p>
      </div>
    </div>
  );
}
