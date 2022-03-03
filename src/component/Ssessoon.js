import React, {useState} from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

export default function Ssessoon () {

    const [count, setCount] = useState(0);
    const [nh, setNh] = useState("");

    const handleClick = () =>{
        console.log('DI CLICK');
        setCount(parseInt(count)+ 1);

        var nHuruf = "";
        if(count <=60 ){
            nHuruf = "E"
        }else if(count > 60 && count <= 70){
            nHuruf= "D"
        }else if(count > 70 && count <= 80){
            nHuruf= "C"
        }else if(count > 80 && count <= 90){
            nHuruf= "B"
        }else if(count > 90 && count <= 100){
            nHuruf= "A"
        }else{
            nHuruf= "Salah input"
        }

        setNh(nHuruf);

    }

    const handleChangeGo = (event)=>{

        setCount(event.target.value);

        // console.log('DI CHANGE');
        // var nilai = event.target.value;
        // var nHuruf = "";
        // // console.log(nilai);

        // if(nilai <=60 ){
        //     nHuruf = "E"
        // }else if(nilai > 60 && nilai <= 70){
        //     nHuruf= "D"
        // }else if(nilai > 70 && nilai <= 80){
        //     nHuruf= "C"
        // }else if(nilai > 80 && nilai <= 90){
        //     nHuruf= "B"
        // }else if(nilai > 90 && nilai <= 100){
        //     nHuruf= "A"
        // }else{
        //     nHuruf= "Salah input"
        // }

        // console.log(nHuruf);
        // setNh(nHuruf)
    }


    return (
        <div style={{marginTop:30}}>
            <Button onClick={handleClick} variant="contained" color="primary">
              Klik  {count} {nh}
            </Button>

            <TextField
              id="count-bebas"
              label="Text Count"
                //   value={count}
              onChange={handleChangeGo}
            />
        </div>
    )
}

