import { useState, useEffect } from 'react';

import reactLogo from './assets/react.svg';
import './App.css';
import Header from './components/Header';

//redux
import { getMovies } from './features/movies/movieSlice';
import { useAppDispatch, useAppSelector } from './hooks/storeHook';
import { useDispatch } from 'react-redux';
import MovieCard from './components/MovieCard';

function App() {
  const {
    darkTheme,
    movies: { data },
  } = useAppSelector((RootState) => RootState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);
  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="dark:bg-red-600 dark:text-white min-h-screen px-4 lg:px-12 pb-20">
        <Header />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
          {data &&
            data.results.map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
