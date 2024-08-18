import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Box, Typography, Grid } from '@mui/material';

const Import = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Import form submitted:', data);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} p={2} maxWidth="800px" mx="auto">
      <Grid container spacing={1}>
        {/* Importer Details */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Import Details
          </Typography>
          <Controller
            name="importerName"
            control={control}
            defaultValue=""
            rules={{ required: 'Importer Name is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Importer Name"
                fullWidth
                variant="outlined"
                margin="dense"
                error={!!errors.importerName}
                helperText={errors.importerName?.message}
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            name="importerPhoneNumber"
            control={control}
            defaultValue=""
            rules={{ required: 'Importer Phone Number is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Importer Phone Number"
                fullWidth
                variant="outlined"
                margin="dense"
                type="tel"
                error={!!errors.importerPhoneNumber}
                helperText={errors.importerPhoneNumber?.message}
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            name="importerEmail"
            control={control}
            defaultValue=""
            rules={{ required: 'Importer Email is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Importer Email"
                fullWidth
                variant="outlined"
                margin="dense"
                type="email"
                error={!!errors.importerEmail}
                helperText={errors.importerEmail?.message}
              />
            )}
          />
        </Grid>

        {/* Ship Details */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Ship Details
          </Typography>
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
                margin="dense"
                error={!!errors.shipName}
                helperText={errors.shipName?.message}
              />
            )}
          />
        </Grid>

        {/* Export Details */}
        <Grid item xs={12}>
          <Controller
            name="exportDetails"
            control={control}
            defaultValue=""
            rules={{ required: 'Export Details are required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Export Details"
                fullWidth
                variant="outlined"
                margin="dense"
                multiline
                rows={2}
                error={!!errors.exportDetails}
                helperText={errors.exportDetails?.message}
              />
            )}
          />
        </Grid>

        {/* Product Details */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Product Details
          </Typography>
          <Controller
            name="productName"
            control={control}
            defaultValue=""
            rules={{ required: 'Product Name is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Product Name"
                fullWidth
                variant="outlined"
                margin="dense"
                error={!!errors.productName}
                helperText={errors.productName?.message}
              />
            )}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Controller
            name="productWeight"
            control={control}
            defaultValue=""
            rules={{ required: 'Product Weight is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Product Weight"
                fullWidth
                variant="outlined"
                margin="dense"
                type="number"
                error={!!errors.productWeight}
                helperText={errors.productWeight?.message}
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            name="productDescription"
            control={control}
            defaultValue=""
            rules={{ required: 'Product Description is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Product Description"
                fullWidth
                variant="outlined"
                margin="dense"
                multiline
                rows={2}
                error={!!errors.productDescription}
                helperText={errors.productDescription?.message}
              />
            )}
          />
        </Grid>

        {/* Source Country */}
        <Grid item xs={12}>
          <Controller
            name="sourceCountry"
            control={control}
            defaultValue=""
            rules={{ required: 'Source Country is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Source Country"
                fullWidth
                variant="outlined"
                margin="dense"
                error={!!errors.sourceCountry}
                helperText={errors.sourceCountry?.message}
              />
            )}
          />
        </Grid>
      </Grid>

      <Box className="flex justify-end mt-3">
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Import;
