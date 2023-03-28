import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import {
  Home,
  Adoption,
  Gallery,
  Contact,
  Signup,
  Login,
} from './pages/index.js';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adoption" element={<Adoption />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

async function main() {
  const root = document.createElement('div');
  document.querySelector('body').appendChild(root);
  ReactDOM.createRoot(root).render(<App />);
}

main();
