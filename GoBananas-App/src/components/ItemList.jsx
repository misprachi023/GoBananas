import React from 'react';
import { List, ListItem, ListItemText, Box } from '@mui/material';

const ItemList = ({ items }) => (
  <List>
    {items.map(item => (
      <ListItem key={item.id}>
        <Box 
          sx={{ 
            border: '1px solid #ccc', 
            borderRadius: '8px', 
            padding: '16px', 
            backgroundColor: '#f9f9f9', 
            width: '100%'
          }}
        >
          <ListItemText 
            primary={item.title} 
            secondary={item.body} 
            primaryTypographyProps={{ style: { color: '#333', fontWeight: 'bold' } }}
            secondaryTypographyProps={{ style: { color: '#666' } }}
          />
        </Box>
      </ListItem>
    ))}
  </List>
);

export default ItemList;
