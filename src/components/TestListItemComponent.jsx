import React from 'react';
import PropTypes from 'prop-types';

function TestListItemComponent(props){
  return (
    <div>
      <h3>{props.property}</h3>
    </div>
  );
}

TestListItemComponent.propTypes = {
  property: PropTypes.string.isRequired
};

export default TestListItemComponent;
