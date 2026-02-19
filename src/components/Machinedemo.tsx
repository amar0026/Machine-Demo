
// Icon components (inline SVG, no external deps)
const VideoIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1a2744" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="6" width="14" height="12" rx="2" />
    <path d="M16 10l5-3v10l-5-3V10z" />
  </svg>
);

const CompareIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1a2744" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="14" width="4" height="7" rx="0.5" />
    <rect x="9" y="9" width="4" height="12" rx="0.5" />
    <rect x="16" y="4" width="4" height="17" rx="0.5" />
  </svg>
);

const HandshakeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1a2744" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 7.65l8.42 8.42 8.42-8.42a5.4 5.4 0 0 0 0-7.65z" />
    <path d="M12 21l-1-1" />
  </svg>
);

const features = [
  {
    icon: <VideoIcon />,
    title: "Real Demo Videos",
    desc: "Watch machines in action before making a purchase.",
  },
  {
    icon: <CompareIcon />,
    title: "Compare & Learn:",
    desc: "Understand specifications and real-world use cases.",
  },
  {
    icon: <HandshakeIcon />,
    title: "Trusted Suppliers.",
    desc: "Connect directly with verified machinery sellers.",
  },
];

// Placeholder images – replace with real imports/URLs
const img1 = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80";
const img2 = "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80";
const img3 = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80";

export default function AboutSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Source+Serif+4:wght@400;600&display=swap');

        .about-section {
          font-family: 'Source Serif 4', Georgia, serif;
          background: #f5f4f0;
          padding: 72px 48px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .about-header {
          text-align: center;
          margin-bottom: 52px;
        }

        .about-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 800;
          color: #1a2744;
          margin: 0 0 18px;
          letter-spacing: -0.02em;
        }

        .about-tagline {
          display: inline-block;
          background: #f5c800;
          padding: 7px 20px;
          font-size: 1.05rem;
          font-weight: 400;
          color: #1a2744;
          border-radius: 2px;
        }

        .about-tagline strong {
          font-weight: 700;
        }

        .about-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: start;
        }

        .about-left p {
          font-size: 1.05rem;
          line-height: 1.75;
          color: #2d2d2d;
          margin: 0 0 22px;
        }

        .about-left p strong {
          font-weight: 700;
          color: #1a2744;
        }

        .features-list {
          margin-top: 32px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .feature-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .feature-icon {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .feature-text {
          font-size: 0.97rem;
          line-height: 1.6;
          color: #2d2d2d;
        }

        .feature-text strong {
          font-weight: 700;
          color: #1a2744;
        }

        .about-right {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .img-top {
          width: 100%;
          height: 260px;
          object-fit: cover;
          border-radius: 10px;
        }

        .img-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .img-bottom {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-radius: 10px;
        }

        .cta-btn {
          margin-top: 16px;
          background: #f5c800;
          color: #1a2744;
          border: none;
          padding: 16px 32px;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.05rem;
          font-weight: 700;
          border-radius: 4px;
          cursor: pointer;
          width: 100%;
          letter-spacing: 0.01em;
          transition: background 0.2s, transform 0.15s;
        }

        .cta-btn:hover {
          background: #e0b600;
          transform: translateY(-1px);
        }

        @media (max-width: 720px) {
          .about-body {
            grid-template-columns: 1fr;
          }
          .about-section {
            padding: 48px 20px;
          }
        }
      `}</style>

      <section className="about-section">
        {/* Header */}
        <div className="about-header">
          <h2 className="about-title">About Machine Demo</h2>
          <span className="about-tagline">
            Helping India discover the right machines before <strong>they buy</strong>
          </span>
        </div>

        {/* Body */}
        <div className="about-body">
          {/* Left: Text */}
          <div className="about-left">
            <p>
              Machine Demo is a machinery discovery platform where buyers explore{" "}
              <strong>real demo videos</strong>, <strong>specifications</strong>, and{" "}
              <strong>trusted suppliers</strong> — all in one place.
            </p>
            <p>
              We make it easy for <strong>farmers</strong>, <strong>contractors</strong>, and
              businesses to <strong>compare</strong> machines, understand real use cases, and{" "}
              <strong>get direct pricing</strong> without confusion.
            </p>
            <p>
              Our goal is to <strong>simplify machinery</strong> buying and help you make
              confident investment decisions.
            </p>

            <div className="features-list">
              {features.map((f, i) => (
                <div className="feature-item" key={i}>
                  <div className="feature-icon">{f.icon}</div>
                  <p className="feature-text">
                    <strong>{f.title}</strong> {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Images + CTA */}
          <div className="about-right">
            <img src={img1} alt="Worker operating machinery" className="img-top" />
            <div className="img-row">
              <img src={img2} alt="Farmer with equipment" className="img-bottom" />
              <img src={img3} alt="Excavator on site" className="img-bottom" />
            </div>
            <button className="cta-btn">Learn More About Us</button>
          </div>
        </div>
      </section>
    </>
  );
}