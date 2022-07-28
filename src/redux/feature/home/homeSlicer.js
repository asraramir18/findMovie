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
    value: 0
}


export const fetchMovie = createAsyncThunk(
  'home/fetchMovie',
  async (searchKeyword) => {
    console.log('FETCH MOVIE : ', searchKeyword)
        const queryObject = {
            s: searchKeyword,
            page: 1
        }
        const queryString = new URLSearchParams(queryObject).toString();
        console.log('Query String : ', queryString )
        const response = await getList(queryString)
        console.log('RESPONSE : ', response.data.Error)
        if(response.data.Error) throw response.data.Error
        const data = {...response.data, searchKeyword}
        return data;
  }
)

export const fetchNextPageMovie = createAsyncThunk(
    'home/fetchNextPageMovie',
    async (keyPage) => {
      console.log('FETCH MOVIE : ', keyPage)
          const queryObject = {
              s: keyPage.keyword,
              page: keyPage.page
          }
          const queryString = new URLSearchParams(queryObject).toString();
          console.log('Query String : ', queryString )
          const response = await getList(queryString)
          console.log('RESPONSE : ', response.data)
          if(response.data.Error) throw response.data.Error
          const data = {...response.data, ...keyPage}
          return data;
    }
  )

const homeSlicer = createSlice({
  name: 'home',
  initialState,
  reducers: {
    getListOfMovie(state, action) {
      const getListOfMovie = JSON.parse(dummyData)
      console.log('getListOfMovie : ', getListOfMovie)
      getListOfMovie.Search.map((data) => {
        state.listOfMovie.push(data)
      })
    },
    decrement(state) {
      state.value--
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
		})
		builder.addCase(fetchNextPageMovie.pending, (state) => {
				state.isLoading = true
				state.status = 'pending'
		})
		builder.addCase(fetchNextPageMovie.rejected, (state, action) => {
		    // Add user to the state array
		    state.status = 'last'
		    state.isLoading = false
		})
  },
})

export const { getListOfMovie, decrement } = homeSlicer.actions
export default homeSlicer.reducer



const dummyData =  `{
	"Search": [{
		"Title": "Batman: The Killing Joke",
		"Year": "2016",
		"imdbID": "tt4853102",
		"Type": "movie",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTdjZTliODYtNWExMi00NjQ1LWIzN2MtN2Q5NTg5NTk3NzliL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
	}, {
		"Title": "Batman: The Dark Knight Returns, Part 1",
		"Year": "2012",
		"imdbID": "tt2313197",
		"Type": "movie",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg"
	}, {
		"Title": "Batman: Mask of the Phantasm",
		"Year": "1993",
		"imdbID": "tt0106364",
		"Type": "movie",
		"Poster": "https://m.media-amazon.com/images/M/MV5BYTRiMWM3MGItNjAxZC00M2E3LThhODgtM2QwOGNmZGU4OWZhXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg"
	}, {
		"Title": "Batman v Superman: Dawn of Justice Ultimate Edition",
		"Year": "2016",
		"imdbID": "tt18689424",
		"Type": "movie",
		"Poster": "https://m.media-amazon.com/images/M/MV5BYzgyMTMzZjUtNGNjMy00NTJjLWIzNDYtMTc2YzQwOGE5MGM4XkEyXkFqcGdeQXVyMTUwODYzMjcw._V1_SX300.jpg"
	}, {
		"Title": "Batman: The Dark Knight Returns, Part 2",
		"Year": "2013",
		"imdbID": "tt2166834",
		"Type": "movie",
		"Poster": "https://m.media-amazon.com/images/M/MV5BYTEzMmE0ZDYtYWNmYi00ZWM4LWJjOTUtYTE0ZmQyYWM3ZjA0XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
	}, {
		"Title": "Batman",
		"Year": "1966",
		"imdbID": "tt0060153",
		"Type": "movie",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMmM1OGIzM2UtNThhZS00ZGNlLWI4NzEtZjlhOTNhNmYxZGQ0XkEyXkFqcGdeQXVyNTkxMzEwMzU@._V1_SX300.jpg"
	}, {
		"Title": "Batman: Year One",
		"Year": "2011",
		"imdbID": "tt1672723",
		"Type": "movie",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNTJjMmVkZjctNjNjMS00ZmI2LTlmYWEtOWNiYmQxYjY0YWVhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
	}, {
		"Title": "Batman: Assault on Arkham",
		"Year": "2014",
		"imdbID": "tt3139086",
		"Type": "movie",
		"Poster": "https://m.media-amazon.com/images/M/MV5BZDU1ZGRiY2YtYmZjMi00ZDQwLWJjMWMtNzUwNDMwYjQ4ZTVhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
	}, {
		"Title": "Batman Beyond",
		"Year": "1999–2001",
		"imdbID": "tt0147746",
		"Type": "series",
		"Poster": "https://m.media-amazon.com/images/M/MV5BZWJhNjA4YTAtODBlMS00NjIzLThhZWUtOGYxMGM3OTRmNDZmXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg"
	}, {
		"Title": "Batman: Gotham Knight",
		"Year": "2008",
		"imdbID": "tt1117563",
		"Type": "movie",
		"Poster": "https://m.media-amazon.com/images/M/MV5BM2I0YTFjOTUtMWYzNC00ZTgyLTk2NWEtMmE3N2VlYjEwN2JlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
	}],
	"totalResults": "512",
	"Response": "True"
}`