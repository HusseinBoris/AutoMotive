import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container-custom mx-auto py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">Auto<span className="text-white">Motive</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
              Home
            </NavLink>
            <NavLink to="/blog" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
              Blog
            </NavLink>
            <NavLink to="/community" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
              Community
            </NavLink>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="nav-link" aria-label="Search">
              <Search size={20} />
            </button>
            <button className="nav-link" aria-label="Notifications">
              <Bell size={20} />
            </button>
            <Link to="/profile" className="btn btn-primary flex items-center space-x-2">
              <User size={16} />
              <span>Profile</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text-primary focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-surface rounded-lg p-4 shadow-custom">
            <nav className="flex flex-col space-y-4">
              <NavLink 
                to="/" 
                className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
              <NavLink 
                to="/blog" 
                className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                Blog
              </NavLink>
              <NavLink 
                to="/community" 
                className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                Community
              </NavLink>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <button className="nav-link" aria-label="Search">
                  <Search size={20} />
                </button>
                <button className="nav-link" aria-label="Notifications">
                  <Bell size={20} />
                </button>
                <Link 
                  to="/profile" 
                  className="btn btn-primary flex items-center space-x-2"
                  onClick={() => setIsOpen(false)}
                >
                  <User size={16} />
                  <span>Profile</span>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;