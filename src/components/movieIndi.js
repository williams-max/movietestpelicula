import React, { useState, useEffect } from 'react'
//import ReactHlsPlayer from 'react-hls-player';
import CardMovie from './card/cardMovie';
import movieIndiData from '../sampleData/movieIndiData';
import dynamic from 'next/dynamic'
import { CardActionArea, Card, CardMedia, Typography } from '@mui/material';
import styles from '../styles/Home.module.css'
const ReactHlsPlayer = dynamic(
    () => import('react-hls-player'),
    { ssr: false },
);
const MovieIndi = () => {

    const [movieActual, SetMovieActual] = useState("http://198.144.149.82:8080/NOTV/KCVMOVIE/index.m3u8?token=GTR")
    const [titulo, setTitulo] = useState("default");
    console.log("da", movieIndiData)


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
                movieIndiData.map((element, index) => {
                    return (
                        <div key={index}>

                            {CardMovie(element.image, element.url, element.title)}

                        </div>)
                })}
        </div>
    )
}

export default MovieIndi;