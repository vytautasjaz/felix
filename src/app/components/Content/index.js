import React from 'react';
import './index.scss';
import MovieCard from '../MovieCard';
import Loading from '../../../images/loading.gif';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      favorites: [],
      isLoading: false,
    };
  }

  changeButton = (id) => {
    let { favorites } = this.state;
    if (favorites.includes(id)) {
      this.setState({ favorites: favorites.filter((el) => el !== id) });
    } else {
      this.setState({ favorites: favorites.concat(id) });
    }
  };

  // SU THEN

  // componentDidMount() {
  //   this.setState({isLoading: true})
  //   fetch('https://academy-video-api.herokuapp.com/content/items', {
  //     method: 'GET',
  //     headers: {
  //       'Contnent-Type': 'application/json',
  //       authorization: window.localStorage.getItem('token'),
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       this.setState({ data });
  //     });
  // }

  // SU ASYNC / AWAIT

  async componentDidMount() {
    this.setState({ isLoading: true });
    const response = await fetch(
      'https://academy-video-api.herokuapp.com/content/items',
      {
        method: 'GET',
        headers: {
          'Contnent-Type': 'application/json',
          authorization: window.localStorage.getItem('token'),
        },
      }
    );
    if (response.ok) {
      const json = await response.json();
      this.setState({ data: json });
    }
  }

  render() {
    if (this.state.loading) {
      return (
        <div className='Main'>
          <img src={Loading} alt='Loading'></img>
        </div>
      );
    } else {
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
                btnText={
                  this.state.favorites.includes(element.id)
                    ? 'Remove'
                    : 'Favorite'
                }
                isFavorite={this.state.favorites.includes(element.id)}
                onClick={() => this.changeButton(element.id)}
              />
              ))}
            </div>
          )}
        </div>
      );
    }
  }
}

export default Content;
