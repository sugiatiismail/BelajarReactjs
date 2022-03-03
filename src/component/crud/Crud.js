import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AddMasyarakat from './AddMasyarakat';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import Paper from '@mui/material/Paper';

export default function Crud() {
    const [masyarakat, setMasyarakat] = useState([]);




    const fetchData = async () => {
        const response = await fetch('http://localhost:8080/masyarakat');
        const data = await response.json();
        setMasyarakat(data);

    }

    useEffect(() => {
        fetchData();
    }, []);

    const deleteMasyarakat = async (id) => {
        if (window.confirm('Yakin akan menghapus')) {
        await fetch(`http://localhost:8080/masyarakat/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        fetchData();
    }
    }

    return (
        <Container maxWidth='md'>
            <Typography sx={{ mt: 10 }} textAlign='center' variant="h6">DATA MASYARAKAT</Typography>
            <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
                <Paper sx={{ padding: 4 }} >
                    <Button sx={{ mb: 1 }} component={Link} to="/addmasyarakat" variant="outlined">
                        Tambah Data
                    </Button>
                    <table id="table-app">
                        <thead>
                            <tr>
                                <th>NO KTP</th>
                                <th>NAMA</th>
                                <th>ALAMMAT</th>
                                <th>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {masyarakat.map((data) => (
                                <tr key={data.id}>
                                    <td>{data.no_ktp}</td>
                                    <td>{data.nama}</td>
                                    <td>{data.alamat}</td>
                                    <td>
                                        <IconButton
                                            sx={{ ml: 1, mr: 1 }}
                                            component={Link} to={`/masyarakat/edit/${data.id}`}
                                            aria-label="delete" size="small">
                                            <EditIcon fontSize="small" />
                                        </IconButton>

                                        <IconButton
                                            onClick={() => deleteMasyarakat(data.id)}
                                            aria-label="delete" size="small">
                                            <DeleteOutlineIcon fontSize="small" />
                                        </IconButton>
                                        {/* <Button  variant="contained">Edit</Button>
                                    <Button  variant="contained" color="warning" >Delete</Button> */}
                                    </td>
                                </tr>

                            ))}

                        </tbody>
                    </table>
                </Paper>
            </Box>
        </Container>
    )
};

