import { useState, useEffect, useRef } from "react";
import { FaSearch, FaTractor, FaSeedling } from "react-icons/fa";

const searchTerms = [
  { label: "Sprayer", col: 0 },
  { label: "Solar Pump", col: 0 },
  { label: "Thresher", col: 0 },
  { label: "Sowing", col: 0 },
  { label: "Drone Sprayer", col: 0 },
  { label: "Agri Tech", col: 0 },
  { label: "Chaff Cutter", col: 0 },
  { label: "Small Farms", col: 1 },
  { label: "Rice Farming", col: 1 },
  { label: "Rice Processing", col: 1 },
  { label: "CAT", col: 1 },
  { label: "Harvest", col: 1 },
  { label: "Agri Equipment", col: 1 },
  { label: "Mini Rice Mill", col: 1 },
  { label: "Multi Crop", col: 2 },
  { label: "Agriculture Equipment", col: 2 },
  { label: "Village Business", col: 2 },
  { label: "Maize Sheller", col: 2 },
  { label: "Planting", col: 2 },
  { label: "Pesticide", col: 2 },
];

const columns = [0, 1, 2].map((col) =>
  searchTerms.filter((t) => t.col === col)
);

export default function PopularSearches() {
  const [hoveredIdx, setHoveredIdx] = useState<string | null>(null);
  const [searchInput, setSearchInput] = useState("");
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const style = document.createElement("style");
    style.id = "ps-styles";
    style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;900&family=Barlow:wght@400;500&display=swap');

      .ps-section {
        background: #f0c000;
        position: relative;
        overflow: hidden;
        font-family: 'Barlow', sans-serif;
       
        padding: 0;
      }

      .ps-inner {
        position: relative;
        z-index: 1;
        padding: 48px 60px 52px;
      }

      .ps-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 36px;
        flex-wrap: wrap;
        gap: 16px;
      }

      .ps-label-group {
        display: flex;
        align-items: center;
        gap: 14px;
      }

      .ps-icon-wrap {
        width: 50px;
        height: 50px;
        background: #11233f;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #f0c000;
        font-size: 18px;
        flex-shrink: 0;
      }

      .ps-heading {
        font-family:  'Playfair Display', Georgia, serif;
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 4px;
        text-transform: uppercase;
        color: #11233f;
        opacity: 0.7;
      }

      .ps-searchbar {
        display: flex;
        align-items: center;
        background: #11233f;
        border-radius: 50px;
        overflow: hidden;
        width: 320px;
        padding: 0 6px 0 20px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        transition: box-shadow 0.2s;
      }

      .ps-searchbar:focus-within {
        box-shadow: 0 4px 28px rgba(0,0,0,0.35);
      }

      .ps-searchbar input {
        flex: 1;
        background: transparent;
        border: none;
        outline: none;
        color: #fff;
        font-family: 'Barlow', sans-serif;
        font-size: 20px;
        padding: 12px 0;
      }

      .ps-searchbar input::placeholder {
        color: rgba(255,255,255,0.4);
      }

      .ps-search-btn {
        background: #f0c000;
        border: none;
        width: 38px;
        height: 38px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #11233f;
        cursor: pointer;
        font-size: 14px;
        flex-shrink: 0;
        transition: background 0.2s, transform 0.15s;
      }

      .ps-search-btn:hover {
        background: #fff;
        transform: scale(1.08);
      }

      .ps-divider {
        width: 100%;
        height: 2px;
        background: rgba(0,0,0,0.1);
        margin-bottom: 32px;
        border-radius: 2px;
      }

      .ps-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0 40px;
      }

      .ps-col {
        display: flex;
        flex-direction: column;
        gap: 2px;
        border-left: 2px solid rgba(0,0,0,0.1);
        padding-left: 24px;
      }

      .ps-col:first-child {
        border-left: none;
        padding-left: 0;
      }

      .ps-tag {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-size: 19px;
        font-weight: 500;
        color: #11233f;
        padding: 9px 14px 9px 0;
        cursor: pointer;
        transition: all 0.18s ease;
        opacity: 0;
        transform: translateY(8px);
        width: fit-content;
        border-radius: 4px;
      }

      .ps-tag.visible {
        opacity: 1;
        transform: translateY(0);
      }

      .ps-tag:hover,
      .ps-tag.active {
        color: #000;
        padding-left: 6px;
        background: rgba(0,0,0,0.06);
        border-radius: 6px;
      }

      .ps-tag-dot {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: #11233f;
        opacity: 0.4;
        flex-shrink: 0;
        transition: opacity 0.18s, transform 0.18s;
      }

      .ps-tag:hover .ps-tag-dot,
      .ps-tag.active .ps-tag-dot {
        opacity: 1;
        transform: scale(1.5);
      }


      @media (max-width: 768px) {
        .ps-grid { grid-template-columns: 1fr 1fr; }
        .ps-col:nth-child(3) { display: none; }
        .ps-inner { padding: 36px 24px 40px; }
        .ps-searchbar { width: 100%; }
        .ps-header { flex-direction: column; align-items: flex-start; }
      }
    `;
    if (!document.getElementById("ps-styles")) {
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div className="ps-section" ref={ref}>
      <div className="ps-inner">
        <div className="ps-header">
          <div className="ps-label-group">
            <div className="ps-icon-wrap">
              <FaTractor />
            </div>
            <span className="ps-heading">Popular Searches</span>
          </div>

          <div className="ps-searchbar">
            <input
              type="text"
              placeholder="Search equipment, crops..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button className="ps-search-btn">
              <FaSearch />
            </button>
          </div>
        </div>

        <div className="ps-divider" />

        <div className="ps-grid">
          {columns.map((col, ci) => (
            <div className="ps-col" key={ci}>
              {col.map((item, ri) => {
                const key = `${ci}-${ri}`;
                const delay = (ci * 7 + ri) * 60;
                return (
                  <div
                    key={key}
                    className={`ps-tag ${visible ? "visible" : ""} ${
                      hoveredIdx === key ? "active" : ""
                    }`}
                    style={{ transitionDelay: `${delay}ms` }}
                    onMouseEnter={() => setHoveredIdx(key)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    onClick={() => setSearchInput(item.label)}
                  >
                    <span className="ps-tag-dot" />
                    {item.label}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}