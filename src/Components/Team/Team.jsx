import React from 'react';
import Title from '../SectionTitles/Title';
import Teams from './Card/Teams';
import member1 from '../../../public/images/Team/team1.jpg';
import member2 from '../../../public/images/Team/team2.jpg';
import member3 from '../../../public/images/Team/team3.jpg';
import member4 from '../../../public/images/Team/team4.jpg';
export default function Team(props) {
  const Data = [
    {
      id: 1,
      name: 'فواد ابراهیمی',
      src: member1,
      silence: 'مالک',
    },
    {
      id: 2,
      name: 'حسام احمدی',
      src: member2,
      silence: 'توسعه دهنده',
    },
    {
      id: 3,
      name: 'امیرعباس ابارقی',
      src: member3,
      silence: 'مدیر ارشد',
    },
    {
      id: 4,
      name: 'امیرمحمد جعفری',
      src: member4,
      silence: 'مدیرعامل',
    },
  ];
  return (
    <div className="px-5 md:px-10 xl:px-28 2xl:px-36 space-y-20">
      <div>
        <Title {...props} />
      </div>
      <div className="flex flex-col justify-center items-center gap-10 md:flex-row flex-wrap">
        {Data.map(team => (
          <Teams {...team} key={team.id} />
        ))}
      </div>
    </div>
  );
}
