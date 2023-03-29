import { Header } from '../index.js';
import './page.css';

export default function Page({ children }) {
  return (
    <>
      <Header />
      <main className="main">{children}</main>
    </>
  );
}
