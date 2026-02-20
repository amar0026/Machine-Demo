import { useEffect } from "react";
import { FaHeart, FaArrowRight } from "react-icons/fa";

interface Product {
  title: string;
  category: string;
  location: string;
  image: string;
}

interface SectionProps {
  label: string;
  products: Product[];
}

const categories: SectionProps[] = [
  {
    label: "CONSTRUCTION MACHINES",
    products: [
      { title: "Komatsu PC210 Excavator Demo...", category: "Construction", location: "Japan", image: "/images/c1.jpg" },
      { title: "Largest Mining Excavators...", category: "Construction", location: "Europe", image: "/images/c2.jpg" },
      { title: "Komatsu PC210 Excavator Demo...", category: "Construction", location: "Japan", image: "/images/c1.jpg" },
      { title: "Excavator Operating Guide...", category: "Construction", location: "Japan", image: "/images/c1.jpg" },
    ],
  },
  {
    label: "AGRICULTURE MACHINES",
    products: [
      { title: "Mini Rice Mill Machine...", category: "Agriculture", location: "India", image: "/images/a1.jpg" },
      { title: "KAMA 6N70 Mini Rice Mill...", category: "Agriculture", location: "India", image: "/images/a2.jpg" },
      { title: "Compact Paddy Demo...", category: "Agriculture", location: "•", image: "/images/a3.jpg" },
      { title: "High-Performance Rice Mill...", category: "Agriculture", location: "India", image: "/images/a1.jpg" },
    ],
  },
];

const ProductCard: React.FC<Product> = ({ title, category, location, image }) => (
  <div className="card">
    <div className="imgWrap">
      <img src={image} alt={title} className="cardImg" />
      <FaHeart className="heartIcon" />
    </div>

    <div className="cardInfo">
      <p className="cardTitle">{title}</p>
      <div className="cardMeta">
        <span className="tag">{category}</span>
        <span className="dot">•</span>
        <span className="loc">{location}</span>
      </div>
    </div>
  </div>
);

const Section: React.FC<SectionProps> = ({ label, products }) => {
  const loopProducts = [...products, ...products];

  return (
    <div className="sectionBlock">
      <div className="sectionHeader">
        <h1 className="sectionTitle">{label}</h1>

        <button className="viewAll">
          View All <FaArrowRight style={{ marginLeft: 6 }} />
        </button>
      </div>

      <div className="infiniteSlider">
        <div className="track">
          {loopProducts.map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
};

const TrendingProducts = () => {
  useEffect(() => {
    if (!document.getElementById("trending-styles")) {
      const style = document.createElement("style");
      style.id = "trending-styles";
      style.innerHTML = css;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div className="wrapper">
      {categories.map((cat, i) => (
        <Section key={i} label={cat.label} products={cat.products} />
      ))}
    </div>
  );
};

export default TrendingProducts;

const css = `
* { box-sizing: border-box; margin: 0; padding: 0; }

.wrapper {
  font-family: "Arial", sans-serif;
  background: #f5f7fa;
  padding: 40px clamp(16px, 5vw, 60px);
}

.sectionBlock { margin-bottom: 40px; }

.sectionHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
  flex-wrap: wrap;
  gap: 10px;
}

.sectionTitle {
  font-size: clamp(20px, 3vw, 32px);
  font-weight: 900;
  color: #1a2744;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.viewAll {
  background: #f4c430;
  border: none;
  border-radius: 6px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  color: #1b2a41;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.infiniteSlider {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.track {
  display: flex;
  width: max-content;
  animation: scrollLeft linear infinite;
  animation-duration: 18s;
  gap: 16px;
}

.track:hover {
  animation-play-state: paused;
}

.card {
  min-width: 260px;
  max-width: 260px;
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);
  flex-shrink: 0;
  transition: .3s;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 14px 28px rgba(0,0,0,0.12);
}

.imgWrap {
  position: relative;
  width: 100%;
  height: 160px;
  background: #e2e8f0;
}

.cardImg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.heartIcon {
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
  background: rgba(0,0,0,0.3);
  padding: 6px;
  border-radius: 50%;
  font-size: 14px;
}

.cardInfo {
  padding: 10px 12px 14px;
}

.cardTitle {
  font-size: 14px;
  font-weight: 600;
  color: #111;
  line-height: 1.4;
  margin-bottom: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.cardMeta {
  display: flex;
  align-items: center;
  gap: 4px;
}

.tag, .loc, .dot {
  font-size: 11px;
  color: #666;
}

@keyframes scrollLeft {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .card {
    min-width: 220px;
    max-width: 220px;
  }
}
`;