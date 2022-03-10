import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

export default function Crud2() {
    const [masyarakat, setMasyarakat] = useState([]);
    const [form, setForm] = useState({
        id: 0,
        no_ktp: "",
        nama: "",
        alamat: "",
        agama: "",
        hobby: [],
        jk: ""
    });

    var cekboxHobby = [
        {
            id: 1,
            hobby: 'Masak',
        },
        {
            id: 2,
            hobby: 'Menonton',

        },
        {
            id: 3,
            hobby: 'Olahraga',
        },
    ];


    const getData = async () => {
        const response = await fetch('http://localhost:8080/masyarakat');
        const data = await response.json();
        setMasyarakat(data);
    }

    useEffect(() => {
        getData();
    }, []);

    const resetForm = () => {
        setForm({
            id: 0,
            no_ktp: "",
            nama: "",
            alamat: "",
            agama: "",
            hobby: [],
            jk: ""
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
        console.log(e.target.value)
    }

    const handleChangeHobby = (e) => {
        e.preventDefault();
        // final resulrt
        // ['Memasak', 'Musik']
        var value = e.target.value;
        // empty array
        var newState = [];
        // console.log(e.target.value);
        // console.log(form.hobi);
        // Count hoby if exist
        var countHobi = form.hobby.filter((fl) => fl === value).length;
        if (countHobi > 0) {
            // remove value
            newState = arrayRemove(form.hobby, value);
        } else {
            // insert to array
            newState = [...form.hobby, value];
        }
        setForm({
            ...form,
            [e.target.name]: newState,
        });
    };

    function arrayRemove(arr, value) {
        return arr.filter(function (ele) {
            return ele !== value;
        });
    }
    return (
        <Container maxWidth='md'>
            {JSON.stringify(form)}
            {/* {JSON.stringify(form.nama)}
            {JSON.stringify(form.hobby)}
            {JSON.stringify(form.jk)} */}

            <Box sx={{ mt: 10, mb: 4, display: 'flex', justifyContent: 'center' }}>
                <Paper sx={{ padding: 2 }} >
                    <form onSubmit={form.id > 0 ? handleUpdate : handleSubmit}>
                        <Typography textAlign='center' variant="h6">TAMBAH DATA</Typography>
                        <div className="field">
                            <label className="label">NO KTP</label>
                            <div className="control">
                                <input className="input" onChange={handleChange} name="no_ktp" value={form.no_ktp} type="text" />
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
                                <input className="input" onChange={handleChange} name="alamat" value={form.alamat} type="text" />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">AGAMA</label>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Pilih</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={form.agama}
                                    name="agama"
                                    label="Agama"
                                    defaultChecked={form.agama}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={'Islam'}>Islam</MenuItem>
                                    <MenuItem value={'Protestan'}>Protestan</MenuItem>
                                    <MenuItem value={'Katolik'}>Katolik</MenuItem>
                                    <MenuItem value={'Hindu'}>Hindu</MenuItem>
                                    <MenuItem value={'Buddha'}>Buddha</MenuItem>
                                    <MenuItem value={'Khonghucu'}>Khonghucu</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div className="field">
                            <label className="label">HOBBY</label>
                            <FormGroup>
                                {/* note looping */}
                                {cekboxHobby.map((item) => (
                                    <FormControlLabel
                                        key={item.id}
                                        control={
                                            <Checkbox checked={form.hobby.filter((fl) => fl === item.hobby).length > 0 ? true : false}
                                                onChange={handleChangeHobby} label={item.hobby} value={item.hobby} name='hobby'/>}
                                        label={item.hobby}
                                    />
                                ))}
                            </FormGroup>
                        </div>

                        <div className="field">
                            <Stack>
                                <label className="label">JENIS KELAMIN</label>
                                <FormControl>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue={form.jk}
                                        value={form.jk}
                                        name="jk"
                                        onChange={handleChange}
                                    >
                                        <FormControlLabel value="Laki-laki" control={<Radio />} label="Laki-laki" />
                                        <FormControlLabel value="Perempuan" control={<Radio />} label="Perempuan" />
                                    </RadioGroup>
                                </FormControl>
                            </Stack>
                        </div>

                        <div className="field">
                            <div className="control">
                                <Stack spacing={1} direction='row' sx={{ mt: 1 }}>
                                    <Button size='small' variant="outlined" type="submit"
                                        onClick={() => {
                                            handleSubmit();
                                        }}
                                    >Save</Button>
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
                    <Button sx={{ mb: 1 }} onClick={() => resetForm()} variant="outlined">
                        Tambah Data
                    </Button>
                    <table id="table-app">
                        <thead>
                            <tr>
                                <th>NO KTP</th>
                                <th>NAMA</th>
                                <th>ALAMAT</th>
                                <th>AGAMA</th>
                                <th>HOBBY</th>
                                <th>JENIS KELAMIN</th>
                                <th>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {masyarakat.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.no_ktp}</td>
                                    <td>{item.nama}</td>
                                    <td>{item.alamat}</td>
                                    <td>{item.agama}</td>
                                    <td>{item.hobby}</td>
                                    <td>{item.jk}</td>
                                    <td>

                                        <IconButton
                                            sx={{ ml: 1, mr: 1 }}
                                            onClick={() => setForm({
                                                id: item.id,
                                                no_ktp: item.no_ktp,
                                                nama: item.nama,
                                                alamat: item.alamat,
                                                agama: item.agama,
                                                hobby: item.hobby,
                                                jk: item.jk,
                                            })

                                            }
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

