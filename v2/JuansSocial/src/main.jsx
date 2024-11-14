
import { createRoot } from 'react-dom/client'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/myHeader';
import LandingPage from './pages/landingPage';
import Dashboard from './pages/dashboard';
import ProtectedRoute from './utils/protectedRoute';

import { StrictMode } from 'react';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
      <StrictMode>
            <Header />
            <BrowserRouter>
                  <Routes>
                        <Route path='/' element={<LandingPage/>}/>
                        <Route path='/dashboard' element={
                        <ProtectedRoute>
                              <Dashboard/>
                        </ProtectedRoute>
                        }/>
                  </Routes>
            </BrowserRouter>
      </StrictMode>

)
