import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import BotWidget from "./Components/BotWidget";
import TestComponent1 from "./Components/TestComponent1";
import TestComponent2 from './Components/TestComponent2';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link to="/" className="navbar-brand">Test App</Link>
              <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                    <Link to="/page1" className="nav-link">Page1</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/page2" className="nav-link">Page2</Link>
                  </li>
                </ul>
              </div>
            </nav>
            <br/>
            <Route path="/page1" component={TestComponent1} />
            <Route path="/page2" component={TestComponent2} />
          </div>
        </Router>
    
        <BotWidget
          title="BotWidget"
          subtitle="Virtual Assistant"
          senderPlaceHolder="Enter message..."
          timeout="2000"
          welcomeMessage="Welcome to chat widget"
          messagesUrl="http://localhost:4000/api/messages/"
          buttonsUrl="http://localhost:4000/api/quickButtons/"
        />
      </div> 
    );
  }
}

export default App;
