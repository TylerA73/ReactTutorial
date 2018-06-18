import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{

  // Constructor initializes the App Component
  constructor(props){
    super(props);

    this.state = { response: '' };
    this.getNewMsg = this.getNewMsg.bind(this);
  };

  // called when the App Component is inserted into the DOM
  componentDidMount(){
    this.getHelloMsg()
                  .then(res => this.setState({ response: res.express }))
                  .catch(err => console.log(err));
  };

  // Get message function to be called on button click
  getNewMsg(){
    this.getByeMsg()
                          .then(res => this.setState({ response: res.express}))
                          .catch(err => console.log(err));
  };

  // Retrieves the hello message from the /api/hello route
  getHelloMsg = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if(response.status !== 200)
      throw  Error(body.message);

    return body;
  };

  // Retrieves the bye message from the /api/bye route
  getByeMsg = async () => {
    const response = await fetch('/api/bye');
    const body = await response.json();

    if(response.status !== 200)
      throw Error(body.message);

    return body;
  };

  // Renders the HTML template
  render(){
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro"> {this.state.response}</p>
        <button onClick={this.getNewMsg}>Get Message</button>
      </div>
    );
  }

 }

export default App;