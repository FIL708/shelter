import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import {
  Home,
  Adoption,
  Gallery,
  Contact,
  Signup,
  Login,
  Test,
  Users,
} from './pages';
import NotFound from './pages/not-found';

export const UserContext = createContext();
const user = undefined;

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
          <Route path="/users" element={<Users />} />
          <Route path="/test" element={<Test />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

async function main() {
  const config = await fetch('/api/status').then((res) => res.json());
  console.log(config);

  const root = document.createElement('div');
  document.querySelector('body').appendChild(root);
  ReactDOM.createRoot(root).render(
    <UserContext.Provider value={user}>
      <App />
    </UserContext.Provider>,
  );
}

main();
