import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaSearch,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaChevronDown,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom"; // Added useLocation

import logo from "../assets/logo.png";


const categories = [
  "Construction",
  "Agriculture",
  "Industrial",
  "Wood Working",
  "Material Handling",
  "Attachments",
  "Uncategorized",
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation(); // Added useLocation hook

  // Helper function to check if a path is active
  const isActive = (path: string): boolean => {
    return location.pathname === path;
  };

  // Format category name for URL
  const formatCategoryUrl = (category: string): string => {
    return `/category/${category.toLowerCase().replace(/\s+/g, '-')}`;
  };

  return (
    <header>
      {/* TOP BAR */}
      <div style={styles.topbar}>
        <div style={styles.topLeft}>
          <FaFacebookF style={styles.icon} />
          <FaInstagram style={styles.icon} />
        </div>

        <div style={styles.topRight}>
          <span style={styles.info}><FaEnvelope /> info@actaxsolutions.in</span>
          <span style={styles.info}><FaPhoneAlt /> +918076699897</span>
          <span style={styles.info}>
            <FaMapMarkerAlt /> Ghaziabad Uttar Pradesh 201005 India
          </span>
        </div>
      </div>

      {/* NAVBAR */}
      <nav style={styles.navbar}>
        <Link to="/" style={styles.logoLink}>
          <img src={logo} style={styles.logo} alt="Logo" />
        </Link>

        <ul style={styles.menu}>
          <li style={{
            ...styles.menuItem,
            ...(isActive('/') ? styles.active : {})
          }}>
            <Link to="/" style={styles.link}>Home</Link>
          </li>
          
          <li style={{
            ...styles.menuItem,
            ...(isActive('/about') ? styles.active : {})
          }}>
            <Link to="/about" style={styles.link}>About us</Link>
          </li>
          
          <li style={{
            ...styles.menuItem,
            ...(isActive('/contact') ? styles.active : {})
          }}>
            <Link to="/contact" style={styles.link}>Contact</Link>
          </li>
          
          {/* DROPDOWN */}
          <li
            style={styles.menuItem}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <div style={styles.dropdownTitle}>
              All Categories <FaChevronDown style={{ fontSize: 12 }} />
            </div>

            {open && (
              <div style={styles.dropdown}>
                {categories.map((item: string, i: number) => (
                  <Link
                    key={i}
                    to={formatCategoryUrl(item)}
                    style={styles.dropdownItem}
                    onClick={() => setOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </li>
        </ul>
        
        <button style={styles.searchButton}>
          <FaSearch style={styles.search} />
        </button>
      </nav>
    </header>
  );
};

export default Header;

// Properly typed styles
interface Styles {
  [key: string]: React.CSSProperties;
}

const styles: Styles = {
  topbar: {
    background: "#1b2a41",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    padding: "8px 40px",
    fontSize: "14px",
    alignItems: "center",
    flexWrap: "wrap", // Added for responsiveness
  },
  topLeft: { 
    display: "flex", 
    gap: "15px" 
  },
  icon: { 
    cursor: "pointer" 
  },
  topRight: { 
    display: "flex", 
    gap: "25px", 
    alignItems: "center",
    flexWrap: "wrap", // Added for responsiveness
  },
  info: { 
    display: "flex", 
    gap: "8px", 
    alignItems: "center" 
  },
 navbar: {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0.1rem 2rem',   // ↓ reduced height
  backgroundColor: '#c9a227',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  flexWrap: "wrap",
},

  logoLink: {
    textDecoration: 'none',
  },
  logo: {
    height: '100px',
    width: 'auto',
    cursor: 'pointer',
  },
  menu: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    gap: '2rem',
    flexWrap: "wrap", // Added for responsiveness
  },
  menuItem: {
    position: 'relative',
    padding: '0.5rem 0',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 500,
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    transition: 'color 0.3s ease',
  },
  active: {
    color: '#c9a227',
    borderBottom: '2px solid #007bff',
  },
  dropdownTitle: {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  color: '#fff',
},

dropdown: {
  position: 'absolute',
  top: '100%',              // ⭐ should be below menu, not 40%
  left: 0,
  backgroundColor: '#ffffff',  // ⭐ correct white color
  boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
  borderRadius: '6px',
  padding: '8px 0',
  minWidth: '220px',
  zIndex: 9999,
},

dropdownItem: {
  display: 'block',
  padding: '12px 18px',
  color: '#333333',          // ⭐ black text
  textDecoration: 'none',
  transition: '0.2s',
  cursor: 'pointer',
},

  searchButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    fontSize: '1.2rem',
    color: '#fff',
  },
};