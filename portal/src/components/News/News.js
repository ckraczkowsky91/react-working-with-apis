import React, { Component } from 'react';
import NewSingle from './NewSingle';

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
    var source = this.props.source;
  };
//this lifecycle method runs after the component renders
  componentDidMount() {
    const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&language=en&apiKey=7fde5885bacf4faf8c549013b63f4c80`;
    console.log(url);
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
      <NewSingle key={item.url} item={item} />
      )}
    );
  };
  render(){
    return(
      <div className='row'>
        {this.renderItems()}
      </div>
    );
  };
};
