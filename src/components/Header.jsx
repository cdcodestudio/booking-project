import '../App.css';
import logo from '../assets/Logo.svg';
import MobileNav from './MobileNav';
import Nav from './Nav';

export default function Header() {
  return (
    <>
      <header>
        <MobileNav />
        <a href="/">
          <img src={logo} alt="little lemon logo" width={200} />
        </a>
        <Nav />
      </header>
    </>
  );
}
