import * as React from 'react';
import { Box, Typography, Modal} from '@mui/material';

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

const Card = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    Title, Year, Poster
  } = props.data

    return (
        <Box  sx={{ display: 'flex', flexDirection: 'row', m: 3}}>
          <Box
            component="img"
            id='card_image'
            sx={{
              backgroundColor: 'grey',
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
            src={Poster}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src="/NoImage.png";
            }}
            onClick={handleOpen}
          />
          <Box>
              <Typography data-testid="cardTitle" fontSize='0.9rem'>{Title}</Typography>
              <Typography data-testid="cardSubTitle" fontSize='0.9rem'>Year: {Year}</Typography>
          </Box>
          <Modal
            open={open}
            onClose={handleClose}
          >
            <Box sx={style}>
            <Box
                component="img"
                alt="poster"
                src={Poster}
              />
            </Box>
          </Modal>
        </Box>
    )
  }
  
export default Card