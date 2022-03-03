import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'


const ChatLayout = () => {
    var dataChat = [
        {
            id: 1,
            name: 'Andi',
            pesan: 'halo ini projek chat',
            avatar: 'https://mui.com/static/images/avatar/1.jpg'
        }
    ]


    const [update, setUpdate] = useState(false);
    const [pesan, setPesan] = useState('');
    const [chat, setChat] = useState(dataChat);




    useEffect(() => {

    }, [update]);

    function handleChangePesan(e) {
        setPesan(e.target.value);
        // console.log(e.target.value)
    }


    function kirimPesan() {

        //   setKirim(dataChat)
        //   var IDNya = dataChat.id;
        //  console.log(IDNya);
        //Array.prototype.push.apply(dataArray1, dataArray2);
        Array.prototype.push.apply(chat, [{ id: chat.length + 1, name: 'susi', pesan: pesan, avatar: 'https://mui.com/static/images/avatar/1.jpg' }]);
        setChat(chat);

        setUpdate(!update)

    };



    return (
        <Box sx={{ bgcolor: '#1A1C20'}}>
            <Container  sx={{ p: 4}}>
                <Box sx={{ bgcolor: '#1A1C20', height: 620, alignItems: 'flex-end', display: 'flex', padding:2 }} >
                    <Container sx={{mt:2}}>
                        {chat.map((data, i) => (
                            <Stack spacing={1} padding={1} direction='row' key={i}>
                                <Avatar alt="Ismail Halawa" variant="rounded" src={data.avatar} sx={{ width: 56, height: 56 }} />
                                <Stack >
                                    <Stack spacing={1}  alignItems='center'  direction='row' >
                                        <Typography sx={{ color: '#a4a5a6' }} variant="h6" > {data.name}</Typography>
                                        <Typography sx={{ color: '#a4a5a6' }} fontSize={14} >5:44 PM</Typography>
                                    </Stack>
                                    <Typography sx={{ color: '#a4a5a6' }} fontSize={18} >{data.pesan}</Typography>
                                </Stack>

                            </Stack>
                        ))}
                        <Stack spacing={1} direction='row' sx={{ mt: 4, mb: 2 }}>
                            <TextField fullWidth value={pesan} onChange={handleChangePesan}
                                variant="outlined" 
                                sx={{ bgcolor: '#1A1C20', borderRadius: 2, position: 'static', border:1, borderColor:'white' }} />
                            <Button onClick={kirimPesan} variant="contained">Kirim</Button>
                        </Stack>
                    </Container>
                </Box>
            </Container>
        </Box>
    )
};

export default ChatLayout;
