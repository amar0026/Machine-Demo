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
const logo = "/logo.png";
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
  const [open, setOpen] = useState(false);   // ⭐ MISSING STATE FIXED

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
        <img src={logo} style={styles.logo} />

        <ul style={styles.menu}>
          <li style={{...styles.menuItem, ...styles.active }}>Home</li>
          <li style={styles.menuItem}>About us</li>
          <li style={styles.menuItem}>Contact</li>
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
                {categories.map((item, i) => (
                  <div key={i} style={styles.dropdownItem}>
                    {item}
                  </div>
                ))}
              </div>
            )}
          </li>
        </ul>
        <FaSearch style={styles.search} />
      </nav>
    </header>
  );
};

export default Header;

const styles: any = {
  topbar: {
    background: "#c9a227",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    padding: "8px 40px",
    fontSize: "14px",
    alignItems: "center",
  },
  topLeft: { display: "flex", gap: "15px" },
  icon: { cursor: "pointer" },

  topRight: { display: "flex", gap: "25px", alignItems: "center" },
  info: { display: "flex", gap: "8px", alignItems: "center" },

  navbar: {
    background: "#26375b",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px 40px",
  },

  logo: { height: "60px" },

  menu: {
    listStyle: "none",
    display: "flex",
    gap: "40px",
    fontSize: "18px",
    alignItems: "center",
  },

  menuItem: { cursor: "pointer", position: "relative" },

  active: {
    borderBottom: "3px solid #c9a227",
    paddingBottom: "6px",
  },

  search: { fontSize: "20px", cursor: "pointer" },

  /* DROPDOWN STYLES ⭐ */
  dropdownTitle: { display: "flex", alignItems: "center", gap: 6 },

  dropdown: {
    position: "absolute",
    top: 35,
    left: 0,
    background: "#fff",
    color: "#333",
    minWidth: 220,
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    borderRadius: 6,
    overflow: "hidden",
    zIndex: 99,
  },

  dropdownItem: {
    padding: "12px 16px",
    borderBottom: "1px solid #eee",
    cursor: "pointer",
  },
};
