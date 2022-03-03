import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

export default function Crud2() {
    const [masyarakat, setMasyarakat] = useState([]);
    const [form, setForm] = useState({
        id:0,
        no_ktp: "",
        nama:"",
        alamat:""
    });

    const getData = async () => {
        const response = await fetch('http://localhost:8080/masyarakat');
        const data = await response.json();
        setMasyarakat(data);
    }

    useEffect(() => {
        getData();
    }, []);

    const resetForm = ()=>{
        setForm({
            id:0,
            no_ktp: "",
            nama:"",
            alamat:""
        })
    }


    const deleteMasyarakat = async (id) => {

        if (window.confirm('Yakin akan menghapus')) {
        await fetch(`http://localhost:8080/masyarakat/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        });

        resetForm();
        getData();
    }
    }

    const handleSubmit = async (e) => {
        console.log("DISMPAN")
        console.log(form)

        e.preventDefault();
        await fetch('http://localhost:8080/masyarakat', {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        getData();

        resetForm();
    }


    const handleUpdate = async (e) => {
        console.log("DI UPDATE")
        console.log(form)

        e.preventDefault();
        await fetch(`http://localhost:8080/masyarakat/${form.id}`, {
            method: "PUT",
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        getData();

        resetForm();
    }

    const handleChange = (e) => {
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }


    return (
        <Container maxWidth='md'>

<Box sx={{ mt: 10, mb: 4, display: 'flex', justifyContent: 'center' }}>
                <Paper sx={{ padding: 2 }} >
                    <form onSubmit={form.id > 0 ? handleUpdate : handleSubmit}>
                        <Typography textAlign='center' variant="h6">TAMBAH DATA</Typography>
                        <div className="field">
                            <label className="label">NO KTP</label>
                            <div className="control">
                                <input className="input" onChange={handleChange} name="no_ktp" value={form.no_ktp}  type="text" />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">NAMA</label>
                            <div className="control">
                                <input className="input" onChange={handleChange} name="nama" value={form.nama} type="text" />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">ALAMAT</label>
                            <div className="control">
                                <input className="input" onChange={handleChange} name="alamat" value={form.alamat}  type="text" />
                            </div>
                        </div>

                        <div className="field">
                            <div className="control">
                                <Stack spacing={1} direction='row' sx={{mt:1}}>
                                    <Button size='small' variant="outlined" type="submit" >Save</Button>
                                </Stack>
                            </div>
                        </div>
                    </form>
                </Paper>
            </Box>

{/* {JSON.stringify(form)} */}

            <Typography sx={{ mt: 10 }} textAlign='center' variant="h6">DATA MASYARAKAT</Typography>
            <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
                <Paper sx={{ padding: 4 }} >
                    <Button sx={{ mb: 1 }} onClick={()=>resetForm()} variant="outlined">
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
                            {masyarakat.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.no_ktp}</td>
                                    <td>{item.nama}</td>
                                    <td>{item.alamat}</td>
                                    <td>
                                        <IconButton
                                            sx={{ ml: 1, mr: 1 }}
                                            onClick={()=> setForm({
                                                id: item.id,
                                                no_ktp: item.no_ktp,
                                                nama: item.nama,
                                                alamat: item.alamat,
                                            })}
                                            aria-label="delete" size="small">
                                            <EditIcon fontSize="small" />
                                        </IconButton>

                                        <IconButton
                                            onClick={() => deleteMasyarakat(item.id)}
                                            aria-label="delete" size="small">
                                            <DeleteOutlineIcon fontSize="small" />
                                        </IconButton>
                                      
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

