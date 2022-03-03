import { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export default function EditMasyarakat() {

    const [no_ktp, setNo_ktp] = useState('');
    const [nama, setNama] = useState('');
    const [alamat, setAlamat] = useState('');
    const history = useHistory();
    const { id } = useParams();


    useEffect(() => {
        getProductById();
        // console.log(id);
    }, []);


    const getProductById = async () => {
        const response = await fetch(`http://localhost:8080/masyarakat/${id}`);
        const data = await response.json();
        setNo_ktp(data.no_ktp);
        setNama(data.nama);
        setAlamat(data.alamat);
    }

    const updateMasyarakat = async (e) => {
        e.preventDefault();
        const masyarakat = { no_ktp, nama, alamat };
        await fetch(`http://localhost:8080/masyarakat/${id}`, {
            method: "PUT",
            body: JSON.stringify(masyarakat),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        history.push("/crud");
        // console.log(product);
    }

    return (
        <Container maxWidth='md'>
            <Box sx={{ mt: 10, mb: 4, display: 'flex', justifyContent: 'center' }}>
                <Paper sx={{ padding: 2 }} >
                    <Typography textAlign='center' variant="h6">UBAH DATA</Typography>
                    <form onSubmit={updateMasyarakat}>
                        <div className="field">
                            <label className="label">NO KTP</label>
                            <div className="control">
                                <input className="input" value={no_ktp} onChange={(e) => setNo_ktp(e.target.value)} type="text" placeholder="NO KTP" />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">NAMA</label>
                            <div className="control">
                                <input className="input" value={nama} onChange={(e) => setNama(e.target.value)} type="text" placeholder="NAMA" />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">ALAMAT</label>
                            <div className="control">
                                <input className="input" value={alamat} onChange={(e) => setAlamat(e.target.value)} type="text" placeholder="ALAMAT" />
                            </div>
                        </div>

                        <div className="field">
                            <div className="control">
                                <Stack sx={{mt:1}} direction='row' spacing={1}>
                                    <Button type="submit" variant="outlined">Update</Button>
                                    <Button component={Link} to={`/crud`} variant="outlined" color="inherit">Back</Button>
                                </Stack>
                                {/* <Button component={Link} to={`/product`} variant="contained" color="warning">Back</Button> */}
                            </div>
                        </div>
                        {/* <p>{title}- {price}</p> */}
                    </form>
                </Paper>
            </Box>
        </Container>

    )
}

