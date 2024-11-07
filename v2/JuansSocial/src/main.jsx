
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/myHeader';
import FormExample from './pages/landingPage';
import { Container, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './pages/landingPage';
import { StrictMode } from 'react';


createRoot(document.getElementById('root')).render(
      <StrictMode>
      <Header/>
      <LandingPage/> 
  
      </StrictMode>

)
