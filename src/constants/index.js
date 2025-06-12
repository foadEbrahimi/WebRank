import slider1 from '/images/Slider/img1.png';
import slider2 from '/images/Slider/img2.png';
import slider3 from '/images/Slider/img3.png';
import slider4 from '/images/Slider/img4.png';
import slider5 from '/images/Slider/img5.png';

import ads from '/images/ads/ads.svg';
import whitch from '/images/ads/whitch.svg';
import blink from '/images/ads/blink.svg';
import truth from '/images/ads/truth.svg';

import icon1 from '/images/services/icon1.svg';
import icon2 from '/images/services/icon2.svg';
import icon3 from '/images/services/icon3.svg';
import icon4 from '/images/services/icon4.svg';
import icon5 from '/images/services/icon5.svg';
import icon6 from '/images/services/icon6.svg';

import iconPor1 from '/images/Portfolio/svg/icon1.svg';
import iconPor2 from '/images/Portfolio/svg/icon2.svg';
import iconPor3 from '/images/Portfolio/svg/icon3.svg';
import iconPor4 from '/images/Portfolio/svg/icon4.svg';

export const HeroCardsInfo = [
  {
    id: 1,
    icon: `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="fill-Primary w-8"
      >
        <path d="M224 0c17.7 0 32 14.3 32 32V62.1l15-15c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-49 49v70.3l61.4-35.8 17.7-66.1c3.4-12.8 16.6-20.4 29.4-17s20.4 16.6 17 29.4l-5.2 19.3 23.6-13.8c15.3-8.9 34.9-3.7 43.8 11.5s3.7 34.9-11.5 43.8l-25.3 14.8 21.7 5.8c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17l-67.7-18.1L287.5 256l60.9 35.5 67.7-18.1c12.8-3.4 26 4.2 29.4 17s-4.2 26-17 29.4l-21.7 5.8 25.3 14.8c15.3 8.9 20.4 28.5 11.5 43.8s-28.5 20.4-43.8 11.5l-23.6-13.8 5.2 19.3c3.4 12.8-4.2 26-17 29.4s-26-4.2-29.4-17l-17.7-66.1L256 311.7v70.3l49 49c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-15-15V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V449.9l-15 15c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l49-49V311.7l-61.4 35.8-17.7 66.1c-3.4 12.8-16.6 20.4-29.4 17s-20.4-16.6-17-29.4l5.2-19.3L48.1 395.6c-15.3 8.9-34.9 3.7-43.8-11.5s-3.7-34.9 11.5-43.8l25.3-14.8-21.7-5.8c-12.8-3.4-20.4-16.6-17-29.4s16.6-20.4 29.4-17l67.7 18.1L160.5 256 99.6 220.5 31.9 238.6c-12.8 3.4-26-4.2-29.4-17s4.2-26 17-29.4l21.7-5.8L15.9 171.6C.6 162.7-4.5 143.1 4.4 127.9s28.5-20.4 43.8-11.5l23.6 13.8-5.2-19.3c-3.4-12.8 4.2-26 17-29.4s26 4.2 29.4 17l17.7 66.1L192 200.3V129.9L143 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l15 15V32c0-17.7 14.3-32 32-32z" />
      </svg>
    `,
    title: 'متن نمایشی',
    classCard:
      'border border-slate-300 flex flex-col items-center gap-y-3 py-7 hover:border-Primary transition-colors',
    classText: 'text-white text-lg font-bold',
  },
  {
    id: 2,
    icon: `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="fill-Primary w-8"
      >
        <path d="M32 32c17.7 0 32 14.3 32 32V400c0 8.8 7.2 16 16 16H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64C0 46.3 14.3 32 32 32zM160 224c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm128-64V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32zm64 32c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32zM480 96V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.7 14.3-32 32-32s32 14.3 32 32z" />
      </svg>
   `,
    title: 'نمودار کیفی',
    classCard:
      'border border-slate-300 flex flex-col items-center gap-y-3 py-7 hover:border-Primary transition-colors',
    classText: 'text-white text-lg font-bold',
  },
  {
    id: 3,
    icon: `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="fill-Primary w-8"
      >
        <path d="M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 248H128V192H48V248zM48 296V360H128V296H48zM176 296V360H272V296H176zM320 296V360H400V296H320zM400 192H320V248H400V192zM400 408H320V464H384C392.8 464 400 456.8 400 448V408zM272 408H176V464H272V408zM128 408H48V448C48 456.8 55.16 464 64 464H128V408zM272 192H176V248H272V192z" />
      </svg>

    `,
    title: 'نمونه کارها',
    classCard:
      'border border-slate-300 flex flex-col items-center gap-y-3 py-7 hover:border-Primary transition-colors',
    classText: 'text-white text-lg font-bold',
  },
  {
    id: 4,
    icon: `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="fill-Primary w-8"
      >
        <path d="M0 64C0 28.7 28.7 0 64 0H352c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM160 352c0-17.7 14.3-32 32-32V304c0-44.2 35.8-80 80-80H416c17.7 0 32-14.3 32-32V160 69.5c37.3 13.2 64 48.7 64 90.5v32c0 53-43 96-96 96H272c-8.8 0-16 7.2-16 16v16c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V352z" />
      </svg>
   `,
    title: 'عملکرد های پایانی',
    classCard:
      'border border-slate-300 flex flex-col items-center gap-y-3 py-7 hover:border-Primary transition-colors',
    classText: 'text-white text-lg font-bold',
  },
  {
    id: 5,
    icon: `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="fill-Primary w-8"
      >
        <path d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z" />
      </svg>
    `,
    title: 'اطلاعات ذخیره شده',
    classCard:
      'border border-slate-300 flex flex-col items-center gap-y-3 py-7 hover:border-Primary transition-colors',
    classText: 'text-white text-lg font-bold',
  },
];

export const aboutInfo = [
  {
    text: 'شرکت دیجیتال مارکتینگ نوآد به عنوان شرکتی پیشرو در صنعت دیجیتال مارکتینگ ایران در تلاش است تا با بهره گیری از دانش فنی روز و ارایه راهکارهای نوین بازاریابی و برندینگ، با پیشرفت کسب و کارهای داخلی نقش مهمی در شکوفایی اقتصادی ایران ایفا نماید و با تثبیت نام نوآد به عنوان تخصصی ترین برند دیجیتال مارکتینگ در ایران و گسترش نام آن در بازارهای جهانی به صادرات خدمات مبتنی بر تکنولوژی های نوین گام بردارد. نوآد پیشرفت خود در طول یک دهه فعالیت را مرهون شفافیت، انسجام و پایبندی به نتایج پیش بینی شده مشتریان خود می داند. سرمایه گذاری روی تکنولوژی های نوین، کیفیت و نوآوری، پایبندی به تعهدات، رضایتمندی و وفاداری مشتریان، نیروی انسانی متمرکز و پویا از ارزش های ذاتی نوآد می باشند. فضای دیجیتال تحول شگرف در ارتباطات و نحوه تعامل مردم با یکدیگر بوجود آورده است. ابزارها و پلتفرم های بوجود آمده در این عصر، قدرت چانه زنی و انتخاب را برای مردم افزایش داده و موجب سهولت در ارزیابی و مقایسه برندها و محصولات مختلف گردیده است. ما این تغییر نگرش در انتخاب یک برند و محصول را نوعی فرصت برای خود و مشتریانمان به حساب می آوریم. در فضای دیجیتال به راحتی می توان بازار هدف را شناسایی، نیازها، خواسته ها و علایق آنها را کشف و با استفاده از اطلاعاتی که بدست می آید به خلق و توسعه محصولات، برند و تجربیات مناسب که از ادغام تکنولوژی و خلاقیت در کنار متد بازاریابی نوین ناشی میشود، اقدام کرد. در نوآد ما آماده پذیرفتن چالش های جدید هستیم و با هر قیمت که شده به تعهدات خود پایبند می مانیم.',
    title: 'شرکت دیجیتال وب رنک',
    list: [
      '۱۰ سال تجربه ارایه خدمات تخصصی دیجیتال مارکتینگ و راهکارهای نوین بازاریابی',
      'تمرکز ما در تمامی استراتژی های اجرایی معطوف به دیجیتال برندینگ و همسو کردن استراتژی های دیجیتال مارکتینگ با دیگر فعالیت های برندینگ و بازاریابی شما می باشد.',
      'برای دریافت آخرین اخبار، گرایش ها و رویداد های دیجیتال مارکتینگ ثبت نام کنید',
    ],
    subText:
      'خدمات نوآد در جهت یکپارچه سازی تمامی فعالیت های یک کسب و کار از مرحله ورود به بازار، ساخت، گسترش و ایجاد تصویری یکپاچه از برند، دیجیتال مارکتینگ، افزایش مزیت رقابتی و سهم بازار تا مراحل پس از فروش و ایجاد وفاداری در مشتریان یک برند ارایه می گردد.',
  },
];

export const adsSliderImg = [
  {
    img: slider1,
  },
  {
    img: slider2,
  },
  {
    img: slider3,
  },
  {
    img: slider4,
  },
  {
    img: slider5,
  },
  {
    img: slider2,
  },
  {
    img: slider1,
  },
  {
    img: slider3,
  },
];

export const adsInfo = [
  {
    title: 'تبلیغ سختی است',
    sub: 'نتایج یا در نتیجه هر یک از این اهداف اشتغال حاصل می شوند',
    icon: ads,
  },
  {
    title: 'کدام یک از اینهاست',
    sub: 'کسانی که هوس سیاهان می کنند نمی بینند ، آنها مقصر هستند که خدمات خود را رها کرده اند',
    icon: whitch,
  },
  {
    title: 'یا کور شده است',
    sub: 'یا می پذیرد یا زمانی که هیچ کس از همه اجتناب نمی کند. همه دردهایی که آنها را بیشتر می کند',
    icon: blink,
  },
  {
    title: 'حقیقت مبارک',
    sub: 'آنها بدون تحمل حقیقت در زمان ستایش زندگی از هیچ چیزی پیروی نمی کنند',
    icon: truth,
  },
];

export const servicesInfo = [
  {
    id: 1,
    icon: icon1,
    title: 'لورم اپیسوم',
    subTitle:
      'برای آرامش بخشیدن و لذت بردن از مفاسد ، چه دردها و چه دردسرهایی را دریافت خواهند کرد',
    classCard:
      'flex flex-col gap-y-3 min-h-fit text-center px-8 items-center py-14 shadow-lg rounded-lg shadow-Primary/20 hover:scale-[1] hover:-translate-y-2 duration-500 transition-all',
    classText: 'font-bold text-2xl',
    classIcon: 'bg-Primary flex w-fit w-12 h-12 p-3 rounded-md',
  },
  {
    id: 2,
    icon: icon2,
    title: 'اما همانطور که مشاهده می کنید',
    subTitle:
      'آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند',
    classCard:
      'flex flex-col gap-y-3 h-fit text-center px-8 items-center py-14 shadow-lg rounded-lg shadow-Primary/20 hover:scale-[1] hover:-translate-y-2 duration-500 transition-all',
    classText: 'font-bold text-xl xl:text-2xl',
    classIcon: 'bg-Primary flex w-fit w-12 h-12 p-3 rounded-md',
  },
  {
    id: 3,
    icon: icon3,
    title: 'دردهای بزرگ',
    subTitle:
      'آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند',
    classCard:
      'flex flex-col gap-y-3 h-fit text-center px-8 items-center py-14 shadow-lg rounded-lg shadow-Primary/20 hover:scale-[1] hover:-translate-y-2 duration-500 transition-all',
    classText: 'font-bold text-2xl',
    classIcon: 'bg-Primary flex w-fit w-12 h-12 p-3 rounded-md',
  },
  {
    id: 4,
    icon: icon4,
    title: 'هیچکس دیگر',
    subTitle:
      'اما در واقع ما هم آنها را متهم می کنیم و هم با یک نفرت عادلانه شایسته چاپلوسی هستیم',
    classCard:
      'flex flex-col gap-y-3 h-fit text-center px-8 items-center py-14 shadow-lg rounded-lg shadow-Primary/20 hover:scale-[1] hover:-translate-y-2 duration-500 transition-all',
    classText: 'font-bold text-2xl',
    classIcon: 'bg-Primary flex w-fit w-12 h-12 p-3 rounded-md',
  },
  {
    id: 5,
    icon: icon5,
    title: 'لولا را پاک کنید',
    subTitle:
      'اما در واقع ما هم آنها را متهم می کنیم و هم با یک نفرت عادلانه شایسته چاپلوسی هستیم',
    classCard:
      'flex flex-col gap-y-3 h-fit text-center px-8 items-center py-14 shadow-lg rounded-lg shadow-Primary/20 hover:scale-[1] hover:-translate-y-2 duration-500 transition-all',
    classText: 'font-bold text-2xl',
    classIcon: 'bg-Primary flex w-fit w-12 h-12 p-3 rounded-md',
  },
  {
    id: 6,
    icon: icon6,
    title: 'دیوا دان',
    subTitle:
      'روشها یا تلاشهای ما علاوه بر این ، خطا فرار می کند ، بگذار کوچکتر عاقل باشد',
    classCard:
      'flex flex-col gap-y-3 h-fit text-center px-8 items-center py-14 shadow-lg rounded-lg shadow-Primary/20 hover:scale-[1] hover:-translate-y-2 duration-500 transition-all',
    classText: 'font-bold text-2xl',
    classIcon: 'bg-Primary flex w-fit w-12 h-12 p-3 rounded-md',
  },
];

export const portfolioInfo = [
  {
    img: 'images/Portfolio/portfolio-1.jpg',
    titleBox: 'اینترنت 3',
    subtitle: 'اینترنت',
    category: 'Internet',
    id: 1,
  },
  {
    img: 'images/Portfolio/portfolio-2.jpg',
    titleBox: 'محصول 1',
    subtitle: 'محصول',
    category: 'Product',
    id: 2,
  },
  {
    img: 'images/Portfolio/portfolio-3.jpg',
    titleBox: 'محصول 3',
    subtitle: 'محصول',
    category: 'Product',
    id: 3,
  },
  {
    img: 'images/Portfolio/portfolio-4.jpg',
    titleBox: 'اینترنت 2',
    subtitle: 'اینترنت',
    category: 'Internet',
    id: 4,
  },
  {
    img: 'images/Portfolio/portfolio-5.jpg',
    titleBox: 'برنامه 3',
    subtitle: 'برنامه',
    category: 'Program',
    id: 5,
  },
  {
    img: 'images/Portfolio/portfolio-6.jpg',
    titleBox: 'برنامه 1',
    subtitle: 'برنامه',
    category: 'Program',
    id: 6,
  },
];

export const fittetstCardInfo = [
  {
    id: 1,
    title: 65,
    subTitle: 'مشتریان خوشحال خوشحالیم که از معمار چیزی دریافت کنیم.',
    icon: iconPor1,
  },
  {
    id: 2,
    title: 85,
    subTitle:
      'پروژه ها برای بدست آوردن و زمانی که او کل کسانی را که از او تعریف می کنند رد می کند و آنها را حقیر می شمارد',
    icon: iconPor2,
  },
  {
    id: 3,
    title: 35,
    subTitle: 'سال ها تجربه یا اجازه دهید به دنبال نوعی مزیت باشد',
    icon: iconPor3,
  },
  {
    id: 4,
    title: 20,
    subTitle:
      'جوایز درد دردناک تر است در زمانی دیگر که هیچکس او را متهم نمی کند و هیچ وقت او را متهم نمی کند',
    icon: iconPor4,
  },
];

export const FeedbackInfo = [
  {
    id: 1,
    itemId: 'item1',
    name: 'فواد ابراهیمی',
    silence: 'مالک وب رنک',
    src: './images/feedback/img4.jpg',
    discribtion:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
  },
  {
    id: 2,
    itemId: 'item2',
    name: 'امیرمحمد جعفری',
    silence: 'مدیرعامل اسنپ',
    src: './images/feedback/img2.jpg',
    discribtion:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
  },
  {
    id: 3,
    itemId: 'item3',
    name: 'امیرعباس ابارقی',
    silence: 'مدیر شرکت بنز',
    src: './images/feedback/img3.jpg',
    discribtion:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
  },
  {
    id: 4,
    itemId: 'item4',
    name: 'حسام احمدی',
    silence: 'مدیر شرکت ایفون',
    src: './images/feedback/img1.jpg',
    discribtion:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
  },
];
