import React from "react";
import ReactHlsPlayer from 'react-hls-player';

const Contact = () => {
    return (
        <div className="container">
        <div className="py-4">
          <h1>Adult swim home</h1>
          <ReactHlsPlayer
                    src="https://adultswim-vodlive.cdn.turner.com/live/test-2/stream_de.m3u8"
                    autoPlay={false}
                    controls={true}
                    width="70%"
                    height="auto"
                />
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    )
}

export default Contact;