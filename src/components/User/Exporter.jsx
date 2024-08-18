import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Box, Typography, Grid } from '@mui/material';

const Export = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Export form submitted:', data);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} p={2} maxWidth="800px" mx="auto">
      <Typography variant="h6" gutterBottom>
        Export Details
      </Typography>

      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Controller
            name="exporterName"
            control={control}
            defaultValue=""
            rules={{ required: 'Exporter Name is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Exporter Name"
                fullWidth
                variant="outlined"
                margin="dense"
                size="small"
                error={!!errors.exporterName}
                helperText={errors.exporterName?.message}
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            name="exporterContact"
            control={control}
            defaultValue=""
            rules={{ required: 'Exporter Contact is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Exporter Contact"
                fullWidth
                variant="outlined"
                margin="dense"
                size="small"
                error={!!errors.exporterContact}
                helperText={errors.exporterContact?.message}
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
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
                size="small"
                error={!!errors.importerName}
                helperText={errors.importerName?.message}
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            name="importerPhone"
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
                size="small"
                error={!!errors.importerPhone}
                helperText={errors.importerPhone?.message}
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
                size="small"
                type="email"
                error={!!errors.importerEmail}
                helperText={errors.importerEmail?.message}
              />
            )}
          />
        </Grid>

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
                size="small"
                error={!!errors.shipName}
                helperText={errors.shipName?.message}
              />
            )}
          />
        </Grid>

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
                size="small"
                multiline
                rows={2}
                error={!!errors.exportDetails}
                helperText={errors.exportDetails?.message}
              />
            )}
          />
        </Grid>

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
                size="small"
                error={!!errors.productName}
                helperText={errors.productName?.message}
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
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
                size="small"
                type="number"
                error={!!errors.productWeight}
                helperText={errors.productWeight?.message}
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            name="destinationCountry"
            control={control}
            defaultValue=""
            rules={{ required: 'Destination Country is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Destination Country"
                fullWidth
                variant="outlined"
                margin="dense"
                size="small"
                error={!!errors.destinationCountry}
                helperText={errors.destinationCountry?.message}
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
                size="small"
                multiline
                rows={2}
                error={!!errors.productDescription}
                helperText={errors.productDescription?.message}
              />
            )}
          />
        </Grid>
      </Grid>

      <Box className="flex justify-end mt-2">
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Export;
