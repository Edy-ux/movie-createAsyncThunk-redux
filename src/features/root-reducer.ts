import { combineReducers, applyMiddleware } from 'redux';
import darkTheme from './theme/sliceTheme';
import movies from './movies/movieSlice';

// import cartReducer  from './cart/slice'

const rootReducer = combineReducers({ darkTheme, movies });

export default rootReducer;
