
import AboutSection from "./components/Machinedemo";


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

      <AboutSection/>

      
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

 
};
