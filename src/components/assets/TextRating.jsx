import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Stack from '@mui/material/Stack';


export const TextRating = ({ value }) => {
  const handleClick = (event) => {
    event.preventDefault();  // Prevenir qualquer alteração quando clicar
  };
  
  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
        
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginLeft: '20px' }}>
        <Rating
          name="text-feedback"
          value={value}
          onClick={handleClick}
          readOnly
          size='large'
          precision={0.5}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        
        <Box sx={{ ml: 2}}>{value} / 5 </Box>
      </div>
    </Box>
  );
}

export default function HalfRating() {
  return (
    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
  );
}