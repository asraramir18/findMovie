import React, { useEffect } from 'react';
import {Box, Typography, Button} from '@mui/material'; 
import { Link } from "react-router-dom";
import Card from '../../components/card/card'
import SearchBar from '../../components/form/searchBar/searchBar'
import { useSelector, useDispatch } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from '../../components/loading/loading'
import { fetchNextPageMovie, selectMovie } from '../../redux/feature/home/homeSlicer'

const Home = () => {
  const [ showTopButton, setShowTopBtn ] = React.useState(false);
  const [ hasMore, setHasMore ] = React.useState(true);
  const { listOfMovie, isLoading, status, page, keyword, totalResults } = useSelector(
    state => ({
      listOfMovie: state.home.listOfMovie,
      isLoading: state.home.isLoading,
      keyword: state.home.keyword,
      page: state.home.page,
      status: state.home.status,
      totalResults: state.home.totalResults,
    })
  );
  const dispatch = useDispatch()

  useEffect(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            setShowTopBtn(true);
        } else {
            setShowTopBtn(false);
        }
    });
}, []);
  
  const fetchMoreData = () => {
    if (listOfMovie.length >= totalResults) {
      setHasMore(false)
      return
    }
    const keyPage = {
      keyword, 
      page: page + 1}
    dispatch(fetchNextPageMovie(keyPage));
  };

  const backToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

    return (
        <Box sx={{ backgroundColor: 'white', p: 1, minWidth: '700px', height: '100vh'}}>
          <Typography variant='h2'>Welcome to Movie Finder</Typography>
          <Box>
            <Typography sx={{ mb: 2 }}>Find your favourite movie here !</Typography>
            <SearchBar />
          </Box>
          {status === 'notFound' && 
            <Box sx={{ my: 2 }}>
              <Typography>Movie Not found !</Typography>
            </Box>
          }
          {listOfMovie.length < 1 && isLoading && <Loading />}
          {listOfMovie.length > 0 && 
            <InfiniteScroll
              dataLength={listOfMovie.length}
              next={fetchMoreData}
              hasMore={hasMore}
              loader={<Loading />}
              endMessage={
                <Typography textAlign= 'center' fontWeight='bold' sx={{ my: 2 }}>
                  This is the end of the list
                </Typography>
              }
            >
              {listOfMovie.map((data, index) => (
                <Link to={data.imdbID}>
                  <Card key={index} data={data}/>
                </Link>
              ))}
            </InfiniteScroll>
          }
      </Box>
    )
  }
  
export default Home
