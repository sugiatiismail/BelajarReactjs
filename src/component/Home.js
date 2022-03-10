import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography'
import { Link } from "react-router-dom"
import './../App.css';

const Home = () => {

    var rumus = [
        {
            no: "1",
            ket: "Membuat Counter Sederhana",
            coding: "Klik",
            link: `/count`

        },
        {
            no: "2",
            ket: "Membuat Kalkulator Sederhana",
            coding: "Klik",
            link: `/calculator`
        },
        {
            no: "3",
            ket: "Membuat Rumus Segitiga",
            coding: "Klik",
            link: `/segitiga`
        },
        {
            no: "4",
            ket: "Keliling Persegi Panjang",
            coding: "Klik",
            link: `/persegipanjang`
        },
        {
            no: "5",
            ket: "Luas Lingkaran",
            coding: "Klik",
            link: `/luaslingkaran`
        },
        {
            no: "6",
            ket: "Nilai Huruf",
            coding: "Klik",
            link: `/nilaihuruf`
        },
        {
            no: "7",
            ket: "Tabel Custom",
            coding: "Klik",
            link: `/tabelcustom`
        },
        {
            no: "8",
            ket: "Jenis Data",
            coding: "Klik",
            link: `/jenisdata`
        },
        {
            no: "9",
            ket: "Chat Sederhana",
            coding: "Klik",
            link: `/chat`
        },
        {
            no: "10",
            ket: "Crud Json Server",
            coding: "Klik",
            link: `/crud`
        },
        {
            no: "11",
            ket: "Crud 1 Json Server",
            coding: "Klik",
            link: `/crud-1`
        },
        {
            no: "12",
            ket: "Crud 2 Json Server",
            coding: "Klik",
            link: `/crud-2`
        },
        {
            no: "13",
            ket: "Crud 3 Json Server",
            coding: "Klik",
            link: `/crud-3`
        }
    ]


    return (
<Container maxWidth='md'>
        <Box sx={{mb:4}}>
            <Typography mb={4} variant="h2" textAlign='center' color="initial">Belajar Logika</Typography>
            <Box sx={{ justifyContent: 'center', display: 'flex' }}>
                <table id="table-app" >
                    <thead>
                        <tr style={{ height: "60px", backgroundColor: '#1976d2', color: 'white' }}>
                            <th>No</th>
                            <th>Keterangan</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rumus.map(item => (
                            <tr key={item.no}>
                                <th>
                                    <Typography fontSize={18}>{item.no}</Typography>
                                </th>
                                <td>
                                    <Typography fontSize={18}>{item.ket}</Typography>
                                </td>
                                <th>
                                    <Button component={Link} to={item.link} variant="contained">{item.coding}</Button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Box>
        </Box>
        </Container>
    )
}

export default Home
