import React, { useState } from "react";
import Slider from "./Slider/Slider";
import Ads from "./Ads/Ads";
export default function About() {
  const [Info] = useState({
    text: "شرکت دیجیتال مارکتینگ نوآد به عنوان شرکتی پیشرو در صنعت دیجیتال مارکتینگ ایران در تلاش است تا با بهره گیری از دانش فنی روز و ارایه راهکارهای نوین بازاریابی و برندینگ، با پیشرفت کسب و کارهای داخلی نقش مهمی در شکوفایی اقتصادی ایران ایفا نماید و با تثبیت نام نوآد به عنوان تخصصی ترین برند دیجیتال مارکتینگ در ایران و گسترش نام آن در بازارهای جهانی به صادرات خدمات مبتنی بر تکنولوژی های نوین گام بردارد. نوآد پیشرفت خود در طول یک دهه فعالیت را مرهون شفافیت، انسجام و پایبندی به نتایج پیش بینی شده مشتریان خود می داند. سرمایه گذاری روی تکنولوژی های نوین، کیفیت و نوآوری، پایبندی به تعهدات، رضایتمندی و وفاداری مشتریان، نیروی انسانی متمرکز و پویا از ارزش های ذاتی نوآد می باشند. فضای دیجیتال تحول شگرف در ارتباطات و نحوه تعامل مردم با یکدیگر بوجود آورده است. ابزارها و پلتفرم های بوجود آمده در این عصر، قدرت چانه زنی و انتخاب را برای مردم افزایش داده و موجب سهولت در ارزیابی و مقایسه برندها و محصولات مختلف گردیده است. ما این تغییر نگرش در انتخاب یک برند و محصول را نوعی فرصت برای خود و مشتریانمان به حساب می آوریم. در فضای دیجیتال به راحتی می توان بازار هدف را شناسایی، نیازها، خواسته ها و علایق آنها را کشف و با استفاده از اطلاعاتی که بدست می آید به خلق و توسعه محصولات، برند و تجربیات مناسب که از ادغام تکنولوژی و خلاقیت در کنار متد بازاریابی نوین ناشی میشود، اقدام کرد. در نوآد ما آماده پذیرفتن چالش های جدید هستیم و با هر قیمت که شده به تعهدات خود پایبند می مانیم.",
    title: "شرکت دیجیتال وب رنک",
    list: [
      "۱۰ سال تجربه ارایه خدمات تخصصی دیجیتال مارکتینگ و راهکارهای نوین بازاریابی",
      "تمرکز ما در تمامی استراتژی های اجرایی معطوف به دیجیتال برندینگ و همسو کردن استراتژی های دیجیتال مارکتینگ با دیگر فعالیت های برندینگ و بازاریابی شما می باشد.",
      "برای دریافت آخرین اخبار، گرایش ها و رویداد های دیجیتال مارکتینگ ثبت نام کنید",
    ],
    subText:
      "خدمات نوآد در جهت یکپارچه سازی تمامی فعالیت های یک کسب و کار از مرحله ورود به بازار، ساخت، گسترش و ایجاد تصویری یکپاچه از برند، دیجیتال مارکتینگ، افزایش مزیت رقابتی و سهم بازار تا مراحل پس از فروش و ایجاد وفاداری در مشتریان یک برند ارایه می گردد.",
  });
  return (
    <div className="space-y-16 px-5 md:px-10 xl:px-28 2xl:px-36">
      <div className="AboutSection mt-16 space-y-7 lg:flex lg:items-start lg:space-y-0 lg:gap-5">
        <img
          src="./images/about.jpg"
          alt="About Img"
          className="md:max-w-2xl lg:max-w-md xl:max-w-xl 2xl:max-w-2xl text-center order-2"
        />
        <div className="AboutContent space-y-4">
          <h1 className="text-[1.7rem] font-semibold">{Info.title}</h1>
          <p className="text-justify text-md">{Info.text}</p>
          <ul className="ps-6">
            {Info.list.map((list, index) => (
              <li className="list-image-click text-md" key={index}>
                {list}
              </li>
            ))}
          </ul>
          <p>{Info.subText}</p>
        </div>
      </div>
      <div className="SliderSection">
        <Slider />
      </div>
      <div className="AdsSection">
        <Ads />
      </div>
    </div>
  );
}
