
import { createRoot } from 'react-dom/client'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/myHeader';
import LandingPage from './pages/landingPage';
import Dashboard from './pages/dashboard';
import NavBar from './components/navBar';
import ProtectedRoute from './utils/protectedRoute';
import ProfilePage from './pages/profile';

import { StrictMode } from 'react';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap';


createRoot(document.getElementById('root')).render(
      <StrictMode style={{height:"100vh", width:'100%'}}>
            <Header fluid />
            <BrowserRouter>
                  <Routes>
                        <Route path='/' element={<LandingPage/>}/>
                        <Route path='/dashboard' element={
                        <ProtectedRoute>
                              <NavBar fluid />
                              <Dashboard fluid/>
                        </ProtectedRoute>
                        }/>
                        <Route path='/profile' element={
                        <ProtectedRoute>
                              <NavBar fluid/>
                              <ProfilePage fluid/>
                        </ProtectedRoute>
                        }/>
                  </Routes>
            </BrowserRouter>
      </StrictMode>

)
