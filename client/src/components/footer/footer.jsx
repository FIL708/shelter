import './footer.css';
import logo from './assets/logo.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="shelter logo" className="footer__logo" />
    </footer>
  );
}
