import React, { useState } from "react";
import { Home, Mail, Calendar, PlusCircle, LogIn, Ticket } from "lucide-react";
import ProfileMenu from './ProfileMenu';
import { useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isLoggedIn = location.pathname !== '/login' && location.pathname !== '/signup';

  return (
    <header className="navbar-header">
      <nav className="navbar">
        {/* Brand */}
        <div className="brand">
          <Ticket size={24} className="brand-icon" />
          <span className="brand-primary">Ents24</span>
        </div>

        {/* Hamburger menu (mobile) */}
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        {/* Nav links */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <a href="/"><Home size={18}/> Home</a>
          </li>
          <li>
            <a href="/contact"><Mail size={18}/> Contact</a>
          </li>
          <li>
            <a href="/events"><Calendar size={18}/> Events</a>
          </li>
          <li>
            <a href="/create-event"><PlusCircle size={18}/> Create Event</a>
          </li>
        </ul>

        {/* Login button or Profile Menu */}
        <div className="nav-cta">
          {isLoggedIn ? (
            <ProfileMenu />
          ) : (
            <a href="/login" className="btn btn-primary"><LogIn size={18}/> Login</a>
          )}
        </div>
      </nav>
    </header>
  );
}
