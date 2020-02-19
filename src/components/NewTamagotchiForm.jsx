import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Moment from 'moment';

function NewTamagotchiForm(props) {
  let _name = null;

  function handleNewTamagotchiFormSubmission(event) {
    event.preventDefault();
    props.onNewTamagotchiCreation({name: _name.value, health: 100, sleep: 100, happiness:100, id: v4(), timeOpen: new Moment()});
    _name.value='';
  }


  return(
    <div>
      <form onSubmit= {handleNewTamagotchiFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Tamagotchi Name'
          ref={(input) => {_name = input;}} />
        <button type='submit'>Create!</button>
      </form>
    </div>
  );
}

NewTamagotchiForm.propTypes = {
  onNewTamagotchiCreation: PropTypes.func
};

export default NewTamagotchiForm;