import React, { useState, useEffect } from 'react'
//import ReactHlsPlayer from 'react-hls-player';
import CardMovie from './card/cardMovie';
import movieData from '../sampleData/movieData';
import dynamic from 'next/dynamic'
import styles from '../styles/Home.module.css'
import { CardActionArea, Card, CardMedia, Typography } from '@mui/material';
const ReactHlsPlayer = dynamic(
    () => import('react-hls-player'),
    { ssr: false },
);
const Movie = () => {

    const [movieActual, SetMovieActual] = useState("https://adultswim-vodlive.cdn.turner.com/live/test-2/stream_de.m3u8")
    const [titulo, setTitulo] = useState("default");
    console.log("da", movieData)


    const openMovie = (url, e) => {

        console.log("url ", url)
        SetMovieActual(url);
        setTitulo(title)
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
                        alt="movie"

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
            <h1>Movie - {titulo}</h1>
          <div className={styles.containermovie}>
                <div>
                    <ReactHlsPlayer
                        src={movieActual}
                        autoPlay={true}
                        controls={true}
                        width="70%"
                        height="auto"
                    />
                </div>


                <div>
                    <a style={{ textDecoration: "none", fontSize: '15px',backgroundColor:'yellow', 
                    fontWeight: '400', color: 'black' }}
                        target="_blank" rel="noreferrer"
                        href={movieActual}
                    >
                        Click Si no cargao el video
                    </a>
                </div>
            </div>

            {
                movieData.map((element, index) => {
                    return (
                        <div key={index}>

                            {CardMovie(element.image, element.url, element.title)}

                        </div>)
                })}
        </div>
    )
}

export default Movie;