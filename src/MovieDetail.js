/* eslint react/no-did-mount-set-state: 0 */

import React, { Component } from 'react';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';
import { Poster } from './Movie';


class MovieDetail extends Component {
  state = {
    movie: {},
  };

  async componentDidMount() {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=35044450437baf26ae2f7f8dd6c7b572&language=en-US`);
      const movie = await res.json();
      this.setState({
        movie,
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { movie } = this.state;
    const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
    const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';
    return (
      <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
        <MovieInfo>
          <Overdrive id={movie.id}>
            <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
          </Overdrive>
          <div>
            <h1>{movie.title}</h1>
            <h3>{movie.release_date}</h3>
            <p>{movie.overview}</p>
          </div>
        </MovieInfo>
      </MovieWrapper>
    );
  }
}

const MovieWrapper = styled.div`
    position: relative;
    padding-top: 50vh;
    background: url(${props => props.backdrop}) no-repeat;
    background-size: cover;
`;

const MovieInfo = styled.div`
    background: white;
    text-align: left;
    padding: 2rem 10%;
    display: flex;
    > div {
        margin-left: 20px;
    }
    img { 
        position: relative;
        top: -5rem;
    }
    
`;

export default MovieDetail;
