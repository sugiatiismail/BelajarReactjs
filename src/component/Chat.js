import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'


const Chat = () => {

  var dataChat = [
    {
      id: 1,
      name: 'Andi',
      pesan: 'tes',
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
    Array.prototype.push.apply(chat, [{id:chat.length +1, name:'susi',pesan:pesan, avatar: 'https://mui.com/static/images/avatar/1.jpg'}]);
    setChat(chat);

    setUpdate(!update)
    
  };

  return (
    <Box>
    
      <Container sx={{ mt: 8 }}>
        {chat.map((data, i) => (
          <Stack spacing={1} direction='row' key={i}>
            <Avatar alt="Ismail Halawa" src={data.avatar} sx={{ width: 56, height: 56 }}/>
            <Stack >
              <Typography variant="h6" color="initial"> {data.name}</Typography>
              <Typography fontSize={18} color="initial">{data.pesan}</Typography>
            </Stack>

          </Stack>
        ))}
        <Stack spacing={1} direction='row' sx={{ mt: 4 }}>
          <TextField value={pesan} onChange={handleChangePesan} variant="filled" />
          <Button onClick={kirimPesan} variant="contained">Kirim</Button>
        </Stack>
      </Container>

      {/* {JSON.stringify(chat)} */}
    </Box>

  )
};

export default Chat;
