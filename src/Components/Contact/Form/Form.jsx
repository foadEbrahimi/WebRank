import React from 'react';

import Card from './Card';

import './Form.css';

import { contactInfo } from '../../../constants/index';

export default function Form() {
  return (
    <div>
      <div className="space-y-10 md:grid md:grid-cols-4 gap-x-40 content-start">
        <div className="flex flex-col gap-5 col-span-1 md:mt-8">
          {contactInfo.map(card => (
            <Card {...card} key={card.id} />
          ))}
        </div>
        <div className="FORM col-span-3">
          <div className="flex flex-col gap-y-6 w-full">
            <div className="grid grid-cols-2 gap-x-8">
              <input
                type="text"
                placeholder="نام"
                className="col-span-1 border-0"
              />
              <input
                type="email"
                placeholder="ایمیل"
                className="col-span-1 border-0"
              />
            </div>
            <input
              type="text"
              placeholder="عنوان"
              className="col-span-2 border-0"
            />
            <textarea
              name=""
              id=""
              placeholder="پیام"
              className="col-span-2 border-0 max-h-52"
            ></textarea>
            <button className="bg-Primary text-white self-center px-6 py-3 rounded-md font-semibold ">
              ارسال پیام
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
