import React from 'react';
import SkiDayRow from './SkiDayRow';
import Terrain from 'react-icons/lib/md/terrain';
import SnowFlake from 'react-icons/lib/ti/weather-snow';
import Calendar from 'react-icons/lib/fa/calendar';

const SkiDayList = ({days}) => (
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Resort</th>
        <th>Powder</th>
        <th>backcountry</th>
      </tr>
    </thead>
    <tbody>
      {days.map((day, i) =>
        <SkiDayRow key={i} {...day}/>
      )}
    </tbody>
  </table>
);

export default SkiDayList;
