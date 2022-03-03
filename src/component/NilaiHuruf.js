import React, { useState } from 'react'
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

import { Link } from "react-router-dom"


export default function NilaiHuruf() {

    const [nama, setNama] = useState('');
    const [nilai, setNilai] = useState(0);
    const [hitung, setHitung] = useState(0);

    function handleChangeNama(e) {
        setNama(e.target.value);
    }

    function handleChangeNilai(e) {
        setNilai(e.target.value);
    }

    function handleHitung() {
        const Nil = hitungNilai(nilai);
        setHitung(Nil);
    };

    const reset = () => {
        setNama(0)
        setNilai(0)
        setHitung(0)
    }



    function handleHitung2() {
        var nil = '';
        if (nilai >= 91) {
            nil = 'A';
        } else if ((nilai >= 81) && (nilai <= 91)) {
            nil = 'B';
        } else if ((nilai >= 71) && (nilai <= 81)) {
            nil = 'C';
        } else if ((nilai >= 60) && (nilai <= 71)) {
            nil = 'D';
        } else if (nilai <= 59) {
            nil = 'E';
        }
        setHitung(nil);
    };

    const hitungNilai = (nilai) => {
        if (nilai >= 91) {
            return 'A';
        } else if ((nilai >= 81) && (nilai <= 91)) {
            return 'B';
        } else if ((nilai >= 71) && (nilai <= 81)) {
            return 'C';
        } else if ((nilai >= 60) && (nilai <= 71)) {
            return 'D';
        } else if (nilai <= 59) {
            return 'E';
        }
    
    };

    return (
        <Box>
            <Stack spacing={1} mt={2} mb={2} direction='row' sx={{ justifyContent: 'center' }}>
                <Button component={Link} to={`/`} variant="contained" color="warning">Back</Button>
                <h1 style={{ textAlign: 'center' }}>Nilai Huruf</h1>
            </Stack>

            <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
                <Grid item >
                    <Typography variant="h5" color="initial">Masukkan Nama</Typography>
                    <TextField value={nama} onChange={handleChangeNama} variant="filled" />
                    <Typography variant="h5" color="initial">Masukkan Nilai Angka</Typography>
                    <TextField value={nilai} onChange={handleChangeNilai} variant="filled" />
                    <Typography variant="h5" color="initial">NILAI {nama} ADALAH {hitung} </Typography>
                </Grid>
            </Grid>
            <Stack spacing={2} mt={2} sx={{ justifyContent: 'center' }} direction='row'>
                <Button variant="contained" onClick={handleHitung2}>Hitung</Button>
                <Button variant='outlined' onClick={reset}>Reset</Button>
            </Stack>

        </Box>
    )
}



