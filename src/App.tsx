import { useState, useEffect } from 'react';

import reactLogo from './assets/react.svg';
import './App.css';
import Header from './components/Header';

//redux
import { getMovies, data } from './features/movies/movieSlice';
import { useAppDispatch, useAppSelector } from './hooks/storeHook';

import Home from './components/Home';

function App() {
  const {
    darkTheme,
    movies: {data}
  } = useAppSelector((state) => state);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);
  return (
    <div className={darkTheme ? 'dark' : ''}>
      <Home data={data}/>
    </div>
  );
}

export default App;
