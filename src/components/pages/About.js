import React from "react";
import ReactHlsPlayer from 'react-hls-player';
const About = () => {
    return (
        <div className="container">
           <div className="py-4">
              <h1>Planet movie Series</h1>
              <ReactHlsPlayer
                    src="https://scl.edge.grupoz.cl/movie/live/playlist.m3u8"
                    autoPlay={false}
                    controls={true}
                    width="70%"
                    height="auto"
                />
              <p className="lead">
                 dfgsdfjksdfklsdklfskldfklsdkflsdklfk
              </p>
           </div>
        </div>
    )
}

export default About;