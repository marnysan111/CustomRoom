import React from 'react';
import {Link} from "react-router-dom"
import PostCard from '../components/postCard';
import '../assets/css/home.css';

const Home = () => {
    return (
        <div className='back-color'>
        <Link to="/">Top</Link>

            <h1>Home</h1>
            <PostCard />
        </div>
    )
}

export default Home;
