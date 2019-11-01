import React, { Component } from 'react';
import SingleSide from './SingleSide';
import axios from 'axios';

export default class SideNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidenews: []
    };
    var source = this.props.source;
  };
//this lifecycle method runs after the component renders
  componentDidMount() {
    const url = `https://newsapi.org/v2/${this.props.news.type}?sources=${this.props.news.query}&apiKey=7fde5885bacf4faf8c549013b63f4c80`;
    axios.get(url)
      .then((response) => {
        this.setState({
          sidenews: response.data.articles
        });
      })
      .catch((error) => {
        console.log('ERROR: ', error);
      })
  };

  renderItems() {
    return this.state.sidenews.map((item) => {
      return (
      <SingleSide key={item.url} item={item} />
      )}
    );
  };
  render(){
    return(
      <div>
        {this.renderItems()}
      </div>
    );
  };
};
