import React from 'react';
import PropTypes from 'prop-types';
import AttributeControl from './AttributeControl';

function Tamagotchi(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <AttributeControl />
      <hr/>
    </div>
  );
}

Tamagotchi.propTypes = {
  name: PropTypes.string,
  health: PropTypes.number,
  sleep: PropTypes.number,
  happiness: PropTypes.number,
  formattedWaitTime: PropTypes.string.isRequired,
};

export default Tamagotchi;