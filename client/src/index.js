// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './AuthContext.js';
import { MovieProvider } from './MovieContext.js';
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Router>
      <MovieProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </MovieProvider>
    </Router>
);
