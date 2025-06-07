import Slider from './Slider/Slider';
import Ads from './Ads/Ads';
import Title from '../SectionTitles/Title';

import { aboutInfo } from '../../constants';

export default function About() {
  const { text, list, subText } = aboutInfo.at(0);

  return (
    <div className="space-y-6 px-5 md:px-10 py-5 xl:px-28 2xl:px-36">
      <Title subTitle={'درباره ما'} Title={'ما را بیشتر بشناسید'} />
      <div className="AboutSection mt-16 space-y-7 lg:flex lg:items-start lg:space-y-0 lg:gap-10">
        <img
          src="./images/about.jpg"
          alt="About Img"
          className="md:max-w-2xl rounded-xl lg:max-w-md xl:max-w-xl 2xl:max-w-lg text-center order-2"
        />
        <div className="AboutContent space-y-4">
          <p className="text-justify text-md">{text}</p>
          <ul className="ps-6">
            {list.map((list, index) => (
              <li className="list-image-click text-md" key={index}>
                {list}
              </li>
            ))}
          </ul>
          <p>{subText}</p>
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
