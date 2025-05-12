import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import fireIcon from '@iconify/icons-mdi/fire';
import { Link, useLocation } from 'react-router-dom';
import '../styling/Navbar.css';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

//src / components / Navbar.jsx
export default function Navbar() {
  const { pathname } = useLocation();
  const width = useWindowWidth();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Map', path: '/map' },
    { name: 'Prevention', path: '/prevention' },
    { name: 'Resources', path: '/resources' },
  ];

  return (
    <div className="stack">
      <nav className="navbar">
        <header className="app-header">
          <h1><Icon className="header-icon" icon={fireIcon} /> Wildfire Front</h1>
        </header>
        {width > 800 && <div className={"navbar-container"}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`nav-link ${pathname === item.path ? 'active' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </div>}
      </nav>
      {width <= 800 && (
        <div className="navbar-column">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`nav-link ${pathname === item.path ? 'active' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

