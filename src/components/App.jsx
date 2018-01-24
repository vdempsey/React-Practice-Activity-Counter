import React from 'react';
import SkiDayList from './SkiDayList';
import '../stylesheets/ui.scss';

function App(){
  return (
    <div>
      <SkiDayList days={
        [
          {
            resort: 'Squaw Valley',
            date: new Date('1/2/2016'),
            powder: true,
            backcountry: false
          },
          {
            resort: 'Kirkwood',
            date: new Date('3/28/2016'),
            powder: false,
            backcountry: false
          },
          {
            resort: 'Mt. Tallac',
            date: new Date('4/2/2016'),
            powder: false,
            backcountry: true
          }
        ]
      }/>
    </div>
  );
}

export default App;
