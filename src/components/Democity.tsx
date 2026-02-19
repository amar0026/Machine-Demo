
const cities = [
  "Mumbai", "Delhi", "Bengaluru",
  "Hyderabad", "Ahmedabad", "Chennai",
  "Kolkata", "Surat", "Pune",
  "Jaipur", "Ambattur", "Ajmer",
  "Gorakhpur", "Nangloi Jat", "Rajkot",
  "Coimbatore", "Asansol", "Morvi",
];

const excavatorImg =
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80";

export default function MachineDemosByCity() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Source+Serif+4:wght@400;500&display=swap');

        .mdc-section {
          font-family: 'Source Serif 4', Georgia, serif;
          background: #f5f4f0;
          padding: 72px 48px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .mdc-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .mdc-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 800;
          color: #1a2744;
          margin: 0 0 14px;
          letter-spacing: -0.02em;
        }

        .mdc-subtitle {
          font-size: 1.05rem;
          color: #555;
          margin: 0;
          font-weight: 400;
        }

        .mdc-body {
          display: grid;
          grid-template-columns: 360px 1fr;
          gap: 32px;
          align-items: start;
        }

        .mdc-image {
          width: 100%;
          height: 100%;
          min-height: 520px;
          object-fit: cover;
          border-radius: 14px;
          display: block;
        }

        .mdc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .city-card {
          background: #fff;
          border-radius: 10px;
          padding: 22px 16px;
          text-align: center;
          font-size: 1.05rem;
          font-weight: 500;
          color: #1a2744;
          cursor: pointer;
          border: 1px solid #e8e8e8;
          transition: background 0.18s, color 0.18s, transform 0.15s, border-color 0.18s;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04);
        }

        .city-card:hover {
          background: #f5c800;
          color: #1a2744;
          border-color: #f5c800;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(245,200,0,0.25);
        }

        @media (max-width: 800px) {
          .mdc-body {
            grid-template-columns: 1fr;
          }
          .mdc-image {
            min-height: 260px;
            height: 260px;
          }
          .mdc-section {
            padding: 48px 20px;
          }
        }

        @media (max-width: 480px) {
          .mdc-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>

      <section className="mdc-section">
        {/* Header */}
        <div className="mdc-header">
          <h2 className="mdc-title">Machine Demos By City</h2>
          <p className="mdc-subtitle">
            Find machinery demos and trusted suppliers near your city.
          </p>
        </div>

        {/* Body */}
        <div className="mdc-body">
          {/* Left: Image */}
          <img
            src={excavatorImg}
            alt="Excavator at construction site"
            className="mdc-image"
          />

          {/* Right: City Grid */}
          <div className="mdc-grid">
            {cities.map((city) => (
              <div key={city} className="city-card">
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}