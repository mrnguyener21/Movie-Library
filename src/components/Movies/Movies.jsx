/* eslint-disable no-return-assign */
/* eslint-disable no-console */
/* eslint-disable no-constant-condition */
/* eslint-disable react/button-has-type */
/* eslint-disable prefer-const */
import React from 'react';
import { useSelector } from 'react-redux';
import MoviesHome from './MoviesHome/MoviesHome';
// import MoviesCategory from './.MoviesInfo/MoviesCategory/MoviesCategory';
// import MoviesGenre from './MoviesGenre/MoviesGenre';
import { MoviesCategory, MoviesGenre } from '../index';

// const dispatch = useDispatch();

const Movies = () => {
  const { category } = useSelector((state) => state.movieGenre);
  const { genreId } = useSelector((state) => state.movieGenre);
  const test = useSelector((state) => state.movieGenre);
  return (
    <>

      {(() => {
        if (genreId > 0) {
          return (
            <MoviesGenre />
          );
        } if (category === 'popular' || category === 'upcoming' || category === 'top_rated' || category === 'now_playing') {
          return (
            <MoviesCategory />
          );
        }
        if (genreId === 0) {
          return (
            <MoviesHome />
          );
        }
      })()}

    </>
  );
};

export default Movies;
