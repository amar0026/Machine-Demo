import InfoCards from "./components/infocards";

export default function Contact() {
  return (
    <div style={styles.page}>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay}>
          <h1 style={styles.heroTitle}>Contact</h1>
        </div>

        <div style={styles.breadcrumb}>
          HOME &nbsp;›&nbsp; CONTACT
        </div>
      </section>

      {/* INFO CARDS */}
      <InfoCards />

      {/* CONTACT FORM SECTION */}
      <section style={styles.formSection}>
        <form style={styles.form}>

          {/* Yellow Badge Subtitle */}
          <h2 style={styles.formTitle}>Contact With Us</h2>

          {/* Main Heading */}
          <h1 style={styles.heroTitles}>
            Feel free to write our team anytime
          </h1>

          <input style={styles.input} placeholder="Full Name" />
          <input style={styles.input} placeholder="Email Address" />
          <input style={styles.input} placeholder="Phone Number" />
          <textarea style={styles.textarea} placeholder="Your Message" />

          <button style={styles.button}>Send Message</button>
        </form>
      </section>

      {/* MAP */}
      <section>
        <iframe
          title="map"
          src="https://maps.google.com/maps?q=Mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed"
          style={styles.map}
        />
      </section>

    </div>
  );
}

const styles: any = {

  page: {
    fontFamily: "Arial",
  },

  /* HERO SECTION */
  hero: {
    height: "320px",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    
  },

  heroOverlay: {
    background: "rgba(0,0,0,0.55)",
    height: "100%",
    display: "flex",
    alignItems: "center",
    paddingLeft: "80px",
  },

  heroTitle: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
    fontWeight: 800,
    color: "#ffffff",
    margin: "0",
    letterSpacing: "-0.02em",
  },

  breadcrumb: {
    position: "absolute",
    bottom: "0",
    right: "0",
    background: "#c9a227",
    color: "#fff",
    padding: "18px 60px",
    fontWeight: "bold",
  },

  /* FORM SECTION */
  formSection: {
    padding: "80px 20px",
    background: "#fff",
    display: "flex",
    justifyContent: "center",
  },

  form: {
    width: "100%",
    maxWidth: "600px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    textAlign: "center",
  },

  /* Yellow Subtitle Badge */
  formTitle: {
    display: "inline-block",
    background: "#f5c800",
    padding: "7px 20px",
    fontSize: "1.05rem",
    fontWeight: 400,
    color: "#1a2744",
    borderRadius: "2px",
  },

  /* Main Form Heading */
  heroTitles: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
    fontWeight: 800,
    color: "#1a2744",
    margin: "0 0 20px",
    letterSpacing: "-0.02em",
  },

  input: {
    padding: "15px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "16px",
    width: "100%",
  },

  textarea: {
    padding: "15px",
    height: "130px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "16px",
    width: "100%",
  },

  button: {
    padding: "15px",
    background: "#c9a227",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "18px",
    cursor: "pointer",
    width: "60%",
  },

  map: {
    width: "100%",
    height: "420px",
    border: "0",
  },
};