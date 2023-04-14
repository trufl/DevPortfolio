import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';

// Helps apply TailwindCSS to MUI components
import GlobalCssPriorityProvider from './Utils/GlobalCssPriorityProvider/GlobalCssPriorityProvider';
import PlainCssPriorityProvider from './Utils/PlainCssPriorityProvider/PlainCssPriorityProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GlobalCssPriorityProvider>
    <PlainCssPriorityProvider>
        <CssBaseline />
        <App />
    </PlainCssPriorityProvider>
  </GlobalCssPriorityProvider>
);