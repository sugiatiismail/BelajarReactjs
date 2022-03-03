import React, { useState } from 'react'
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

import { Link } from "react-router-dom"

export default function LuasLingkaran() {

    const [jarijari, SetJarijari] = useState(0);
    const [nilaivi, setNilaivi] = useState(3.14);
    const [hitung, setHitung] = useState(0);

    function handleChange(e) {
        SetJarijari(e.target.value);
    }

    function handleHitung() {
        setHitung(parseInt(nilaivi) * parseInt(jarijari) * parseInt(jarijari));
    };

    const reset = () => {
        SetJarijari(0)
        setNilaivi(0)
        setHitung(0)
      }

    return (
        <Box>
            <Stack spacing={1} mt={2} mb={2}  direction='row' sx={{ justifyContent: 'center' }}>
                <Button component={Link} to={`/`} variant="contained" color="warning">Back</Button>
                <h1 style={{ textAlign: 'center' }}>Keliling Persegi Panjang</h1>
            </Stack>

            <Grid container spacing={2} sx={{ justifyContent: 'center' }}>

                <Grid item>
                    <Typography variant="h5" color="initial">Jari jari</Typography>
                    <TextField value={jarijari} onChange={handleChange} variant="filled" />
                </Grid>

                <Grid item>
                    <Typography variant="h5" color="initial">Hasil</Typography>
                    <TextField value={hitung} variant="filled" />
                </Grid>
            </Grid>
            <Stack spacing={2} mt={2} sx={{ justifyContent: 'center' }} direction='row'>
                <Button variant="contained" onClick={handleHitung}>Hitung</Button>
                <Button variant='outlined' onClick={reset}>Reset</Button>
            </Stack>
        </Box>
    )
}


