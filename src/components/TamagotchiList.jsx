import React from 'react';
import Tamagotchi from './Tamagotchi';
import PropTypes from 'prop-types';

function TamagotchiList(props){
//   console.log(props.tamagotchiList);
  return(
    <div>
      <hr/>
      {props.tamagotchiList.map((tamagotchi) =>
        <Tamagotchi name={tamagotchi.name}
          health ={tamagotchi.health}
          sleep = {tamagotchi.sleep}
          happiness = {tamagotchi.happiness}
          formattedWaitTime = {tamagotchi.formattedWaitTime} 
          key={tamagotchi.id}/>
      )}
    </div>
  );
}

TamagotchiList.propTypes = {
  tamagotchiList: PropTypes.array
};

export default TamagotchiList;