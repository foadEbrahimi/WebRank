import React from 'react'
import FeedCard from './FeedCard';
export default function Feedback() {
  const data = [
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
  return (
    <div className="bg-[#297eb0] py-12 space-y-10  2xl:px-44">
      <div className="carousel w-full text-center px-4">
        {data.map(person => (
          <FeedCard {...person} key={person.id} />
        ))}
      </div>

      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs h-10 text-white font-bold w-10 ">
          1
        </a>
        <a href="#item2" className="btn btn-xs h-10 text-white font-bold w-10 ">
          2
        </a>
        <a href="#item3" className="btn btn-xs h-10 text-white font-bold w-10 ">
          3
        </a>
        <a href="#item4" className="btn btn-xs h-10 text-white font-bold w-10 ">
          4
        </a>
      </div>
    </div>
  );
}
