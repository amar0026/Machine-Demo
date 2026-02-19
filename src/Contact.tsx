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
          HOME  &nbsp;›&nbsp; Contact
        </div>
      </section>

      {/* ⭐ INFO CARDS FULL SECTION (replaces InfoBox completely) */}
      <InfoCards />

      {/* CONTACT FORM SECTION */}
      <section style={styles.formSection}>
        <form style={styles.form}>
            <h1 style={styles.heroTitles}>Contact Us</h1>
        <p>We would love to hear from you. Fill the form and our team will contact you soon.</p>
          <h2 style={styles.formTitle}>Send Message</h2>

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
  page:{ fontFamily:"Arial" },

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

  /* FORM SECTION */
  formSection:{
    padding:"80px 20px",
    background:"#fff",
    display:"flex",
    justifyContent:"center"
  },

  form:{
    width:"100%",
    maxWidth:"600px",
    display:"flex",
    flexDirection:"column",
    gap:"16px"
  },

  formTitle:{
    textAlign:"center",
    marginBottom:"20px"
  },
   heroTitles: {
    color: "#1b2a41",
    fontSize: "60px",
    fontWeight: "bold",
    
  },


  input:{
    padding:"15px",
    border:"1px solid #ccc",
    borderRadius:"8px",
    fontSize:"16px"
  },

  textarea:{
    padding:"15px",
    height:"130px",
    border:"1px solid #ccc",
    borderRadius:"8px",
    fontSize:"16px"
  },

  button:{
    padding:"15px",
    background:"#c9a227",
    color:"#fff",
    border:"none",
    borderRadius:"8px",
    fontSize:"18px",
    cursor:"pointer"
  },

  map:{
    width:"100%",
    height:"420px",
    border:"0"
  }
};
