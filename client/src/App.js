// src/App.js
import React,{ useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from './AuthContext.js';
import Navbar from './components/Navbar';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import { useMovieContext } from './MovieContext.js';
import './App.css';
import axios from 'axios';

// const movies = [
//     {
//         id: 1,
//         title: 'Movie 1',
//         longDescription: 'This is a detailed description of Movie 1. It contains more than 50 words about the movie, the plot, the characters, and the overall story. Movie 1 is an excellent film with stunning visuals and an engaging storyline.',
//         director: 'Director 1',
//         cast: ['Actor 1', 'Actor 2', 'Actor 3'],
//         rating: '8.5',
//         image: 'https://via.placeholder.com/150'
//     },
//     {
//         id: 2,
//         title: 'Movie 2',
//         longDescription: 'This is a detailed description of Movie 2. It contains more than 50 words about the movie, the plot, the characters, and the overall story. Movie 2 is an excellent film with stunning visuals and an engaging storyline.',
//         director: 'Director 2',
//         cast: ['Actor 4', 'Actor 5', 'Actor 6'],
//         rating: '7.8',
//         image: 'https://via.placeholder.com/150'
//     },
//     // Add more movies as needed
// ];

const App = () => {

    const {authenticateUser}=useAuth();
    const {movies,setMovies}=useMovieContext();
    let triggerFetchMovies=0;
    
    useEffect(()=>{
        authenticateUser();
        triggerFetchMovies^=1;
    },[]);

    
    const [loading,setLoading]=useState(1);

    const fetchMovies=async()=>{
        const response=await axios.get("http://localhost:4000/api/movies/");
        const data=await response.data;
        setMovies(data.data);
        localStorage.setItem('movies', data);// caching all movies data to client storage.
        setLoading(0);
    }

    useEffect(()=>{
        fetchMovies();
    },[triggerFetchMovies]);

    return (
            <div className="app">
                <Navbar />
                <Routes>
                    <Route path="/" element={loading?<h1>Loading...</h1>:<MovieList />} />
                    <Route path="/movie/:_id" element={<ProtectedRoute element={loading?<h1>Loading...</h1>:<MovieDetail movies={movies} />} />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />
                </Routes>
            </div>
    );
};

export default App;
