import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom"

export default function JenisData() {

    const [integer, setInteger] = useState(0);
    const [lihat, setLihat] = useState(0);
    const [saya, setSaya] = useState("");
    const [dataObject, setDataObject] = useState("");
    const [dataArray, setDataArray] = useState("");
    const [dataArraydua, setDataArrayDua] = useState("");
    const [dataArraytiga, setDataArrayTiga] = useState("");

    // {JSON.stringify(dataUser)}

    var text = 'Saya adalah Me';

    var dataUser = {id:1, name:"Andi"};

    var dataArray1 = [
        {
            id: 1,
            name: 'Andi'
        },
        {
            id: 2,
            name: 'Budi'
        }
    ]

    var dataArray2 = [
        {
            id: 3,
            name: 'Siti'
        },
        {
            id: 4,
            name: 'Yola'
        }
    ]


    function handleLihat() {
        setLihat(parseInt(integer) + 1)
    };

    function handleLihat2() {
        setSaya(text)
    };

    function handleLihat3() {
        const data = JSON.stringify(dataUser);
        setDataObject(data);
        // setDataObject(JSON.stringify(dataUser));
    };

    function handleLihat4() {
        setDataArray(JSON.stringify(dataArray1));
    };

    function handleLihat5() {
        setDataArrayDua(JSON.stringify(dataArray2));
    };

    function handleLihat6() {
        Array.prototype.push.apply(dataArray1, dataArray2);
        setDataArrayTiga(JSON.stringify(dataArray1));
    };

    const handleAdd = () => {
        
    };


    return (
        <Box>
            <Stack spacing={4} p={2} mt={2} direction='row' sx={{ justifyContent: 'center' }}>
                <Button component={Link} to={`/`} variant="contained" color="warning">Back</Button>
                <h1 style={{ textAlign: 'center' }}>Jenis Data</h1>
            </Stack>

            <Box sx={{ justifyContent: 'center', display: 'flex' }}>
                <Stack>
                    <Stack spacing={4} mt={4} direction='row' sx={{ justifyContent: 'center' }}>
                        <Typography variant="h5" color="initial">Data Integer</Typography>
                        <Button variant="contained" onClick={handleLihat}>Lihat</Button>
                        <Typography variant="h5" color="initial">{lihat}</Typography>
                    </Stack>

                    <Stack spacing={4} mt={4} direction='row' sx={{ justifyContent: 'center' }}>
                        <Typography variant="h5" color="initial">Data String</Typography>
                        <Button variant="contained" onClick={handleLihat2}>Lihat</Button>
                        <Typography variant="h5" color="initial">{saya}</Typography>
                    </Stack>


                    <Stack spacing={4} mt={4} direction='row' sx={{ justifyContent: 'center' }}>
                        <Typography variant="h5" color="initial">Data Object</Typography>
                        <Button variant="contained" onClick={handleLihat3}>Lihat</Button>
                        <Typography variant="h5" color="initial">{dataObject}</Typography>
                    </Stack>
                    <Button variant="contained" onClick={handleAdd} sx={{ width: 20, ml: 26, mt: 1 }}>Add</Button>

                    <Stack spacing={4} mt={4} direction='row' sx={{ justifyContent: 'center' }}>
                        <Typography variant="h5" color="initial">Data Array 1</Typography>
                        <Button variant="contained" onClick={handleLihat4}>Lihat</Button>
                        <Typography variant="h5" color="initial">{dataArray}</Typography>
                    </Stack>

                    <Stack spacing={4} mt={4} direction='row' sx={{ justifyContent: 'center' }}>
                        <Typography variant="h5" color="initial">Data Array 2</Typography>
                        <Button variant="contained" onClick={handleLihat5}>Lihat</Button>
                        <Typography variant="h5" color="initial">{dataArraydua}</Typography>
                    </Stack>

                    <Stack spacing={4} mt={4} direction='row' sx={{ justifyContent: 'center' }}>
                        <Typography variant="h5" color="initial">Gabungan Array 1 & 2</Typography>
                        <Button variant="contained" onClick={handleLihat6}>Lihat</Button>
                        <Typography variant="h5" color="initial">{dataArraytiga}</Typography>
                    </Stack>
                </Stack>
            </Box>


        </Box>


    )



};


