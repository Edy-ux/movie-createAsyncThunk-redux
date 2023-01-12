import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import.meta.env;
export const getMovies = createAsyncThunk(
  'movies/getMovies',
  async (data, thunkApi) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=a4975dccf513ab10f61d9cda6effa42d`
      );
      return await response.json();
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

interface MovieState {
  loading: boolean;
  error: null | string;
  data: null | { results: any[] };
  movieDetails: null | any;
}

export const  data = () => getMovies();

const initialState: MovieState = {
  loading: false,
  error: null,
  data: null,
  movieDetails: null,
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,

  reducers: {
    getMovie(state) {
      return state;
    },
  },
  extraReducers(builder) {
    builder.addCase(getMovies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getMovies.fulfilled,
      (state, action: PayloadAction<{ results: any[] }>) => {
        state.loading = false;
        state.data = action.payload;
      }
    );
    builder.addCase(getMovies.rejected, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { getMovie } = movieSlice.actions;
export default movieSlice.reducer;
