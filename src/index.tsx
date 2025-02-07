import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from './components/ui/provider';

import App from './App';

import "./styles/reset.css"
import "./styles/index.css"

const root = ReactDOM.createRoot(document.getElementById('root') as any);
root.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);