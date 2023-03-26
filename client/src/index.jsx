import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
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
