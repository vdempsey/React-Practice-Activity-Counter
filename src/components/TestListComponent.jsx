import React from 'react';
import TestListItemComponent from './TestListItemComponent';

let masterTestList = [
  {
    property: 'FPO some text goes here for item 1',
  },
  {
    property: 'FPO some text goes here for item 2',
  },
  {
    property: 'FPO some text goes here for item 3',
  }
];


function TestListComponent(){
  return (
    <div>
      <hr/>
      {masterTestList.map((item, index) =>
        <TestListItemComponent property={item.property}
          key={index}/>
      )}
    </div>
  );
}

export default TestListComponent;
