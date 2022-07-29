import React, { useEffect } from 'react';
import {Box, Typography, Modal} from '@mui/material'; 
import Card from '../../components/card/card'
import SearchBar from '../../components/form/searchBar/searchBar'
import { useSelector, useDispatch } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from '../../components/loading/loading'
import { fetchDetailMovie } from '../../redux/feature/details/detailsSlicer'
import { useSearchParams,useParams } from 'react-router-dom'
import { Link } from "react-router-dom";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 1,
  };


const Details = (props) => {
    let [searchParams, setSearchParams] = useSearchParams();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { handle } = useParams()

  const { info, isLoading, id } = useSelector(
    state => ({
      info: state.details.info,
      isLoading: state.details.isLoading,
      id: state.home.idSelected,
    })
  );
  const dispatch = useDispatch()

  useEffect(() => {
    const url = window.location.href
    const myArray = url.split("/");
    const fetchData = async () => {
        const data = await dispatch(fetchDetailMovie(myArray[myArray.length -1]))
        console.log('data')
    }
    fetchData()
        // make sure to catch any error
        .catch(console.error);
}, [dispatch]);
  
    if(!info)return (
        <Box>
            <Typography data-testid="cardTitle" fontSize='0.9rem'>No Movie Details</Typography>
        </Box>
    )
    return (
        <Box sx = {{ backgroundColor: 'white', p: 3}}>
            <Link to='/'>
                {'<-- Back'}
            </Link>
            <Box  sx={{ display: 'flex', flexDirection: 'row', m: 3}}>
            <Box
                component="img"
                id='card_image'
                sx={{
                maxHeight: { xs: 150, md: 300 },
                maxWidth: { xs: 150, md: 300 },
                minHeight: { xs: 100, md: 200 },
                minWidth: { xs: 100, md: 200 },
                mr: 2,
                '&:hover': {
                    cursor: 'pointer',
                    backgroundColor: 'primary.main',
                    opacity: [0.9, 0.8, 0.7],
                },
                }}
                alt="Movie Poster"
                src={info.Poster}
                onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src="/NoImage.png";
                }}
                onClick={handleOpen}
            />
            <Box>
                <Typography data-testid="cardTitle" fontSize='0.9rem'>{info.Title}</Typography>
                <Typography data-testid="cardSubTitle" fontSize='0.9rem'>Year: {info.Year}</Typography>
                <Typography data-testid="cardSubTitle" fontSize='0.9rem'>Rated: {info.Rated}</Typography>
                <Typography data-testid="cardSubTitle" fontSize='0.9rem'>Released: {info.Released}</Typography>
                <Typography data-testid="cardSubTitle" fontSize='0.9rem'>Runtime: {info.Runtime}</Typography>
                <Typography data-testid="cardSubTitle" fontSize='0.9rem'>Genre: {info.Genre}</Typography>
                <Typography data-testid="cardSubTitle" fontSize='0.9rem'>Director: {info.Director}</Typography>
                <Typography data-testid="cardSubTitle" fontSize='0.9rem'>Writer: {info.Writer}</Typography>
                <Typography data-testid="cardSubTitle" fontSize='0.9rem'>Actors: {info.Actors}</Typography>
                <Typography data-testid="cardSubTitle" fontSize='0.9rem'>Plot: {info.Plot}</Typography>
                <Typography data-testid="cardSubTitle" fontSize='0.9rem'>Language: {info.Language}</Typography>
                <Typography data-testid="cardSubTitle" fontSize='0.9rem'>Country: {info.Country}</Typography>
                <Typography data-testid="cardSubTitle" fontSize='0.9rem'>Awards: {info.Awards}</Typography>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                <Box
                    component="img"
                    alt="poster"
                    src={info.Poster}
                />
                </Box>
            </Modal>
            </Box>
        </Box>
    )
  }
  
export default Details
