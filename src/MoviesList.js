/* eslint react/no-did-mount-set-state: 0 */

import React, { Component } from 'react';
import styled from 'styled-components';
import Movie from './Movie';

// const movies = [
//   {
// id: "faeedf8a-bf7d-11e5-a0f9-02fada0dd3b9",
// title: "Spider Man",
// box_limit: 7,
// is_default: false,
// recently_added: false,
// hidden: false
// },
// {
// id: "529ea59e-bf7e-11e5-840e-02fada0dd3b9",
// title: "Star Wars",
// box_limit: 6,
// is_default: false,
// recently_added: false,
// hidden: false
// },
// {
// id: "fec10d0e-bf7d-11e5-90a9-02fada0dd3b9",
// title: "The Matrix",
// box_limit: 2,
// is_default: false,
// recently_added: false,
// hidden: false
// },
// ]

class MoviesList extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    try {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=35044450437baf26ae2f7f8dd6c7b572&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const movies = await res.json();
      this.setState({
        movies: movies.results,
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <MovieGrid>
        {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </MovieGrid>
    );
  }
}

export default MoviesList;

const MovieGrid = styled.div`
    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(6, 1fr);
    grid-row-gap: 1rem;
`;
