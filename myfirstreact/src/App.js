import logo from './logo.svg';
import './App.css';

import {Component} from 'react'; //Render


class App extends Component{ //

  constructor(){
    super();
    this.state = {
      fullname: 'Rogine'
    }
  }

  render(){ //render 
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.fullname}
          </p>
        <button onClick={ ()=> {
          this.setState({fullname: 'Roniel'}); //set state update the state into different object
          console.log(this.state);
        }}>
          Change my name
        </button>
        </header>
      </div>
    );
  }
}

export default App;
