import React from 'react';
import { fittetstCardInfo } from '../../../constants';

const Info = {
  title: 'شایسته ترین لذت را به هر حال ارائه می دهد',
  subTitle:
    'خود درد ممکن است درد زیادی باشد ، اما دلیل اصلی آن درد است ، اما من به آن زمان می دهم تا مانند یک درد و درد بزرگ در آن فرو برود. درد مقصر است',
};

export default function Fittest() {
  return (
    <div className="lg:flex gap-10">
      <div className="lg:w-6/12">
        <img
          src="images/Portfolio/Fittest/img.jpg"
          className="w-[31rem] rounded-2xl h-[25rem] md:w-[50rem] object-cover mx-auto lg:h-[34rem]"
          alt="Fittest Img"
        />
      </div>
      <div className="lg:w-6/12 self-center p-5 space-y-8">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold">{Info.title}</h1>
          <p className="text-lg">{Info.subTitle}</p>
        </div>
        <div className="space-y-5 md:grid md:grid-cols-2 md:items-center">
          {fittetstCardInfo.map(card => (
            <div className="flex flex-col gap-2" key={card.id}>
              <div className="flex items-center gap-3">
                <img
                  src={card.icon}
                  className="text-Primary w-10 h-10"
                  alt="icon"
                />
                <span className="text-4xl font-bold">{card.title}</span>
              </div>
              <h1 className="ps-5 md:text-right">{card.subTitle}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
