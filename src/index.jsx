
import { createRoot } from 'react-dom/client';
import './index.css';
import { TicketApp } from './TicketApp';
//import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";



createRoot( document.getElementById( 'root' ) ).render(
  <BrowserRouter>
    <TicketApp />
  </BrowserRouter>
  

);
