import React from 'react';
import './index.scss';

import MovieCard from '../MovieCard';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      favorites: [],
      // loading: true,
    };
  }

  changeButton = (id) => {
    // let { favorites } = this.state;
    // if (favorites.includes(id)) {
    //   this.setState({ favorites: favorites.filter(id !== id) });
    // } else {
    //   this.setState({ favorites: favorites.concat(id) });
    // }
  };

  componentDidMount() {
    // console.log(this.state.loading);
    fetch('https://academy-video-api.herokuapp.com/content/free-items', {
      method: 'GET',
      headers: { 'Contnent-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data });
        // this.setState( loading: false);
      });
  }

  render() {
    return (
      <div className='Main'>
        {this.state.data.length > 0 && (
          <div className='Main__movies'>
            {this.state.data.map((element) => (
              <MovieCard
                title={element.title}
                description={element.description}
                image={element.image}
                key={element.id}
                alt={element.title}
                btnText='Favorites'
                onClick={() => this.changeButton(element.id)}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Main;
