import React, { useState, useEffect } from 'react'
//import ReactHlsPlayer from 'react-hls-player';
import CardMovie from './card/cardMovie';
import sportsData from '../sampleData/sportsData';
import dynamic from 'next/dynamic'
import { CardActionArea, Card, CardMedia, Typography } from '@mui/material';
const ReactHlsPlayer = dynamic(
    () => import('react-hls-player'),
    { ssr: false },
);
const Sports = () => {

    const [movieActual, SetMovieActual] = useState("http://190.210.221.119/Processor3_9_chunklist_b1300000.m3u8")
    console.log("da", sportsData)


    const openMovie = (url, e) => {

        console.log("url ", url)
        SetMovieActual(url);
    }

    const CardMovie = (image, url, title) => {
        /*
                */
        //  const urlimagen="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/DirecTV_Sports_Latin_America_%282018%29.png/512px-DirecTV_Sports_Latin_America_%282018%29.png"
        return (
            <CardActionArea >
                <Card sx={{ maxWidth: '100%' }}>
                    <CardMedia
                        sx={{ width: '10%' }}
                        component="img"
                        // height="140"
                        image={image}
                        alt="green iguana"

                        onClick={(e) => openMovie(url, e)}
                    />

                </Card>
                <Typography variant="h1" component="h2" sx={{ fontSize: '13px' }}>
                    {title}
                </Typography>;
            </CardActionArea>
        );
    }

    return (
        <div>
            <h1>Sports - Directv Sports</h1>
            <ReactHlsPlayer
                src={movieActual}
                autoPlay={false}
                controls={true}
                width="70%"
                height="auto"
            />

            {
                sportsData.map((element, index) => {
                    return (
                        <div key={index}>

                            {CardMovie(element.image, element.url, element.title)}

                        </div>)
                })}
        </div>
    )
}

export default Sports;