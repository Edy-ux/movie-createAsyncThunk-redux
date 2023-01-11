import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getMovies = createAsyncThunk(
  'movies/getMovies',
  async (data, thunkApi) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_MOVIE_KEY}`
      );
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

interface MovieState {
  loading: boolean;
  error: null | string;
  data: null | { results: any[] };
  movieDetails?: null | any;
}

const data = () => getMovies();

const initialState: MovieState = {
  loading: false,
  error: null,
  data: null,
  // movieDetails: null,
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,

  reducers: {},
  extraReducers(builder) {
    builder.addCase(getMovies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getMovies.fulfilled,
      (state, action: PayloadAction<{ results: any[] }>) => {}
    );
  },
});

// export const {   } = movieSlice.actions;
export default movieSlice.reducer;
