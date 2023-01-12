import { FC } from 'react';
import { Link } from 'react-router-dom';
interface MovieCardProps {
  backdrop_path: string;
  poster_path: string;
  overview: string;
  title: string;
  id: number;
}

const MovieCard: FC<MovieCardProps> = (props) => {
  const { poster_path, overview, title, id, backdrop_path } = props;
  return (
    <div
      className="max-w-sm w-auto bg-white mx-auto rounded-xl border border-gray-200 shadow-md dark:bg-gray-700 dark:border-gray-800 hover:-translate-y-4 
    duration-200 hover:animate-pulse cursor-pointer
    "
    >
      <img
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt={title}
        className="rounded-t-xl h-96 w-full object-cover object-center"
      />
      <div className="p-5">
        <h5 className="font-bold text-2xl mb-2">{title}</h5>
        {overview && (
          <p className="mb-2 text-base  tracking-light text-gray-800 dark:text-white">
            {overview?.slice(0, 300)}...
          </p>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
