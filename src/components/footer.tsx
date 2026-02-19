import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>

        {/* LEFT - ABOUT */}
        <div style={styles.col}>
          <img src={logo} style={styles.logo} alt="logo" />

          <p style={styles.text}>
            Trusted machinery intelligence. Reviews, specs, and supplier access in one place.
          </p>

          {/* GET PRICING BLOCK */}
          <div style={styles.pricingBlock}>
            <p style={styles.pricingLabel}>GET&nbsp;PRICING</p>
             <div style={styles.yellowLine}></div>
            <p style={styles.pricingDesc}>
              Need direct supplier access? We route you to verified partners.
            </p>
            <div style={styles.linkContainer}>
              <a href="#" style={styles.pricingLink}>Visit MachineLine</a>
             
            </div>
          </div>

          <div style={styles.socialRow}>
            <div style={styles.circle}><FaYoutube /></div>
            <div style={styles.circle}><FaInstagram /></div>
          </div>
        </div>

        {/* LINKS */}
        <div style={styles.col}>
          <h3 style={styles.heading}>Links</h3>
          <ul style={styles.links}>
            <li>Home</li>
            <li>About us</li>
            <li>All Categories</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div style={styles.col}>
          <h3 style={styles.heading}>Contact</h3>
          <p style={styles.contact}><FaEnvelope style={styles.icon} /> info@actaxsolution.in</p>
          <p style={styles.contact}><FaWhatsapp style={styles.icon} /> +918076699897</p>
          <p style={styles.contact}><FaPhoneAlt style={styles.icon} /> +919217639029</p>
          <p style={styles.contact}>
            <FaMapMarkerAlt style={styles.icon} /> Office No. 240, Apsara Complex Ghaziabad Uttar Pradesh 201005 India
          </p>
        </div>

        {/* CONTACT FORM */}
        <div style={styles.col}>
          <h3 style={styles.heading}>Contact Us</h3>
          <input placeholder="Your Name" style={styles.input} />
          <input placeholder="Mobile Number" style={styles.input} />
          <input placeholder="Email Address" style={styles.input} />
          <button style={styles.btn}>Send Message</button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

const styles: any = {
  footer: {
    background: "#1b2a41",
    color: "#fff",
    padding: "70px 40px",
  },

  container: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    alignItems: "start",
    gap: 50,
  },

  col: {
    display: "flex",
    flexDirection: "column",
    gap: 14,
    maxWidth: 320,
  },

  logo: {
    height: 80,
    width: "fit-content",
    maxWidth: 240,
    objectFit: "contain",
    marginBottom: 10,
    display: "block",
  },

  text: {
    lineHeight: 1.6,
    color: "#dcdcdc",
    maxWidth: 260,
    margin: "0 0 0 0",
    textAlign: "left",
  },

  heading: {
    fontSize: 22,
    marginBottom: 20,
    borderBottom: "2px solid #c9a227",
    width: "fit-content",
    paddingBottom: 6,
  },

  links: {
    listStyle: "none",
    lineHeight: 2.4,
    padding: 0,
    margin: 0,
    cursor: "pointer",
  },

  contact: {
    display: "flex",
    gap: 10,
    margin: "0 0 15px 0",
    color: "#ddd",
    alignItems: "flex-start",
    textAlign: "left",
  },

  icon: {
    minWidth: 20,
    marginTop: 3,
  },

  socialRow: {
    display: "flex",
    gap: 15,
    marginTop: 10,
  },

  circle: {
    width: 45,
    height: 45,
    background: "#fff",
    color: "#000",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.3s ease",
    ":hover": {
      background: "#c9a227",
      color: "#fff",
    },
  },

  pricingBlock: {
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
    gap: 8,
    width: "100%",
  },

  pricingLabel: {
    fontSize: 18,
    letterSpacing: "0.18em",
    color: "#fff",
    fontWeight: 600,
    textTransform: "uppercase" as const,
    margin: "0",
    textAlign: "left",
  },

  pricingDesc: {
    fontSize: 14,
    color: "#cbd5e0",
    lineHeight: 1.6,
    margin: "0",
    textAlign: "left",
  },

  linkContainer: {
    display: "flex",
    flexDirection: "column" as const,
    gap: 4,
    marginTop: 4,
  },

  pricingLink: {
    color: "#c9a227",
    fontWeight: 600,
    fontSize: 15,
    textDecoration: "none",
    display: "inline-block",
    textAlign: "left",
    ":hover": {
      textDecoration: "underline",
    },
  },

  yellowLine: {
    width: "135px",
    height: "2px",
    backgroundColor: "#c9a227",
    marginTop: "2px",
  },

  input: {
    background: "#e7e7e7",
    border: "none",
    padding: 14,
    borderRadius: 6,
    marginBottom: 15,
    width: "100%",
    boxSizing: "border-box" as const,
  },

  btn: {
    background: "#c9a227",
    border: "none",
    padding: 15,
    color: "#fff",
    fontSize: 16,
    borderRadius: 6,
    cursor: "pointer",
    marginTop: 10,
    width: "60%",
    transition: "all 0.3s ease",
    ":hover": {
      background: "#b18a20",
    },
  },
};