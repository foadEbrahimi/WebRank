import React from 'react';

export default function Card(data) {
  return (
    <div className="flex items-center gap-4">
      <div className=" rounded-lg bg-Primary">
        <img src={data.icon} className='!min-w-10 p-2 h-10' alt="icon" />
      </div>
      <div>
        <h1 className="text-[1.4rem] font-semibold">{data.title}</h1>
        <h2 className="text-md">{data.subTitle}</h2>
      </div>
    </div>
  );
}
