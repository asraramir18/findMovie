import React, { useEffect, useMemo, useState } from 'react';
import {Button, Box, FormControl, FormHelperText, TextField} from '@mui/material'; 
import { useDispatch } from 'react-redux'
import { fetchMovie } from '../../../redux/feature/home/homeSlicer'

const SearchBar = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [isError, setError] = useState(false);
  const dispatch = useDispatch()

  const findKeyword = async (event) => {
    const trimmedKeyword = searchKeyword.trim()
    if(!trimmedKeyword || (trimmedKeyword && trimmedKeyword.length < 3)){
      console.log('is error')
      setError(true)
    } else {
      setError(false)
      dispatch(fetchMovie(trimmedKeyword))
    }
    event.preventDefault()
  }
    return (
        <Box>
            <form onSubmit={findKeyword}>
                <FormControl error={isError} sx={{ width: '50%' }}>
                    <TextField
                        error={isError}
                        id='searchID'                 
                        value={searchKeyword}
                        label='Search'
                        onInput={ e=>setSearchKeyword(e.target.value)}
                        size="small"
                    />
                    {isError && <FormHelperText id="component-error-text">Please Input Minimum 3 Letter</FormHelperText>}
                </FormControl>
                <Button
                    variant="contained"
                    type="submit"
                    sx={{ ml: 3 }}
                >
                    Find
                </Button>
            </form>
        </Box>
    )
  }
  
export default SearchBar
