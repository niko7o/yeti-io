import React, { Component } from 'react';
import fire from './Fire'
/* Components */
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
/* Styles */
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loggedIn: null
    };
  }

  componentDidMount = () => {
    this.setState({ loading: true });
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ 
          loggedIn: true, 
          loading: false 
        });
      } else {
        this.setState({ 
          loggedIn: false, 
          loading: false 
        });
      }
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <div className="App_centered">
          {
            this.state.loggedIn 
            ? <Home />
            : <Login />
          }
        </div>
      </div>
    );
  }
}

export default App;
