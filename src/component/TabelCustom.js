import React from 'react'
import Box from '@mui/material/Box';
import { Link } from "react-router-dom"
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';



const TabelCustom = () => {
    return (
        <Box>
            <Stack spacing={1} mt={2} direction='row' sx={{ justifyContent: 'center' }}>
                <Button component={Link} to={`/`} variant="contained" color="warning">Back</Button>
                <h1 style={{ textAlign: 'center' }}>Tabel Custom</h1>
            </Stack>

            <h3 style={{ textAlign: 'center' }}>Tabel 1</h3>
            <Box sx={{ justifyContent: 'center', display: 'flex' }}>
                <table id="table-app">
                    <thead>
                        <tr>
                            <td colspan="3" style={{ backgroundColor: '#1976d2', color: 'white' }}>DAFTAR SISWA A</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>No</td>
                            <td>Nama</td>
                            <td>Alamat</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Budi</td>
                            <td>Dumai</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Andi</td>
                            <td>Duri</td>
                        </tr>

                        <tr>
                            <td colspan="3" style={{ backgroundColor: '#1976d2', color: 'white' }}>DAFTAR SISWA B</td>
                        </tr>

                        <tr>
                            <td>No</td>
                            <td>Nama</td>
                            <td>Alamat</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Sinta</td>
                            <td>Dumai</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Manda</td>
                            <td>Duri</td>
                        </tr>
                    </tbody>
                </table>
            </Box>

            <h3 style={{ textAlign: 'center' }}>Tabel 2</h3>
            <Box sx={{ justifyContent: 'center', display: 'flex', mb: 6 }}>
                <table id="table-app">
                    <thead>
                        <tr>
                            <td colspan="3" style={{ backgroundColor: '#1976d2', color: 'white' }}> DAFTAR SISWA A </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Alamat</td>
                            <td>Nama</td>
                            <td>Upah</td>
                        </tr>
                        <tr>
                            <th rowSpan="3">Dumai</th>
                            <td>Budi</td>
                            <td>20000</td>
                        </tr>
                        <tr>
                            <td>Andi</td>
                            <td>30000</td>
                        </tr>
                        <tr>
                            <td>Manji</td>
                            <td>20000</td>
                        </tr>

                        <tr>
                            <th rowSpan="3">Duri</th>
                            <td>Gusti</td>
                            <td>20000</td>
                        </tr>
                        <tr>
                            <td>Sinta</td>
                            <td>30000</td>
                        </tr>
                        <tr>
                            <td>Manda</td>
                            <td>20000</td>
                        </tr>

                        <tr>
                            <td colspan="3" style={{ backgroundColor: '#1976d2', color: 'white' }}>DAFTAR SISWA B </td>
                        </tr>

                        <tr >
                            <td>Alamat</td>
                            <td>Nama</td>
                            <td>Upah</td>
                        </tr>
                        <tr>
                            <th rowSpan="3">Pekanbaru</th>
                            <td>Budi</td>
                            <td>20000</td>
                        </tr>
                        <tr>
                            <td>Andi</td>
                            <td>30000</td>
                        </tr>
                        <tr>
                            <td>Manji</td>
                            <td>20000</td>
                        </tr>
                    </tbody>
                </table>
            </Box>
        </Box>
    )
}

export default TabelCustom
