import React from 'react';
import {Helmet} from "react-helmet";
import logo from './react.svg';
import './Home.css';

class Home extends React.Component {
  componentDidMount () {
    const script = document.createElement("script");

    script.innerHTML = `
      if (annyang) {
        // Let's define a command.
        var commands = {
          'hello': function() { alert('Hello world!'); }
        };
      
        // Add our commands to annyang
        annyang.addCommands(commands);
      
        // Start listening.
        annyang.start();
      }
    `;

    document.body.appendChild(script);
  }
  
  render() {

    

    return (
      <>
        <div className="Home">
          <div className="Home-header">
            <img src={logo} className="Home-logo" alt="logo" />
            <h2>Welcome to Razzle</h2>
          </div>
          <p className="Home-intro">
            To get started, edit <code>src/App.js</code> or{' '}
            <code>src/Home.js</code> and save to reload.
          </p>
          <ul className="Home-resources">
            <li>
              <a href="https://github.com/jaredpalmer/razzle">Docs</a>
            </li>
            <li>
              <a href="https://github.com/jaredpalmer/razzle/issues">Issues</a>
            </li>
            <li>
              <a href="https://palmer.chat">Community Slack</a>
            </li>
          </ul>
        </div>
        <Helmet>
          <script src="//cdnjs.cloudflare.com/ajax/libs/annyang/2.6.1/annyang.min.js" type="text/javascript" />
        </Helmet>
      </>
    );
  }
}

export default Home;
