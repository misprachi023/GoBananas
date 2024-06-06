// src/pages/HomePage.jsx
import React, { useEffect, useState } from 'react';
import { fetchItems } from '../api';
import ItemList from '../components/ItemList';
import SearchBar from '../components/SearchBar';
import { Container, Typography , Box} from '@mui/material';

//Fetch data from API
const HomePage = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const fetchedItems = await fetchItems();
      setItems(fetchedItems);
      setFilteredItems(fetchedItems);
    };
    getItems();
  }, []);

  //Search function
  const handleSearch = (searchTerm) => {
    const filtered = items.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.body.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <Container>
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          textAlign: 'center',
          color: 'red',

        }}
      >
        <Typography variant="h4" gutterBottom>
          GoBananas App
        </Typography>
      </Box>
      <SearchBar onSearch={handleSearch} />
      <ItemList items={filteredItems} />
    </Container>
  );
};

export default HomePage;
