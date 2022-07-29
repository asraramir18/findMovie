import { createSlice, createAsyncThunk, compose } from '@reduxjs/toolkit'
import axios from 'axios'
import { getList } from '../../../services/movie/index'

const initialState = { 
    listOfMovie: [],
    keyword: '',
    page: 1,
    isLoading: false,
    status: '',
    lastPage: false,
    totalResults: 0,
		idSelected: '',
}


export const fetchMovie = createAsyncThunk(
  'home/fetchMovie',
  async (searchKeyword) => {
    console.log('FETCH MOVIE fetchMovie: ', searchKeyword)
        const queryObject = {
            s: searchKeyword,
            page: 1
        }
        const queryString = new URLSearchParams(queryObject).toString();
        console.log('Query String : ', queryString )
        const response = await getList(queryString)
        console.log('RESPONSE : ', response.data)
        if(response.data.Error) throw response.data.Error
        const data = {...response.data, searchKeyword}
        return data;
  }
)

export const fetchNextPageMovie = createAsyncThunk(
    'home/fetchNextPageMovie',
    async (keyPage) => {
      console.log('FETCH MOVIE fetchNextPageMovie: ', keyPage)
          const queryObject = {
              s: keyPage.keyword,
              page: keyPage.page
          }
          const queryString = new URLSearchParams(queryObject).toString();
          console.log('Query String : ', queryString )
          const response = await getList(queryString)
          console.log('RESPONSE : ', response)
          if(response.data.Error) throw response.data.Error
          const data = {...response.data, ...keyPage}
          return data;
    }
  )

const homeSlicer = createSlice({
  name: 'home',
  initialState,
  reducers: {
    selectMovie(state, action) {
			state.idSelected = action.payload
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchMovie.fulfilled, (state, action) => {
      console.log('KEYPAGE CHECK : ', action.payload)
      action.payload.Search.map((data) => {
        state.listOfMovie.push(data)
      })
      state.keyword = action.payload.searchKeyword
      state.isLoading = false
      state.status = 'found'
	  state.totalResults = action.payload.totalResults
    })
    builder.addCase(fetchMovie.pending, (state) => {
        state.listOfMovie = []
        state.isLoading = true
        state.status = 'pending'
    })
    builder.addCase(fetchMovie.rejected, (state, action) => {
        // Add user to the state array
        state.status = 'notFound'
        state.isLoading = false
    })

    builder.addCase(fetchNextPageMovie.fulfilled, (state, action) => {
	console.log('KEYPAGE CHECK : ', action.payload)
		action.payload.Search.map((data) => {
			state.listOfMovie.push(data)
		})
	state.page = action.payload.page
		state.keyword = action.payload.keyword
		state.isLoading = false
		state.status = 'found'
		state.totalResults = action.payload.totalResults
	})
	builder.addCase(fetchNextPageMovie.pending, (state) => {
			state.isLoading = true
			state.status = 'pending'
	})
	builder.addCase(fetchNextPageMovie.rejected, (state, action) => {
		// Add user to the state array
		// state.status = 'last'
		state.isLoading = false
	})
  },
})

export const { selectMovie, decrement } = homeSlicer.actions
export default homeSlicer.reducer


