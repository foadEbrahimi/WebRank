import React from "react";

export default function Title({ subTitle, Title }) {
  return (
    <div className="space-y-2">
      <h1 className="after:w-[120px] after:h-[2px] after:inline-block after:mr-2 after:bg-Primary my-[4px] text-SectionTitle text-xl">
        {subTitle}
      </h1>
      <h1 className="font-bold text-3xl">{Title}</h1>
    </div>
  );
}
