import React, { useState } from 'react'
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

import { Link } from "react-router-dom"

export default function Calculator() {

    const [nilai1, setNilai1] = useState(0);
    const [nilai2, setNilai2] = useState(0);
    const [total, setTotal] = useState(0);

    const reset = () => {
        setNilai1(0)
        setNilai2(0)
        setTotal(0)
    }

    function handleChangeN1(e) {
        setNilai1(e.target.value);
    }

    function handleChangeN2(e) {
        setNilai2(e.target.value);
    }

    function handleTambah() {
        setTotal(parseInt(nilai1) + parseInt(nilai2));
    };

    function handleKurang() {
        setTotal(parseInt(nilai1) - parseInt(nilai2));
    };

    function handleBagi() {
        if (nilai1 && nilai2 > 0) {
            setTotal(parseInt(nilai1) / parseInt(nilai2));
        }
    };

    function handleKali() {
        setTotal(parseInt(nilai1) * parseInt(nilai2));
    };
    return (
        <Box>
            <Stack spacing={1} mt={2} mb={2} direction='row' sx={{ justifyContent: 'center' }}>
                <Button component={Link} to={`/`} variant="contained" color="warning">Back</Button>
                <h1 style={{ textAlign: 'center' }}>Calculator</h1>
            </Stack>

            <Grid container spacing={2} sx={{ justifyContent: 'center' }}>

                <Grid item>
                    <Typography variant="h5" color="initial">Nilai 1</Typography>
                    <TextField value={nilai1} onChange={handleChangeN1} variant="filled" />
                    <Typography variant="h5" color="initial">Nilai 2</Typography>
                    <TextField value={nilai2} onChange={handleChangeN2} variant="filled" />
                </Grid>

                <Grid item>
                    <Typography variant="h5" color="initial">Total</Typography>
                    <TextField value={total} variant="filled" />
                </Grid>
            </Grid>
            <Stack spacing={2} mt={2} sx={{ justifyContent: 'center' }} direction='row'>
                <Button variant="contained" onClick={handleTambah}>+</Button>
                <Button variant="contained" onClick={handleKurang}>-</Button>
                <Button variant="contained" onClick={handleBagi}>:</Button>
                <Button variant="contained" onClick={handleKali}>*</Button>
                <Button variant='outlined' onClick={reset}>Reset</Button>
            </Stack>
        </Box>
    )
}


