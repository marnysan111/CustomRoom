import React from 'react';
import {Link} from "react-router-dom"
import Header from '../components/header';

const Login = () => {
    return (
        <>
        <Header />

        <div className='login'>
        <Link to="/top">Top</Link>
        <Link to="/home">Home</Link>

            <h1>Login</h1>
        </div>
        </>
    )
}

export default Login;