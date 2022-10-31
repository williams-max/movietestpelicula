import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CardMovie = (data) => {

    const openMovie = () => {
        console.log("cambiar pelicula");
    }
    const urlimagen="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/DirecTV_Sports_Latin_America_%282018%29.png/512px-DirecTV_Sports_Latin_America_%282018%29.png"
  return (
   <CardActionArea sx={{width:'50%',height:'30%'}}>
     <Card sx={{ maxWidth: '100%' }}>
      <CardMedia
      sx={{width:'100%'}}
        component="img"
        height="140"
        image={data.image}
        alt="green iguana"
        onClick={openMovie}
      />
      
    </Card>
   </CardActionArea>
  );
}

export default CardMovie