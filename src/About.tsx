

export default function About() {
  return (
    <>
   

      {/* HERO SECTION */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay}>
          <h1 style={styles.heroTitle}>About Us</h1>
        </div>

        <div style={styles.breadcrumb}>
          HOME  &nbsp;›&nbsp; ABOUT US
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section style={styles.aboutSection}>
        <div style={styles.aboutGrid}>

          {/* LEFT IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c"
            style={styles.aboutImage}
          />

          {/* RIGHT CONTENT */}
          <div>
            <p style={styles.smallHeading}>
              Reliable Accounting. Trusted Compliance
            </p>

            <h2 style={styles.bigHeading}>
              Smart Financial, Tax & Compliance Solutions
            </h2>

            <p style={styles.highlight}>
              PROFESSIONAL ACCOUNTING AND COMPLIANCE SERVICES ENSURING
              ACCURACY, GROWTH, AND COMPLETE PEACE OF MIND.
            </p>

            <p style={styles.text}>
              AC Tax Solution is a professionally managed accounting and tax
              consultancy firm delivering comprehensive financial, taxation
              and compliance services to businesses and individuals.
            </p>
          </div>

        </div>
      </section>

      
    </>
  );
}

const styles: any = {
  /* HERO */
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
    color: "#fff",
    fontSize: "60px",
    fontWeight: "bold",
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

  /* ABOUT SECTION */
  aboutSection: {
    padding: "80px",
    background: "#f4f6f8",
  },

  aboutGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "60px",
    alignItems: "center",
  },

  aboutImage: {
    width: "100%",
    borderRadius: "4px",
  },

  smallHeading: {
    color: "#888",
    letterSpacing: "2px",
    fontWeight: "600",
  },

  bigHeading: {
    fontSize: "44px",
    color: "#0d1b2a",
    margin: "10px 0 20px",
  },

  highlight: {
    color: "#c9a227",
    fontWeight: "bold",
    lineHeight: "30px",
    marginBottom: "20px",
  },

  text: {
    color: "#555",
    lineHeight: "28px",
  },
};
