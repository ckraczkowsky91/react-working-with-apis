import React from 'react';
import logo from '../logo.svg';
import './App.css';
import News from './News/News';
import SideNews from './News/SideNews';
//import MediumFeed from './Other/MediumFeed'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news1: {
        type: 'everything',
        query: 'q=security&language=en'
      },
      news3: {
        type: 'everything',
        query: 'domain=comicbookmovie.com&language=en'
      }
    };
  };

  render() {
    return(
      <div className="container-fluid">
        <div className='navbar-fixed'>
          <nav>
            <div className='nav-wrapper indigo lighten-4'>
              <a href='/' className='bran-logo center'>My Feed</a>
            </div>
          </nav>
        </div>
        <div className='row'>
          <div className='col s8'>
            <News news={this.state.news1}/>
          </div>
          <div className='col s4'>
            <SideNews news={this.state.news3}/>
          </div>
        </div>
      </div>
    );
  };
}

export default App;
