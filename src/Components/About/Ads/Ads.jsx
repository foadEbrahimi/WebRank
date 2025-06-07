import React from 'react';

import { adsInfo } from '../../../constants/index';

export default function Ads() {
  return (
    <div>
      <div className="space-y-8 laptop:flex laptop:items-center laptop:gap-5 laptop:space-y-0">
        <div className="Img">
          <img
            src="./images/Ads.jpg"
            alt="Ads Img"
            className="md:max-w-2xl rounded-xl laptop:max-w-[30rem] xl:max-w-[35rem] 2xl:max-w-[38rem]"
          />
        </div>
        <div className="Content space-y-2">
          {adsInfo.map((ads, index) => (
            <div className="flex items-start gap-5 p-3" key={index}>
              <img src={ads.icon} alt="icon" className="w-10 h-10" />
              <div className="flex flex-col gap-y-2">
                <h1 className="text-xl font-bold">{ads.title}</h1>
                <h2 className="text-slate-500">{ads.sub}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
