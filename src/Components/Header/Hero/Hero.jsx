import Card from './Cards/Card';

const InfoCards = [
  {
    id: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="fill-Primary w-8"
      >
        <path d="M224 0c17.7 0 32 14.3 32 32V62.1l15-15c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-49 49v70.3l61.4-35.8 17.7-66.1c3.4-12.8 16.6-20.4 29.4-17s20.4 16.6 17 29.4l-5.2 19.3 23.6-13.8c15.3-8.9 34.9-3.7 43.8 11.5s3.7 34.9-11.5 43.8l-25.3 14.8 21.7 5.8c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17l-67.7-18.1L287.5 256l60.9 35.5 67.7-18.1c12.8-3.4 26 4.2 29.4 17s-4.2 26-17 29.4l-21.7 5.8 25.3 14.8c15.3 8.9 20.4 28.5 11.5 43.8s-28.5 20.4-43.8 11.5l-23.6-13.8 5.2 19.3c3.4 12.8-4.2 26-17 29.4s-26-4.2-29.4-17l-17.7-66.1L256 311.7v70.3l49 49c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-15-15V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V449.9l-15 15c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l49-49V311.7l-61.4 35.8-17.7 66.1c-3.4 12.8-16.6 20.4-29.4 17s-20.4-16.6-17-29.4l5.2-19.3L48.1 395.6c-15.3 8.9-34.9 3.7-43.8-11.5s-3.7-34.9 11.5-43.8l25.3-14.8-21.7-5.8c-12.8-3.4-20.4-16.6-17-29.4s16.6-20.4 29.4-17l67.7 18.1L160.5 256 99.6 220.5 31.9 238.6c-12.8 3.4-26-4.2-29.4-17s4.2-26 17-29.4l21.7-5.8L15.9 171.6C.6 162.7-4.5 143.1 4.4 127.9s28.5-20.4 43.8-11.5l23.6 13.8-5.2-19.3c-3.4-12.8 4.2-26 17-29.4s26 4.2 29.4 17l17.7 66.1L192 200.3V129.9L143 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l15 15V32c0-17.7 14.3-32 32-32z" />
      </svg>
    ),
    title: 'متن نمایشی',
    classCard:
      'border border-slate-300 flex flex-col items-center gap-y-3 py-7 hover:border-Primary transition-colors',
    classText: 'text-white text-lg font-bold',
  },
  {
    id: 2,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="fill-Primary w-8"
      >
        <path d="M32 32c17.7 0 32 14.3 32 32V400c0 8.8 7.2 16 16 16H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64C0 46.3 14.3 32 32 32zM160 224c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm128-64V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32zm64 32c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32zM480 96V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.7 14.3-32 32-32s32 14.3 32 32z" />
      </svg>
    ),
    title: 'نمودار کیفی',
    classCard:
      'border border-slate-300 flex flex-col items-center gap-y-3 py-7 hover:border-Primary transition-colors',
    classText: 'text-white text-lg font-bold',
  },
  {
    id: 3,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="fill-Primary w-8"
      >
        <path d="M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 248H128V192H48V248zM48 296V360H128V296H48zM176 296V360H272V296H176zM320 296V360H400V296H320zM400 192H320V248H400V192zM400 408H320V464H384C392.8 464 400 456.8 400 448V408zM272 408H176V464H272V408zM128 408H48V448C48 456.8 55.16 464 64 464H128V408zM272 192H176V248H272V192z" />
      </svg>
    ),
    title: 'نمونه کارها',
    classCard:
      'border border-slate-300 flex flex-col items-center gap-y-3 py-7 hover:border-Primary transition-colors',
    classText: 'text-white text-lg font-bold',
  },
  {
    id: 4,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="fill-Primary w-8"
      >
        <path d="M0 64C0 28.7 28.7 0 64 0H352c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM160 352c0-17.7 14.3-32 32-32V304c0-44.2 35.8-80 80-80H416c17.7 0 32-14.3 32-32V160 69.5c37.3 13.2 64 48.7 64 90.5v32c0 53-43 96-96 96H272c-8.8 0-16 7.2-16 16v16c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V352z" />
      </svg>
    ),
    title: 'عملکرد های پایانی',
    classCard:
      'border border-slate-300 flex flex-col items-center gap-y-3 py-7 hover:border-Primary transition-colors',
    classText: 'text-white text-lg font-bold',
  },
  {
    id: 5,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="fill-Primary w-8"
      >
        <path d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z" />
      </svg>
    ),
    title: 'اطلاعات ذخیره شده',
    classCard:
      'border border-slate-300 flex flex-col items-center gap-y-3 py-7 hover:border-Primary transition-colors',
    classText: 'text-white text-lg font-bold',
  },
];

export default function Hero() {
  return (
    <div className="space-y-5 md:space-y-10 xl:space-y-16">
      <div className="HeroContent space-y-3 lg:space-y-5 px-5">
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl text-center font-bold">
          راه حل های قدرتمند دیجیتال با
          <span className="text-Primary font-bold"> WebRank</span>
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-white text-center font-bold">
          ما تیمی از بازاریابان با استعداد دیجیتال هستیم
        </p>
      </div>
      <div className="HeroCards select-none px-5 md:px-12 lg:px-32 xl:px-40 2xl:px-48 flex flex-wrap flex-col md:grid md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-5">
        {InfoCards.map(card => (
          <Card {...card} key={card.id} />
        ))}
      </div>
    </div>
  );
}
