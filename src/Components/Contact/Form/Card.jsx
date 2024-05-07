import React from "react";

export default function Card(data) {
  return (
    <div className="flex items-center gap-4">
      <div className="px-4 py-2 rounded-lg bg-Primary">{data.icon}</div>
      <div>
        <h1 className="text-[1.4rem] font-semibold">{data.title}</h1>
        <h2 className="text-md">{data.subTitle}</h2>
      </div>
    </div>
  );
}
