import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, CardActions, IconButton, Tooltip, Drawer } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import Entries from './Entries'; // Import Entries component

const ShipManagement = () => {
  const [ships, setShips] = useState([
    {
      id: 1,
      portName: 'Port A',
      shipName: 'HMS Victory',
      maxCapacity: '3,500 tons',
      currentLoad: '1,000 tons',
      boardingDate: '2024-08-01',
      departureDate: '2024-08-05',
      pricing: 'Standard',
      pricePerTon: '100 USD',
      weight: '500 tons'
    },
    {
      id: 2,
      portName: 'Port B',
      shipName: 'USS Enterprise',
      maxCapacity: '5,600 tons',
      currentLoad: '2,000 tons',
      boardingDate: '2024-08-10',
      departureDate: '2024-08-15',
      pricing: 'Premium',
      pricePerTon: '150 USD',
      weight: '800 tons'
    },
    // Add more sample data if needed
  ]);
  const [editingShip, setEditingShip] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleEdit = (ship) => {
    setEditingShip(ship);
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
    setEditingShip(null);
  };

  const handleUpdateShip = (updatedShip) => {
    setShips(ships.map(ship => ship.id === updatedShip.id ? updatedShip : ship));
    handleCloseDrawer();
  };

  const handleDelete = (id) => {
    setShips(ships.filter(ship => ship.id !== id));
  };

  return (
    <Box className="p-4">
      <Typography variant="h5" sx={{ mb: 4 }}>Ship Management</Typography>

      <Grid container spacing={4}>
        {ships.map((ship) => (
          <Grid item xs={12} sm={6} md={4} key={ship.id}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6">{ship.shipName}</Typography>
                <Typography variant="body2" color="textSecondary">Port Name: {ship.portName}</Typography>
                <Typography variant="body2" color="textSecondary">Max Capacity: {ship.maxCapacity}</Typography>
                <Typography variant="body2" color="textSecondary">Current Load: {ship.currentLoad}</Typography>
                <Typography variant="body2" color="textSecondary">Boarding Date: {ship.boardingDate}</Typography>
                <Typography variant="body2" color="textSecondary">Departure Date: {ship.departureDate}</Typography>
                <Typography variant="body2" color="textSecondary">Pricing: {ship.pricing}</Typography>
                <Typography variant="body2" color="textSecondary">Price Per Ton: {ship.pricePerTon}</Typography>
                <Typography variant="body2" color="textSecondary">Weight: {ship.weight}</Typography>
              </CardContent>
              <CardActions>
                <Tooltip title="Edit Ship">
                  <IconButton color="primary" onClick={() => handleEdit(ship)}>
                    <Edit />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete Ship">
                  <IconButton color="secondary" onClick={() => handleDelete(ship.id)}>
                    <Delete />
                  </IconButton>
                </Tooltip>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleCloseDrawer}
        sx={{ width: 400 }}
      >
        <Box p={2} sx={{ width: 400 }}>
          <Entries
            initialData={editingShip}
            onUpdate={handleUpdateShip}
            onClose={handleCloseDrawer}
          />
        </Box>
      </Drawer>
    </Box>
  );
};

export default ShipManagement;
