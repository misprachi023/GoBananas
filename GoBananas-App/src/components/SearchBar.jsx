// src/components/SearchBar.jsx
import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchTerm);
  };

  return (
    <Grid container spacing={2} sx={{ marginBottom: '20px', justifyContent: 'center' }}>
      <Grid item xs={12} md={6}>
        <TextField
          label="Search"
          variant="outlined"
          fullWidth
          size="medium"
          value={searchTerm}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleSearchClick}
          size="large"
          sx={{ height: '90%' }} 
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
