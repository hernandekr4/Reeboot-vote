import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Register', path: '/register' },
  { name: 'Pledge', path: '/pledge' },
  { name: 'Status', path: '/status' },
  { name: 'Polling', path: '/polling' },
  { name: 'Guide', path: '/guide' },
  { name: 'State Info', path: '/state' },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-title">Reeboot.vote</div>
      <div className="navbar-links">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`nav-link ${
              location.pathname === item.path ? 'active' : ''
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
