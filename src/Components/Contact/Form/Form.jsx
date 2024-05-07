import React, { useState } from "react";
import Card from "./Card";
import "./Form.css";
export default function Form() {
  const [infoCard, setInfoCard] = useState([
    {
      id: 1,
      title: "مکان:",
      subTitle: "کرمان",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          className="w-5 h-9"
        >
          <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "ایمیل:",
      subTitle: "info@example.com",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-5 h-9"
        >
          <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "شماره تماس:",
      subTitle: "0123467889",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          className="w-5 h-9"
        >
          <path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zM304 64H80V384H304V64z" />
        </svg>
      ),
    },
  ]);
  return (
    <div>
      <div className="space-y-10 md:grid md:grid-cols-4 gap-x-40 content-start">
        <div className="flex flex-col gap-5 col-span-1 md:mt-8">
          {infoCard.map(card => (
            <Card {...card} key={card.id}/>
          ))}
        </div>
        <div className="FORM col-span-3">
          <div className="flex flex-col gap-y-6 w-full">
            <div className="grid grid-cols-2 gap-x-8">
              <input type="text" placeholder="نام" className="col-span-1" />
              <input type="email" placeholder="ایمیل" className="col-span-1" />
            </div>
            <input type="text" placeholder="عنوان" className="col-span-2" />
            <textarea
              name=""
              id=""
              placeholder="پیام"
              className="col-span-2 max-h-52"
            ></textarea>
            <button className="bg-Primary self-center px-6 py-3 rounded-md font-semibold ">
              ارسال پیام
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
