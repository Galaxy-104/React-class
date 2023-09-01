import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import PhotoGallery from './PhotoGallery'

class App extends Component {
  render(){
    return (
      <div className="App">
       <PhotoGallery/>
      </div>
    )
  }
}

export default App;