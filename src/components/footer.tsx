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

        {/* LEFT */}
        <div style={styles.col}>
          <img src={logo} style={styles.logo} alt="logo" />

          <p style={styles.text}>
            Trusted machinery intelligence. Reviews, specs, and supplier access in one place.
          </p>

          <div style={styles.pricingBlock}>
            <p style={styles.pricingLabel}>GET PRICING</p>
            <div style={styles.yellowLine}></div>
            <p style={styles.pricingDesc}>
              Need direct supplier access? We route you to verified partners.
            </p>

            <a href="#" style={styles.pricingLink}>
              Visit MachineLine
            </a>
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

        {/* FORM */}
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
    background: "#f4c430",   // Yellow background
    color: "#1b2a41",
    padding: "30px 40px",
    maxwidth:"1920px"
  },

  container: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 50,
  },

 col: {
  display: "flex",
  flexDirection: "column",
  gap: 14,
},

 logo: {
  height: 110,
  objectFit: "contain",
  alignSelf: "flex-start",
},

  text: {
    lineHeight: 1.6,
    color: "#1b2a41",
  },

  heading: {
    fontSize: 22,
    marginBottom: 20,
    borderBottom: "2px solid #1b2a41",
    width: "fit-content",
    paddingBottom: 6,
  },

  links: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    lineHeight: 2.4,
  },

  contact: {
    display: "flex",
    gap: 10,
    marginBottom: 15,
    alignItems: "flex-start",
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
    background: "#1b2a41",
    color: "#fff",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },

  pricingBlock: {
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },

  pricingLabel: {
    fontSize: 18,
    letterSpacing: "0.18em",
    color: "#1b2a41",
    fontWeight: 600,
  },

  pricingDesc: {
    fontSize: 14,
    color: "#1b2a41",
    lineHeight: 1.6,
  },

  pricingLink: {
    color: "#1b2a41",
    fontWeight: 600,
    textDecoration: "none",
  },

  yellowLine: {
    width: "135px",
    height: "2px",
    backgroundColor: "#1b2a41",
  },

  input: {
    background: "#fff",
    border: "none",
    padding: 14,
    borderRadius: 6,
    marginBottom: 15,
    width: "100%",
  },

  btn: {
    background: "#1b2a41",
    border: "none",
    padding: 15,
    color: "#fff",
    fontSize: 16,
    borderRadius: 6,
    cursor: "pointer",
    width: "60%",
  },
};