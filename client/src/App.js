import React, {Component} from 'react';
import axios from 'axios';
import Player from './Components/Players';
import {Navigation} from './Components/Navigation'

import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
players: []
    }
  }

  componentDidMount(){
    axios
    .get(`http://localhost:5000/api/footballers`)
    .then(res=>{
      // console.log(res)
      // console.table(res.data)
      this.setState({players: res.data}) //wrap curly backetsr around players since its object 
// console.log(Array.isArray(this.state.players));
    })
  }

  render(){
    return (
      <div className="App">
        <Navigation />
        <h1>Happy building <span role="img" aria-label="Smiling emoji">😃</span></h1>
        {this.state.players.map(item => <Player key={item.id} item={item} />)}
      </div>
    );
  }
  
    
}

export default App;
