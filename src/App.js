import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import LandingPage from './pages/LandingPage';
import Register from './pages/Register';
import AdminPanel from './components/Admin/AdminPanel';
import Dashboard from './components/Admin/Dashboard';
import Entries from './components/Admin/Entries';
import ShipTracking from './components/Admin/ShipTracking';
import ShipManagement from './components/Admin/ShipManagement'; 
import UserPage from './components/User/UserPage';
import Export from './components/User/Exporter';
import Import from './components/User/Importer';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/admin' element={<AdminPanel />}>
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='entries' element={<Entries />} />
        <Route path='ship-tracking' element={<ShipTracking />} />
        <Route path='ship-management' element={<ShipManagement />} />
      </Route>
      <Route path='/user' element={<UserPage />} />
      <Route path='/user/export' element={<Export />} />
      <Route path='/user/import' element={<Import />} />
    </Routes>
  );
}

export default App;
