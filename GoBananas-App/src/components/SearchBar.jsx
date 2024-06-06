import React from 'react';
import { TextField, Box, Grid } from '@mui/material';

const SearchBar = ({ onSearch }) => (
  <Box sx={{ flexGrow: 1, padding: '20px' }}>
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={10} md={8} lg={6}>
        <TextField
          label="Search"
          variant="outlined"
          fullWidth
          size="medium" 
          onChange={(e) => onSearch(e.target.value)}
        />
      </Grid>
    </Grid>
  </Box>
);

export default SearchBar;
