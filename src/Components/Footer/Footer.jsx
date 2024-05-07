import React from "react";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoSkype,
  BiLogoTwitter,
} from "react-icons/bi";
import { FaAngleLeft } from "react-icons/fa";
import { Group } from "evergreen-ui";
export default function Footer() {
  return (
    <div className="bg-[#151515] text-white py-5">
      <div className="px-5 md:px-10 xl:px-28 2xl:px-36 space-y-20">
        <div className="flex flex-col justify-between gap-y-10 md:grid md:grid-cols-2 md:items-center lg:grid-cols-4">
          <div className="flex flex-col gap-y-3">
            <div className="flex items-center">
              <img src="./images/logo.png" className="w-28" alt="" />
              <h1 className="text-2xl uppercase">webrank</h1>
            </div>
            <div className="text-lg pr-6">
              <h1>کرمان</h1>
              <h1>تلفن: 01234567895</h1>
              <h1>ایمیل: info@example.com</h1>
            </div>
            <div className="flex items-center gap-x-3 pr-5">
              <span className="rounded-md p-1 bg-[#292929] cursor-pointer hover:bg-Primary transition-all duration-500">
                <BiLogoInstagram className="text-3xl " />
              </span>
              <span className="rounded-md p-1 bg-[#292929] cursor-pointer hover:bg-Primary transition-all duration-500">
                <BiLogoTwitter className="text-3xl" />
              </span>
              <span className="rounded-md p-1 bg-[#292929] cursor-pointer hover:bg-Primary transition-all duration-500">
                <BiLogoFacebook className="text-3xl" />
              </span>
              <span className="rounded-md p-1 bg-[#292929] cursor-pointer hover:bg-Primary transition-all duration-500">
                <BiLogoLinkedin className="text-3xl" />
              </span>
              <span className="rounded-md p-1 bg-[#292929] cursor-pointer hover:bg-Primary transition-all duration-500">
                <BiLogoSkype className="text-3xl" />
              </span>
            </div>
          </div>
          <div className="space-y-3 pr-6">
            <h1 className="text-2xl">لینک های مفید</h1>
            <ul className="space-y-2">
              <li className="flex items-center cursor-pointer hover:text-Primary transition-colors duration-500">
                <FaAngleLeft className="text-xl text-Primary" />
                خانه
              </li>
              <li className="flex items-center cursor-pointer hover:text-Primary transition-colors duration-500">
                <FaAngleLeft className="text-xl text-Primary" />
                درباره ما
              </li>
              <li className="flex items-center cursor-pointer hover:text-Primary transition-colors duration-500">
                <FaAngleLeft className="text-xl text-Primary" />
                خدمات
              </li>
              <li className="flex items-center cursor-pointer hover:text-Primary transition-colors duration-500">
                <FaAngleLeft className="text-xl text-Primary" />
                شرایط استفاده ار خدمات
              </li>
              <li className="flex items-center cursor-pointer hover:text-Primary transition-colors duration-500">
                <FaAngleLeft className="text-xl text-Primary" />
                سیاست حفظ حریم خصوصی
              </li>
            </ul>
          </div>
          <div className="space-y-3 pr-6">
            <h1 className="text-2xl">خدمات ما</h1>
            <ul className="space-y-2">
              <li className="flex items-center cursor-pointer hover:text-Primary transition-colors duration-500">
                <FaAngleLeft className="text-xl text-Primary" />
                طراحی وب سایت
              </li>
              <li className="flex items-center cursor-pointer hover:text-Primary transition-colors duration-500">
                <FaAngleLeft className="text-xl text-Primary" />
                توسعه وب
              </li>
              <li className="flex items-center cursor-pointer hover:text-Primary transition-colors duration-500">
                <FaAngleLeft className="text-xl text-Primary" />
                مدیریت تولید
              </li>
              <li className="flex items-center cursor-pointer hover:text-Primary transition-colors duration-500">
                <FaAngleLeft className="text-xl text-Primary" />
                بازاریابی
              </li>
              <li className="flex items-center cursor-pointer hover:text-Primary transition-colors duration-500">
                <FaAngleLeft className="text-xl text-Primary" />
                طراحی گرافیک
              </li>
            </ul>
          </div>
          <div className="space-y-3 pr-6 mb-10 lg:mb-0 xl:mb-10">
            <h1 className="text-2xl">خبرنامه ما</h1>
            <p className="text-md max-w-96">
              با این حال ، هیچ یک از چیزهایی که من می خوانم تقصیر بزرگ ما نخواهد
              بود
            </p>
            <Group dir="ltr" className="rounded-md">
              <input
                type="text"
                placeholder="بنویس ..."
                dir="rtl"
                className="p-10 text-black"
              />
              <button className="bg-Primary p-2 rounded-md">دنبال کردن</button>
            </Group>
          </div>
        </div>
      </div>
    </div>
  );
}
