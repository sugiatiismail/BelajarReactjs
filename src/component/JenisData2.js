import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom"


export default function JenisData() {

    const [integer, setInteger] = useState(0);
    const [str, setStr] = useState('');
    const [obj, setObj] = useState({});
    const [arr, setArr] = useState([]);

    const handleAdd =()=>{
        console.log('DI ADD');
        var IdNya = obj.id;
        setObj({id:IdNya +1, name:'Me'});
    }

    const handleAdd2 =()=>{
        console.log('DI ADD');
        var AGENya = arr[0].age;
        var AGE2Nya = arr[1].age;
        
        setArr([{age:AGENya + 1, name:'Me'},{age:AGE2Nya + 1, name:'You'}])

        console.log(arr[1].age)
 
    }
    return (
        <Box m={10}>

            <table style={{width:'70%'}}>
                <tbody>
                    <tr>
                        <td> Data Integer</td>
                        <td>
                            <Button variant="contained" color="primary" onClick={()=>setInteger(1)}>
                                Lihat
                            </Button>
                        </td>
                        <td>{integer}</td>
                    </tr>

                    <tr>
                        <td> Data String</td>
                        <td>
                            <Button variant="contained" color="primary" onClick={()=>setStr('My nemae is me')}>
                                Lihat
                            </Button>
                        </td>
                        <td>{str}</td>
                    </tr>

                    <tr>
                        <td> Data Objek</td>
                        <td>
                            <Button variant="contained" color="primary" onClick={()=>setObj({id:1, name:'Me'})}>
                                Lihat
                            </Button>
                            <Button variant="contained" color="primary" onClick={handleAdd}>
                                ADD
                            </Button>
                        </td>
                        <td>{JSON.stringify(obj)}</td>
                    </tr>


                    <tr>
                        <td> Data Array</td>
                        <td>
                            <Button variant="contained" color="primary" onClick={()=>setArr([{age:1, name:'Me'},{age:2, name:'You'}])}>
                                Lihat
                            </Button>
                            <Button variant="contained" color="primary" onClick={handleAdd2}>
                                ADD
                            </Button>
                        </td>
                        <td>
                            <small>{JSON.stringify(arr)}</small>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Box>
    )



};


