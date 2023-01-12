import MovieCard from '../MovieCard';
import { FC, useState } from 'react';
import { Link, Outlet } from "react-router-dom";
import Header from '../Header';
import SearchBox from '../SeachBox';
import { useAppSelector } from '../../hooks/storeHook';

interface MovieState {
  data: null | { results: any[] };
}
const Home: FC<MovieState> = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = data?.results.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm)
  );
  return (
    <div className="dark:bg-red-900 dark:text-white min-h-screen px-4 lg:px-12 pb-20 ">
      <Header />
      <div className="mb-5 flex items-center justify-between">
        <SearchBox setSearchTerm={setSearchTerm} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {searchMovies?.length ? (
          searchMovies?.map((movie) => <MovieCard key={movie.id} {...movie} />)
        ) : (
          <h4>Nenhum filme encontrado</h4>

        )}
      </div>
    </div>
  
  );
};

export default Home;
