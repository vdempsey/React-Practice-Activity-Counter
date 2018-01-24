import React from 'react';
import TestListComponent from './TestListComponent';
import TestHeaderComponent from './TestHeaderComponent';
import SkiDayCount from './SkiDayCount';
import '../stylesheets/ui.scss';

function App(){
  return (
    <div>
      <SkiDayCount total={50}
                   powder={20}
                   backcountry={10}
                   goal={100}/>
    </div>
  );
}

export default App;
