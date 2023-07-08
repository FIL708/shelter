import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, HashRouter } from 'react-router-dom';
import {
  Home,
  Adoptions,
  Adoption,
  Gallery,
  Contact,
  Signup,
  Login,
  Test,
  Users,
  Profile,
  Forgot,
  NotFound,
} from 'pages';

export const UserContext = createContext();

function App() {
  return (
    <React.StrictMode>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adoptions" element={<Adoptions />} />
          <Route path="/adoptions/:id" element={<Adoption />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<Users />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/test" element={<Test />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </React.StrictMode>
  );
}

async function main() {
  const config = await fetch('/api/status').then((res) => res.json());
  const root = document.createElement('div');
  document.querySelector('body').appendChild(root);
  ReactDOM.createRoot(root).render(
    <UserContext.Provider value={config}>
      <App />
    </UserContext.Provider>,
  );
}

main();
