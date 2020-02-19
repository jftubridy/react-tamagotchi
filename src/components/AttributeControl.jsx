import React from 'react';

class AttributeControl extends React.Component {
 
  constructor(props) {
    super(props);

    this.state = {

      hunger: 100,
      sleep: 100,
      happiness: 100
    };
    this.handleHungerClick = this.handleHungerClick.bind(this);
    this.handleSleepClick = this.handleSleepClick.bind(this);
    this.handleHappinessClick = this.handleHappinessClick.bind(this);
  }

  handleHungerClick() {
    this.setState ({
      hunger: this.state.hunger + 5,
      sleep: this.state.sleep - 2,
      happiness: this.state.happiness-2
    });
  }

  handleSleepClick() {
    this.setState ({
      hunger: this.state.hunger - 2,
      sleep: this.state.sleep + 5,
      happiness: this.state.happiness-2
    });
  }

  handleHappinessClick() {
    this.setState ({
      hunger: this.state.hunger - 2,
      sleep: this.state.sleep - 2,
      happiness: this.state.happiness + 5
    });
  }

  componentDidMount() {
    this.attributeTimer = setInterval(() =>
      this.handleAttributeTimer(),
    2000
    );
  }

    
  handleAttributeTimer() {

    this.setState({
      hunger: this.state.hunger -2,
      sleep: this.state.sleep - 2,
      happiness: this.state.happiness-2
    });
  }

  render() {
    return(
      <div>
        <p>Hunger: {this.state.hunger}</p> <button onClick = {this.handleHungerClick}>Feed</button>
        <p>Sleep: {this.state.sleep}</p> <button onClick = {this.handleSleepClick}>Nap</button>
        <p>Happiness: {this.state.happiness}</p> <button onClick = {this.handleHappinessClick}>Play</button>
      </div>
    );
  }
}
export default AttributeControl;