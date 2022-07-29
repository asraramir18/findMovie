import React, { useEffect } from 'react';
import {Box, Typography} from '@mui/material'; 
import Card from '../../components/card/card'
import SearchBar from '../../components/form/searchBar/searchBar'
import { useSelector, useDispatch } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from '../../components/loading/loading'
import { fetchNextPageMovie } from '../../redux/feature/home/homeSlicer'

const Home = () => {
  const [ showTopButton, setShowTopBtn ] = React.useState(false);
  const { listOfMovie, isLoading, status, page, keyword } = useSelector(
    state => ({
      error: state.home.error,
      listOfMovie: state.home.listOfMovie,
      isLoading: state.home.isLoading,
      keyword: state.home.keyword,
      page: state.home.page,
      status: state.home.status,
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
              hasMore={status === 'last'}
              loader={<Loading />}
              endMessage={
                <Typography textAlign= 'center' fontWeight='bold' sx={{ my: 2 }}>
                  This is the end of the list
                </Typography>
              }
            >
              {listOfMovie.map((data, index) => (
                <Card key={index} data={data}/>
              ))}
            </InfiniteScroll>
          }
      </Box>
    )
  }
  
export default Home
