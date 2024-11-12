import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignIn from '../components/Auth/SignIn';
import SignUp from '../components/Auth/SignUp';
import Profile from '../components/Profile';
import FreeReading from '../components/FreeReading';
import LiveReading from '../components/LiveReading';
import PrivateRoute from '../utils/PrivateRoute';
import Home from '../components/Home'; 

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signin" element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
    <Route path="/free-reading" element={<PrivateRoute><FreeReading /></PrivateRoute>} />
    <Route path="/live-reading" element={<LiveReading />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default AppRoutes;
