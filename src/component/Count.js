import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { React, useState } from 'react'
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom"

export default function Count() {
  const [counter, setCounter] = useState(0);

  //increase counter
  const tambah = () => {
    setCounter(count => count + 1);
  };

  //decrease counter
  // const kurang = () => {
  //   setCounter(count => count - 1);
  // };

  const kurang = () => {
    if (counter > 0) {
      setCounter(count => count - 1);
    }
  };

  //reset counter 
  const reset = () => {
    setCounter(0)
  }

  return (
    <Box>
      <Stack spacing={1} mt={2} direction='row' sx={{ justifyContent: 'center' }}>
        <Button component={Link} to={`/`} variant="contained" color="warning">Back</Button>
      <h1>Counter Down & Up</h1>
      </Stack>
      <Typography textAlign='center' mb={4} fontSize={80}>{counter}</Typography>

      <Stack spacing={1} mt={2} direction='row' sx={{ justifyContent: 'center' }}>
        <Button variant='contained' onClick={tambah}>+</Button>
        <Button variant='contained' onClick={kurang}>-</Button>
        <Button variant='outlined' onClick={reset}>Reset</Button>
      </Stack>
      <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      </Box>
    </Box>
  );
}