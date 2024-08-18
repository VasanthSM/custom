import React, { useState, useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import {
  Button, Box, Typography, Container, TextField, Card, CardContent, Grid, AppBar, Toolbar, InputAdornment, Dialog, DialogActions, DialogContent, DialogTitle
} from '@mui/material';
import { useSpring, animated } from 'react-spring';
import Slider from 'react-slick';
import { format, subDays } from 'date-fns';
import SearchIcon from '@mui/icons-material/Search';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import TermsIcon from '@mui/icons-material/Assignment';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import CargoShip from "../../assets/cargo.jpg";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Mock data
const ships = [
  { id: 1, name: 'Ship A', date: new Date() },
  { id: 2, name: 'Ship B', date: subDays(new Date(), 2) },
  { id: 3, name: 'Ship C', date: subDays(new Date(), 8) },
];

const User = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredShips, setFilteredShips] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedShip, setSelectedShip] = useState(null);
  const navigate = useNavigate();

  // Carousel settings
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Spring animation
  const springProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  useEffect(() => {
    const oneWeekAgo = subDays(new Date(), 7);
    const result = ships.filter(
      (ship) =>
        ship.date >= oneWeekAgo && ship.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredShips(result);
  }, [searchTerm]);

  const handleOpenDialog = (ship) => {
    setSelectedShip(ship);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedShip(null);
  };

  const handleNavigation = (type) => {
    handleCloseDialog();
    navigate(`/user/${type}`);
  };

  return (
    <div className="relative">
      {/* Header */}
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Typography variant="h5" className="flex-grow text-center">
            GlobalGate Customs
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" className="relative z-10 flex flex-col items-center justify-center">
        {/* Carousel */}
        <Slider {...carouselSettings} className="my-8 w-full">
          <div>
            <img src={CargoShip} alt="Cargo" height="100px" width="auto" />
          </div>
          <div>
            <img src={CargoShip} alt="Ship" height="100px" width="auto" />
          </div>
          <div>
            <img src={CargoShip} alt="Port" height="100px" width="auto" />
          </div>
          <div>
            <img src={CargoShip} alt="Port" height="100px" width="auto" />
          </div>
        </Slider>

        {/* Unique Content */}
        <animated.div style={springProps}>
          <Typography variant="h3" align="center" className="mb-10 text-2xl md:text-4xl font-bold text-gray-800">
            Streamline Your Customs Clearance
          </Typography>
          <Typography variant="body1" align="center" className="mb-6 text-lg text-gray-600">
            Our Customs Clearance System simplifies the process of exporting and importing goods across borders. 
            Manage your shipments efficiently with our advanced tracking and documentation features.
          </Typography>
        </animated.div>

        {/* Search Bar */}
        <Box className="my-8 w-full max-w-md flex justify-end">
          <TextField
            fullWidth
            label="Search Ships"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Ships List */}
        <Typography variant="h5" align="center" className="mb-4 text-2xl font-bold text-gray-800">
          Available Ships
        </Typography>
        <Grid container spacing={2}>
          {filteredShips.map((ship) => (
            <Grid item xs={12} sm={6} md={4} key={ship.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {ship.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Last updated: {format(ship.date, 'MMM d, yyyy')}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleOpenDialog(ship)}
                    className="mt-2"
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        {/* Footer */}
        <Box component="footer" className="w-full mt-10 py-6 bg-gray-900 text-white text-center">
          <Typography variant="body2" className="mb-2">
            © {new Date().getFullYear()} GlobalGate Customs. All rights reserved.
          </Typography>
          <Box mt={2} className="flex justify-center">
            <Button href="/privacy" startIcon={<PrivacyTipIcon />} className="text-white mx-2">
              Privacy Policy
            </Button>
            <Button href="/terms" startIcon={<TermsIcon />} className="text-white mx-2">
              Terms of Service
            </Button>
          </Box>
          <Box mt={2}>
            <Typography variant="body2">
              Follow us:
              <div className='flex gap-4 justify-center mt-2'>
                <p>Twitter <TwitterIcon /></p>
                <p>LinkedIn <LinkedInIcon /></p>
                <p>Instagram <InstagramIcon /></p>
              </div>
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* Ship Details Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        PaperProps={{
          sx: {
            width: '400px',
            maxWidth: '90%',
            padding: 2,
            borderRadius: '16px',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          },
        }}
      >
        <DialogTitle
          sx={{
            fontSize: '1.25rem',
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#1976d2',
            position: 'relative',
          }}
        >
          Ship Details
          <Button
            onClick={handleCloseDialog}
            sx={{
              position: 'absolute',
              right: 16,
              top: 16,
              color: '#1976d2',
            }}
          >
            X
          </Button>
        </DialogTitle>
        <DialogContent
          sx={{
            paddingTop: 2,
            paddingBottom: 2,
          }}
        >
          <Typography variant="body1">
            You have selected {selectedShip?.name}. Would you like to proceed as an Importer or Exporter?
          </Typography>
        </DialogContent>
        <DialogActions
          sx={{
            padding: '8px',
            justifyContent: 'center',
          }}
        >
          <Button
            onClick={() => handleNavigation('import')}
            variant="contained"
            color="primary"
            sx={{
              fontWeight: 'bold',
              borderRadius: '12px',
              padding: '8px 16px',
              backgroundColor: '#1976d2',
              '&:hover': {
                backgroundColor: '#155a8a',
              },
            }}
          >
            Import
          </Button>
          <Button
            onClick={() => handleNavigation('export')}
            variant="contained"
            color="primary"
            sx={{
              fontWeight: 'bold',
              borderRadius: '12px',
              padding: '8px 16px',
              backgroundColor: '#1976d2',
              '&:hover': {
                backgroundColor: '#155a8a',
              },
            }}
          >
            Export
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default User;
