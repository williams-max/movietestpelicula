import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactHlsPlayer from 'react-hls-player';

const Home = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        console.log("oh !!")
        loadUsers();
    }, [])

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/users");
        setUser(result.data.reverse());
        console.log(result.data);
    }

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();
    };

    return (
        <div className="container">
            <div className="py-4">
                <h1 >
                    pagina en desarrollo tv sport ,series , movies and other
                </h1>

                <ReactHlsPlayer
                    src="http://190.210.221.119/Processor3_9_chunklist_b1300000.m3u8"
                    autoPlay={false}
                    controls={true}
                    width="70%"
                    height="auto"
                />

                <table className="table border shadow">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link className="btn btn-primary mr-2" to={`/users/${user.id}`}>
                                        View
                                    </Link>
                                    <Link
                                        className="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}>
                                        Edit
                                    </Link>
                                    <Link
                                        className="btn btn-danger" to="#" onClick={() => deleteUser(user.id)}>
                                        Delete
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home;