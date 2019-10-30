import React, { Component } from 'react';
import NewSingle from './NewSingle';

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
  };
//this lifecycle method runs after the component renders
  componentDidMount() {
    const url = 'https://newsapi.org/v2/everything?q=bitcoin&from=2019-09-30&sortBy=publishedAt&apiKey=7fde5885bacf4faf8c549013b63f4c80';
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          news: data.articles
        })
      })
      .catch((error) => {
        console.log(error);
      })
  };

  renderItems() {
    return this.state.news.map((item) => {
      return (
      <NewSingle key={item.id} item={item} />
      )}
    );
  };
  render(){
    return(
      <ul>
        {this.renderItems()}
      </ul>
    );
  };
};
