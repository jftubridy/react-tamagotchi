import React from 'react';
import Header from './Header';
import TamagotchiList from './TamagotchiList';
import NewTamagotchiControl from './NewTamagotchiControl';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import Moment from 'moment';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTamagotchi: []
    };
    this.handleAddingNewTamagotchi = this.handleAddingNewTamagotchi.bind(this);
  }

  componentDidMount() {
    // console.log('componentDidMount');
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTamagotchiWaitTime(),
    5000
    );
  }

  componentWillUnmount() {
    // console.log('componentWillUnmount');
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateTamagotchiWaitTime() {
    let newMasterTamagotchi = this.state.masterTamagotchi.slice();
    newMasterTamagotchi.forEach((tamagotchi) =>
      tamagotchi.formattedWaitTime = (tamagotchi.timeOpen).fromNow(true)
    );
    this.setState({masterTamagotchi: newMasterTamagotchi});
  }

  handleAddingNewTamagotchi(newTamagotchi) {
    var newMasterTamagotchi = this.state.masterTamagotchi.slice();
    newTamagotchi.formattedWaitTime = (newTamagotchi.timeOpen).fromNow(true);
    newMasterTamagotchi.push(newTamagotchi);
    this.setState({masterTamagotchi: newMasterTamagotchi});
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' render={() =><TamagotchiList tamagotchiList={this.state.masterTamagotchi} /> } />
          <Route path='/newtamagotchi' render={()=><NewTamagotchiControl onNewTamagotchiCreation={this.handleAddingNewTamagotchi} /> } />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;