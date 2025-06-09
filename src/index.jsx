
import { createRoot } from 'react-dom/client';
import './index.css';
import { TicketApp } from './TicketApp';
import { ColaPage } from './pages/Cola';
import { BrowserRouter, Routes, Route } from "react-router";



createRoot( document.getElementById( 'root' ) ).render(
  <BrowserRouter>
    <TicketApp />
  </BrowserRouter>
);
