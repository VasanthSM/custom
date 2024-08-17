import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, MenuItem, Box } from '@mui/material';

const Entries = () => {
  const { control, handleSubmit, reset, formState: { errors } } = useForm();
  const [isConfirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [isSecondForm, setSecondForm] = useState(false);

  const onSubmit = (data) => {
    if (isSecondForm) {
      console.log("Second form submitted", data);
    } else {
      setConfirmDialogOpen(true);
    }
  };

  const handleConfirm = () => {
    setConfirmDialogOpen(false);
    reset(); 
    setSecondForm(true);
  };

  const handleCancel = () => {
    reset(); 
    setConfirmDialogOpen(false);
    setSecondForm(false);
  };

  return (
    <Box className="p-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        {!isSecondForm ? (
          <>
            <Controller
              name="portName"
              control={control}
              defaultValue=""
              rules={{ required: 'Port Name is required' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Port Name"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  error={!!errors.portName}
                  helperText={errors.portName?.message}
                />
              )}
            />
            <Controller
              name="shipName"
              control={control}
              defaultValue=""
              rules={{ required: 'Ship Name is required' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Ship Name"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  error={!!errors.shipName}
                  helperText={errors.shipName?.message}
                />
              )}
            />
            <Controller
              name="maxCapacity"
              control={control}
              defaultValue=""
              rules={{ required: 'Max Capacity is required' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Max Capacity"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  error={!!errors.maxCapacity}
                  helperText={errors.maxCapacity?.message}
                />
              )}
            />
            <Controller
              name="currentLoad"
              control={control}
              defaultValue=""
              rules={{ required: 'Current Load is required' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Current Load"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  error={!!errors.currentLoad}
                  helperText={errors.currentLoad?.message}
                />
              )}
            />
            <Controller
              name="boardingDate"
              control={control}
              defaultValue=""
              rules={{ required: 'Boarding Date is required' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Boarding Date"
                  type="date"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                  error={!!errors.boardingDate}
                  helperText={errors.boardingDate?.message}
                />
              )}
            />
            <Controller
              name="departureDate"
              control={control}
              defaultValue=""
              rules={{ required: 'Departure Date is required' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Departure Date"
                  type="date"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                  error={!!errors.departureDate}
                  helperText={errors.departureDate?.message}
                />
              )}
            />
            <Box className="flex justify-end space-x-4 mt-4">
              <Button variant="outlined" onClick={handleCancel}>Cancel</Button>
              <Button variant="contained" color="primary" type="submit">Confirm</Button>
            </Box>
          </>
        ) : (
          <>
            <Controller
              name="pricing"
              control={control}
              defaultValue=""
              rules={{ required: 'Pricing is required' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Pricing"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  error={!!errors.pricing}
                  helperText={errors.pricing?.message}
                />
              )}
            />
            <Controller
              name="pricePerTon"
              control={control}
              defaultValue=""
              rules={{ required: 'Price per Ton is required' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Price per Ton"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  error={!!errors.pricePerTon}
                  helperText={errors.pricePerTon?.message}
                />
              )}
            />
            <Controller
              name="weight"
              control={control}
              defaultValue=""
              rules={{ required: 'Weight is required' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Weight"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  error={!!errors.weight}
                  helperText={errors.weight?.message}
                />
              )}
            />
            <Controller
              name="shipId"
              control={control}
              defaultValue=""
              rules={{ required: 'Ship ID is required' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  select
                  label="Ship ID"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  error={!!errors.shipId}
                  helperText={errors.shipId?.message}
                >
                  <MenuItem value={1}>Ship 1</MenuItem>
                  <MenuItem value={2}>Ship 2</MenuItem>
                  {/* Add more ship options here */}
                </TextField>
              )}
            />
            <Box className="flex justify-end space-x-4 mt-4">
              <Button variant="outlined" onClick={handleCancel}>Cancel</Button>
              <Button variant="contained" color="primary" type="submit">Confirm</Button>
            </Box>
          </>
        )}
      </form>

      <Dialog
        open={isConfirmDialogOpen}
        onClose={() => setConfirmDialogOpen(false)}
      >
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to confirm this?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleConfirm} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Entries;
