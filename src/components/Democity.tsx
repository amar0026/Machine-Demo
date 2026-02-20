import { useState } from "react";

const cities = [
  "MUMBAI", "DELHI", "BENGALURU", "HYDERABAD", "AHMEDABAD", "CHENNAI",
  "KOLKATA", "SURAT", "PUNE", "JAIPUR", "AMBATUR", "AJMER",
  "GORAKHPUR", "NANGLOI JAT", "RAJKOT", "COIMBATORE", "ASANSOL", "MORVI",
];

export default function MachineDemosByCity() {
  const [showAll, setShowAll] = useState(false);

  const visibleCities = showAll ? cities : cities.slice(0, 6);

  return (
    <>
      <style>{`
        .mdc-section {
          font-family: Arial, sans-serif;
          background: #fff;
          padding: 72px 40px;
          max-width: 1920px;
          margin: 0 auto;
        }

        .mdc-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .mdc-title {
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 800;
          color: #1a2744;
        }

        .mdc-subtitle {
  display: inline-block;
          background: #f5c800;
          padding: 7px 20px;
          font-size: 1.05rem;
          font-weight: 400;
          color: #1a2744;
          border-radius: 6px;
          font-family:"Arial, sans-serif";
}

        .mdc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .city-card {
          background: white;
          padding: 32px 20px;
          border-radius: 16px;
          text-align: center;
          font-size: 1.25rem;
          font-weight: 600;
          color: #1a2744;
          cursor: pointer;
          height: 150px;

          display: flex;
          align-items: center;
          justify-content: center;

          box-shadow: 0 1px 3px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }

        .city-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 0 40px 10px rgba(251,191,36,0.35);
        }

        .view-more-btn {
          display: block;
          margin: 40px auto 0;
          padding: 12px 32px;
          background: #f5c800;
          color: #1a2744;
          border: none;
          font-weight: 600;
          font-size: 1.1rem;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .view-more-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0px 6px 16px rgba(245,200,0,0.35);
        }

        @media (max-width: 800px) {
          .mdc-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .mdc-grid {
            grid-template-columns: repeat(1, 1fr);
          }
        }
      `}</style>

      <section className="mdc-section">
        <div className="mdc-header">
          <h2 className="mdc-title">Machine Demos By City</h2>
          <p className="mdc-subtitle">
            Find machinery demos and trusted suppliers near your city.
          </p>
        </div>

        <div className="mdc-grid">
          {visibleCities.map((city) => (
            <div key={city} className="city-card">
              {city}
            </div>
          ))}
        </div>

        {/* View More Button */}
        <button
          className="view-more-btn"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "View Less" : "View More"}
        </button>
      </section>
    </>
  );
}