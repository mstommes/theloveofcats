import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CMS from 'netlify-cms'

class App extends Component {

  render() {
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }
    return (
      <div className="App">
        <header className="App-header"></header>
      </div>
    );
  }
}
CMS.registerPreviewTemplate('App', App)
export default App;
