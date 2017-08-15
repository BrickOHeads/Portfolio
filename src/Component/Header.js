import React, { Component } from 'react';
import '../Styles/Header.css';

class Header extends Component {
  constructor(props){
    super(props);
  };
  render(){
    return(
      <div className="Header">
        <style>@import url('https://fonts.googleapis.com/css?family=Bellefair|Philosopher|Tenor+Sans');</style>

        <h1>Brittany Arsi</h1>
            <h2 className="sentence">I
              <div className="pushEffect">
                <span>Am Creative at Problem Solving.</span>
                <span>Am a Front End Web Developer.</span>
                <span>Enjoy Learning Every Day.</span>
                <span>Am a Dreamer.</span>
                <span>Am A Team Player.</span>
              </div>
            </h2>
      </div>
    )
  }
}

export default Header;
