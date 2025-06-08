import React from 'react';

import Title from '../SectionTitles/Title';
import Card from '../Header/Hero/Cards/Card';
import Farakhan from './Farakhan/Farakhan';

import { servicesInfo } from '../../constants/index';

export default function Services(props) {
  return (
    <div className="space-y-12">
      <div className="px-5 md:px-10 xl:px-28 2xl:px-36 space-y-12">
        <div>
          <Title {...props} />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicesInfo.map(card => (
            <Card {...card} byImg={true} key={card.id} />
          ))}
        </div>
      </div>
      <div>
        <Farakhan />
      </div>
    </div>
  );
}
