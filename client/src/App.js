import React, {Component} from 'react';

import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
players: []
    }
  }

  render(){
    return (
      <div className="App">
        <h1>Happy building <span role="img" aria-label="Smiling emoji">😃</span></h1>
      </div>
    );
  }
  
    
}

export default App;
