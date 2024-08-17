import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  IconButton,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  MenuItem,
  Select,
  Tooltip,
  Chip
} from '@mui/material';
import { Edit, Delete, EmojiTransportation } from '@mui/icons-material';
import { useForm, Controller } from 'react-hook-form';

const initialShips = [
  { id: 1, name: 'Ship 1', status: 'Docked', arrival: '2024-08-17', departure: '2024-08-20' },
  { id: 2, name: 'Ship 2', status: 'In Transit', arrival: '2024-08-20', departure: '2024-08-30' },
  { id: 3, name: 'Ship 3', status: 'Out of Service', arrival: '2024-08-25', departure: '2024-09-01' },
];

const ShipTracking = () => {
  const [ships, setShips] = useState(initialShips);
  const [selectedShip, setSelectedShip] = useState(null);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const { control, handleSubmit, reset, formState: { errors } } = useForm();

  const handleOpenDialog = (ship) => {
    setSelectedShip(ship);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedShip(null);
    reset();
  };

  const onSubmit = (data) => {
    // Update ship details
    setShips(ships.map(ship => 
      ship.id === selectedShip.id ? { ...ship, ...data } : ship
    ));
    handleCloseDialog();
  };

  const handleDelete = (id) => {
    setShips(ships.filter(ship => ship.id !== id));
  };

  return (
    <Box className="p-4">
      <Typography variant="h5" sx={{ mb: 4 }}>Ship Tracking</Typography>

      <Grid container spacing={4}>
        {ships.map((ship) => (
          <Grid item xs={12} sm={6} md={4} key={ship.id}>
            <Card sx={{ boxShadow: 3, borderRadius: 2, overflow: 'visible' }}>
              <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                <EmojiTransportation sx={{ fontSize: 50, mr: 2 }} />
                <Box>
                  <Typography variant="h6">{ship.name}</Typography>
                  <Chip label={ship.status} color={ship.status === 'Docked' ? 'info' : ship.status === 'In Transit' ? 'warning' : 'error'} />
                  <Typography variant="body2" color="textSecondary">Arrival: {ship.arrival}</Typography>
                  <Typography variant="body2" color="textSecondary">Departure: {ship.departure}</Typography>
                </Box>
              </CardContent>
              <CardActions sx={{ justifyContent: 'flex-end' }}>
                <Tooltip title="Edit Details">
                  <IconButton onClick={() => handleOpenDialog(ship)} color="primary">
                    <Edit />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete Ship">
                  <IconButton onClick={() => handleDelete(ship.id)} color="secondary">
                    <Delete />
                  </IconButton>
                </Tooltip>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Update Ship Details</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="status"
              control={control}
              defaultValue={selectedShip?.status || 'Docked'}
              render={({ field }) => (
                <Select
                  {...field}
                  label="Status"
                  fullWidth
                  margin="normal"
                  error={!!errors.status}
                >
                  <MenuItem value="Docked">Docked</MenuItem>
                  <MenuItem value="In Transit">In Transit</MenuItem>
                  <MenuItem value="Out of Service">Out of Service</MenuItem>
                </Select>
              )}
              rules={{ required: 'Status is required' }}
            />
            <Controller
              name="arrival"
              control={control}
              defaultValue={selectedShip?.arrival || ''}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Arrival Date"
                  type="date"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                  error={!!errors.arrival}
                />
              )}
              rules={{ required: 'Arrival date is required' }}
            />
            <Controller
              name="departure"
              control={control}
              defaultValue={selectedShip?.departure || ''}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Departure Date"
                  type="date"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                  error={!!errors.departure}
                />
              )}
              rules={{ required: 'Departure date is required' }}
            />
            <DialogActions>
              <Button onClick={handleCloseDialog} color="secondary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Update Details
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default ShipTracking;
