import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="navbar fixed top-0 z-50 px-6 lg:px-8 border-b border-base-300/20 bg-transparent backdrop-blur-none">
      <div className="navbar-start flex items-center">
        <Link to="/" className="flex items-center" style={{ minHeight: '4rem' }}>
          <img
            src="/logo.png"
            alt="Cesta Logo"
            className="h-16 w-auto drop-shadow-lg select-none"
            style={{ maxHeight: '4rem' }}
            draggable="false"
          />
        </Link>
      </div>
      <div className="navbar-end flex-1 flex items-center justify-end">
        <ul className="menu menu-horizontal px-1 space-x-8 hidden lg:flex">
          {navItems.map((item) => (
            <li key={item.path} className="flex items-center">
              <Link
                to={item.path}
                className={`px-4 py-2 rounded-lg transition-colors duration-200 font-medium text-base flex items-center
                  ${location.pathname === item.path ? 'border-b-2 border-primary text-primary' : 'hover:text-primary hover:border-b-2 hover:border-primary'}`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile menu */}
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-lg bg-base-200/90 rounded-box w-52 space-y-2 text-base">
            {navItems.map((item) => (
              <li key={item.path} className="flex items-center">
                <Link
                  to={item.path}
                  className={`px-4 py-2 rounded-lg transition-colors duration-200 font-medium flex items-center
                    ${location.pathname === item.path ? 'border-b-2 border-primary text-primary' : 'hover:text-primary hover:border-b-2 hover:border-primary'}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar; 