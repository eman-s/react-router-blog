import React, { Component } from 'react';
import '../App.css';

export default class Splash extends Component {
  render() {
    let hotLineSplash = {
      'backgroundImage': 'url(https://images2.alphacoders.com/678/thumb-1920-678618.jpg)',
      'backgroundSize': 'cover',
      'padding' : '10rem'
    }
    let title = {
      'margin' : '0',
      "text-align":'center',
      'font-family': 'PressStart2PRegular',
      'font-weight': 'normal',
      'font-style': 'normal',
      'font-size' : '2rem',
    }
    return (
      <div style={hotLineSplash} className="Splash">
        <div style={title} className='splashTitle'>
          <h1 className='flash'>HOTLINE</h1>
        </div>
      </div>
    );
  }
}
