import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css'
import store from './Redux/store';
import 'react-tooltip/dist/react-tooltip.css'
import 'leaflet/dist/leaflet.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
