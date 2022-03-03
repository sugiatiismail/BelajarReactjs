import { useState } from "react"
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export default function Crud() {

    const [no_ktp, setNo_ktp] = useState('');
    const [nama, setNama] = useState('');
    const [alamat, setAlamat] = useState('');
    const history = useHistory();

    const saveMasyarakat = async (e) => {
        e.preventDefault();
        const masyarakat = { no_ktp, nama, alamat };
        await fetch('http://localhost:8080/masyarakat', {
            method: "POST",
            body: JSON.stringify(masyarakat),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        history.push("/crud");
    }

    return (
        <Container maxWidth='md'>
            <Box sx={{ mt: 10, mb: 4, display: 'flex', justifyContent: 'center' }}>
                <Paper sx={{ padding: 2 }} >
                    <form onSubmit={saveMasyarakat}>
                        <Typography textAlign='center' variant="h6">TAMBAH DATA</Typography>
                        <div className="field">
                            <label className="label">NO KTP</label>
                            <div className="control">
                                <input className="input" value={no_ktp} onChange={(e) => setNo_ktp(e.target.value)} type="text" />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">NAMA</label>
                            <div className="control">
                                <input className="input" value={nama} onChange={(e) => setNama(e.target.value)} type="text" />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">ALAMAT</label>
                            <div className="control">
                                <input className="input" value={alamat} onChange={(e) => setAlamat(e.target.value)} type="text" />
                            </div>
                        </div>

                        <div className="field">
                            <div className="control">
                                <Stack spacing={1} direction='row' sx={{mt:1}}>
                                    <Button size='small' onClick={saveMasyarakat} variant="outlined" >Save</Button>
                                    <Button size='small' component={Link} to={`/crud`} variant="outlined" color="inherit">Back</Button>
                                </Stack>
                            </div>
                        </div>
                        {/* <p>{title}- {price}</p> */}
                    </form>
                </Paper>
            </Box>
        </Container>
    )
}

