 import {
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        
        {/* LEFT - ABOUT */}
        <div style={styles.col}>
          <img src="/logo.png" style={{ height: 70, marginBottom: 20 }} />

          <p style={styles.text}>
           Trusted machinery intelligence. Reviews, specs, and supplier access in one place.
          </p>

          <div style={styles.socialRow}>
            <div style={styles.circle}><FaFacebookF /></div>
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

          <p style={styles.contact}><FaEnvelope /> info@actaxsolution.in</p>
          <p style={styles.contact}><FaWhatsapp /> +918076699897</p>
          <p style={styles.contact}><FaPhoneAlt /> +919217639029</p>
          <p style={styles.contact}>
            <FaMapMarkerAlt /> Office No. 240, Apsara Complex Ghaziabad Uttar Pradesh 201005 India
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
    background: "#11233f",
    color: "#fff",
    padding: "70px 40px",
    position: "relative",
  },

  container: {
    display: "grid",
    gridTemplateColumns: "1.3fr 1fr 1.2fr 1.3fr",
    gap: 40,
  },

  col: { display: "flex", flexDirection: "column" },

  text: { lineHeight: 1.8, color: "#dcdcdc" },

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
    cursor: "pointer",
  },

  contact: {
    display: "flex",
    gap: 10,
    marginBottom: 15,
    color: "#ddd",
  },

  socialRow: { display: "flex", gap: 15, marginTop: 20 },

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
  },


  input: {
    background: "#e7e7e7",
    border: "none",
    padding: 14,
    borderRadius: 6,
    marginBottom: 15,
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
  },

};
