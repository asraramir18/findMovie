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
            sx={{
              maxHeight: { xs: 150, md: 300 },
              maxWidth: { xs: 150, md: 300 },
              // height: { xs: 150, md: 300 },
              // width: { xs: 150, md: 300 },
              mr: 2,
              backgroundSize: 'cover' 
            }}
            alt="poster"
            src={Poster}
            onClick={handleOpen}
          />
          <Box>
              <Typography fontSize='0.9rem'>{Title}</Typography>
              <Typography fontSize='0.9rem'>Year: {Year}</Typography>
          </Box>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
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