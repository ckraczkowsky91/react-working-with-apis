import React, { Component } from 'react';

export default class MediumFeed extends Component {

  componentDidMount() {
    var url = 'https://cors-anywhere.herokuapp.com/http://medium.com/feed/@ckraczkowsky?format=json';

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log('Error: ', error)
      })
  };

  render(){
    return(
      <p>Hello from MediumFeed!</p>
    );
  };
;}
