import React from 'react';

export default function FeedCard(data) {
  return (
    <div
      id={data.itemId}
      className="carousel-item flex flex-col gap-y-1 w-full px-5"
    >
      <img src={data.src} className="w-24 rounded-full mx-auto" alt="" />
      <h1 className="text-3xl text-white mt-2 text-center">{data.name}</h1>
      <h1 className="text-xl text-center text-black">{data.silence}</h1>
      <p className="text-lg mt-4 max-w-3xl mx-auto text-center text-white">
        {data.discribtion}
      </p>
    </div>
  );
}
