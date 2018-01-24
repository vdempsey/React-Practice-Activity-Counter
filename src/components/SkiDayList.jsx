import React from 'react';
import SkiDayRow from './SkiDayRow';
import PropTypes from 'prop-types';

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

SkiDayList.propTypes = {
  days: function(props) {
    if(!Array.isArray(props.days)) {
      return new Error('SkiDayList must be an array');
    } else if(!props.days.lenght) {
      return new Error ('SkiDayList must have at least one record');
    } else {
      return null;
    }
  }
};

export default SkiDayList;
