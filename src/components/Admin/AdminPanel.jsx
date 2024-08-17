import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Avatar,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { Home, Dashboard, TrackChanges, ExitToApp, DirectionsBoat } from '@mui/icons-material';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const [openProfileDialog, setOpenProfileDialog] = useState(false);
  const [userDetails, setUserDetails] = useState({
    username: 'Admin',
    email: 'admin@example.com',
    phone: '123-456-7890',
  });
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // 600px or less
  const isExtraSmallScreen = useMediaQuery('(max-width:425px)'); // 425px or less

  const handleProfileIconClick = () => {
    setOpenProfileDialog(true);
  };

  const handleCloseProfileDialog = () => {
    setOpenProfileDialog(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails(prevDetails => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Here you can add logic to save the changes to your backend or state
    console.log('Saved user details:', userDetails);
    handleCloseProfileDialog();
  };

  const handleLogout = () => {
    // Here you can add logic to clear authentication tokens or session data
    console.log('User logged out');
    navigate('/login');
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <Box
        sx={{
          width: isExtraSmallScreen ? 60 : (isSmallScreen ? 200 : 250), // Adjust sidebar width
          bgcolor: 'background.paper',
          borderRight: '1px solid #ddd',
          display: 'flex',
          flexDirection: 'column',
          transition: 'width 0.3s ease', // Smooth transition for width change
          overflow: 'auto',
          position: isExtraSmallScreen ? 'fixed' : 'static', // Fixed position for extra small screens
          top: 0,
          left: 0,
          height: '100vh',
          zIndex: 1200, // Ensure it stays on top
        }}
        className="p-2"
      >
        <Typography
          variant="h6"
          sx={{ mb: 2, textAlign: 'center', display: isExtraSmallScreen ? 'none' : 'block' }}
        >
          Customs Clearance Admin
        </Typography>
        <List>
          <ListItem button component={Link} to="dashboard">
            <Dashboard sx={{ mr: 2, fontSize: isExtraSmallScreen ? 20 : 24 }} />
            <ListItemText primary="Dashboard" sx={{ display: isExtraSmallScreen ? 'none' : 'block' }} />
          </ListItem>
          <ListItem button component={Link} to="entries">
            <Home sx={{ mr: 2, fontSize: isExtraSmallScreen ? 20 : 24 }} />
            <ListItemText primary="Entries" sx={{ display: isExtraSmallScreen ? 'none' : 'block' }} />
          </ListItem>
          <ListItem button component={Link} to="ship-tracking">
            <TrackChanges sx={{ mr: 2, fontSize: isExtraSmallScreen ? 20 : 24 }} />
            <ListItemText primary="Ship Tracking" sx={{ display: isExtraSmallScreen ? 'none' : 'block' }} />
          </ListItem>
          <ListItem button component={Link} to="ship-management">
            <DirectionsBoat sx={{ mr: 2, fontSize: isExtraSmallScreen ? 20 : 24 }} />
            <ListItemText primary="Ship Management" sx={{ display: isExtraSmallScreen ? 'none' : 'block' }} />
          </ListItem>
          <Divider sx={{ my: 2 }} />
          <ListItem button onClick={handleLogout}>
            <ExitToApp sx={{ mr: 2, fontSize: isExtraSmallScreen ? 20 : 24 }} />
            <ListItemText primary="Logout" sx={{ display: isExtraSmallScreen ? 'none' : 'block' }} />
          </ListItem>
        </List>
      </Box>

      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', marginLeft: isExtraSmallScreen ? 60 : 0 }}>
        <Box
          sx={{
            bgcolor: 'primary.main',
            color: 'white',
            p: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid #ddd',
            position: 'sticky',
            top: 0,
            zIndex: 1100,
          }}
          className="shadow-md"
        >
          <Typography variant="h6">Admin Panel</Typography>
          <IconButton
            color="inherit"
            onClick={handleProfileIconClick}
            sx={{
              '&:hover': {
                backgroundColor: 'transparent',
              },
              color: 'inherit',
            }}
          >
            <Avatar sx={{ bgcolor: 'secondary.main' }}>A</Avatar>
          </IconButton>
        </Box>

        <Box
          sx={{
            flex: 1,
            p: 4,
            overflowY: 'auto',
            bgcolor: 'background.default',
            marginLeft: isExtraSmallScreen ? 60 : 0, // Adjust content margin for small screens
          }}
          className="bg-gray-100"
        >
          <Outlet />
        </Box>
      </Box>

      {/* Profile Dialog */}
      <Dialog open={openProfileDialog} onClose={handleCloseProfileDialog}>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Username"
            name="username"
            type="text"
            fullWidth
            variant="outlined"
            value={userDetails.username}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Email"
            name="email"
            type="email"
            fullWidth
            variant="outlined"
            value={userDetails.email}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Phone Number"
            name="phone"
            type="tel"
            fullWidth
            variant="outlined"
            value={userDetails.phone}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseProfileDialog}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AdminPanel;
