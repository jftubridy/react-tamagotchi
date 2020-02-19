import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestion(props){
  return (
    <div>
      <p>Do you want to make a new Tamagotchi?  Its a futile endevor as they all eventually die.</p>
      <button onClick={props.onConfirmation}>Yes</button>
    </div>
  );
}

ConfirmationQuestion.propTypes = {
  onConfirmation: PropTypes.func
};

export default ConfirmationQuestion;