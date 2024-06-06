import React from 'react';
import { List, ListItem, ListItemText, Box, Avatar, ListItemAvatar, Typography, Button, Grid } from '@mui/material';

const ItemList = ({ items }) => (
  <List>
    {items.map(item => (
      <ListItem key={item.imdbID} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            variant="rounded"
            src={item.Poster !== "N/A" ? item.Poster : "/default-poster.jpg"} // Default poster if no image
            alt={item.Title}
            sx={{ width: 230, height: 230, marginRight: '16px' }} // Medium size poster
          />
        </ListItemAvatar>
        <Box 
          sx={{ 
            borderRadius: '8px', 
            padding: '25-px', 
            margin: '10px',
            backgroundColor: '#fff', 
            width: '50%',
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography 
            variant="subtitle1" 
            sx={{ fontWeight: 'bold', color: 'blue', fontSize: '20px',marginBottom: '5px' }}
          >
            {item.Title}
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ color: 'black', fontSize: '16px', marginBottom: '10px' }}
          >
            Year: {item.Year}
          </Typography>
          <Grid item>
        <Button 
          variant="contained" 
          color="primary" 
          size="large"
          sx={{ height: '90%' }} 
        >
          Watch Now
        </Button>
      </Grid>
        </Box>
      </ListItem>
    ))}
  </List>
);

export default ItemList;
