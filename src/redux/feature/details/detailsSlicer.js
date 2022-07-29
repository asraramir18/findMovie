import { createSlice, createAsyncThunk, compose } from '@reduxjs/toolkit'
import { getDetails } from '../../../services/movie/index'

const initialStates = { 
    info: {},
    isLoading: false,
    isError: false,
    id: '',
}


export const fetchDetailMovie = createAsyncThunk(
  'details/fetchDetailedMovie',
  async (id) => {
    console.log('FETCH MOVIE fetchMovie: ', id)
        const queryObject = {
            i: id,
        }
        const queryString = new URLSearchParams(queryObject).toString();
        console.log('Query String : ', queryString )
        const response = await getDetails(queryString)
        console.log('RESPONSE : ', response.data)
        if(response.data.Error) throw response.data.Error
        const data = {...response.data, id}
        console.log('data : ', data)
        return data;
  }
)

const detailSlicer = createSlice({
  name: 'details',
  initialState: {
    info: {},
    isLoading: false,
    isError: false,
    id: '',
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchDetailMovie.fulfilled, (state, action) => {
      console.log('action.payload : ', action.payload)
      state.info = action.payload
      state.isLoading = false
      state.isError = false
      state.id = action.payload.imdbID
    })
    builder.addCase(fetchDetailMovie.pending, (state) => {
      console.log('action.pending : ')
        state.info = {}
        state.isLoading = false
        state.isError = false
    })
    builder.addCase(fetchDetailMovie.rejected, (state, action) => {
      console.log('action.rejected : ')
        state.info = {}
        state.isLoading = false
        state.isError = false
    })
  },
})

// export const { getListOfMovie, decrement } = detailSlicer.actions
export default detailSlicer.reducer


