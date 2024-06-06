// src/pages/HomePage.jsx
import React, { useState } from 'react';
import { fetchMovies } from '../api';
import ItemList from '../components/ItemList';
import SearchBar from '../components/SearchBar';
import { Box, Container, Typography } from '@mui/material';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchError, setSearchError] = useState(false); // State to track search error

  const handleSearch = async (query) => {
    setSearchTerm(query);
    const fetchedMovies = await fetchMovies(query);
    if (fetchedMovies.length === 0) {
      setSearchError(true); // Set search error to true if no movies are found
    } else {
      setSearchError(false); // Reset search error if movies are found
    }
    setMovies(fetchedMovies);
  };

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '20vh',
          textAlign: 'center',
          color: 'brown',
        }}
      >
        <Typography variant="h4" gutterBottom>
           Movie Search App
        </Typography>
      </Box>
      <SearchBar onSearch={handleSearch} />
      {searchTerm && searchError && ( // Display message if search term is entered and no movies are found
        <Typography variant="h6" sx={{ margin: '20px 0', color: 'red' }}>
          No movies found for "{searchTerm}"
        </Typography>
      )}
      {searchTerm && !searchError && ( // Display search results if search term is entered and movies are found
        <>
          <Typography variant="h6" sx={{ margin: '20px 0', color: 'green' }}>
            Results for "{searchTerm}"
          </Typography>
          <ItemList items={movies} />
        </>
      )}
    </Container>

    
    
  );
};

export default HomePage;
