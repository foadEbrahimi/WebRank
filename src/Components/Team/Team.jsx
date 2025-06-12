import React from 'react';

import Title from '../SectionTitles/Title';
import Teams from './Card/Teams';

import { TeamInfo } from '../../constants/index';

export default function Team(props) {
  return (
    <div className="px-5 md:px-10 xl:px-28 2xl:px-36 space-y-20">
      <div>
        <Title {...props} />
      </div>
      <div className="flex flex-col justify-center items-center gap-10 md:flex-row flex-wrap">
        {TeamInfo.map(team => (
          <Teams {...team} key={team.id} />
        ))}
      </div>
    </div>
  );
}
