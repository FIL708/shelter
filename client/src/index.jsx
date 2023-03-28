import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/adoption" element={<h1>Adoption</h1>} />
        <Route path="/gallery" element={<h1>Gallery</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/signup" element={<h1>SignUp</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>;
};

function main() {
  const root = document.createElement('div');
  document.querySelector('body').appendChild(root);
  ReactDOM.createRoot(root).render(<App />);
}

main();
