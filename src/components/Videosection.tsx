import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { FaHeart, FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const categories = [
  {
    label: "CONSTRUCTION MACHINES",
    products: [
      { title: "Komatsu PC210 Excavator Demo...", category: "Construction", location: "Japan", image: "/images/c1.jpg" },
      { title: "Largest Mining Excavators...", category: "Construction", location: "Europe", image: "/images/c2.jpg" },
      { title: "Excavator Operating Guide...", category: "Construction", location: "Japan", image: "/images/c1.jpg" },
      { title: "Heavy Loader Machine Demo...", category: "Construction", location: "USA", image: "/images/c2.jpg" },
    ],
  },
  {
    label: "AGRICULTURE MACHINES",
    products: [
      { title: "Mini Rice Mill Machine...", category: "Agriculture", location: "India", image: "/images/a1.jpg" },
      { title: "KAMA 6N70 Mini Rice Mill...", category: "Agriculture", location: "India", image: "/images/a2.jpg" },
      { title: "Compact Paddy Demo...", category: "Agriculture", location: "India", image: "/images/a3.jpg" },
      { title: "High-Performance Rice Mill...", category: "Agriculture", location: "India", image: "/images/a1.jpg" },
    ],
  },
  {
    label: "OUR PICKS",
    products: [
      { title: "Mini Rice Mill Machine...", category: "Agriculture", location: "India", image: "/images/a1.jpg" },
      { title: "KAMA 6N70 Mini Rice Mill...", category: "Agriculture", location: "India", image: "/images/a2.jpg" },
      { title: "Compact Paddy Demo...", category: "Agriculture", location: "India", image: "/images/a3.jpg" },
      { title: "High-Performance Rice Mill...", category: "Agriculture", location: "India", image: "/images/a1.jpg" },
    ],
  },
];

const ProductCard = ({ title, category, location, image }) => (
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

const Section = ({ label, products }) => {
  const [direction, setDirection] = useState("right");
  const [speed, setSpeed] = useState(60);

  const handleLeft = () => {
    setDirection("right");
    setSpeed(80);
    setTimeout(() => setSpeed(60), 500);
  };

  const handleRight = () => {
    setDirection("left");
    setSpeed(80);
    setTimeout(() => setSpeed(60), 500);
  };

  return (
    <div className="sectionBlock">
      <div className="sectionHeader">
        <h1 className="sectionTitle">{label}</h1>
      </div>

      <div className="sliderWrapper">
        {/* LEFT ARROW — outside the marquee */}
        <button className="navArrow" onClick={handleLeft} aria-label="Previous">
          <FaChevronLeft />
        </button>

        <div className="marqueeWrap">
          <Marquee
            direction={direction}
            speed={speed}
            pauseOnHover
            gradient={false}
          >
            {products.map((p, i) => (
              <div key={i} style={{ margin: "0 8px" }}>
                <ProductCard {...p} />
              </div>
            ))}
          </Marquee>
        </div>

        {/* RIGHT ARROW — outside the marquee */}
        <button className="navArrow" onClick={handleRight} aria-label="Next">
          <FaChevronRight />
        </button>
      </div>

      <div className="viewAllWrap">
        <button className="viewAll">
          View All <FaArrowRight style={{ marginLeft: 6 }} />
        </button>
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
  font-family: Arial, sans-serif;
  background: #f5f7fa;
  padding: 40px clamp(16px, 5vw, 60px);
}

.sectionBlock { margin-bottom: 60px; }

.sectionHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.sectionTitle {
  font-size: clamp(20px, 3vw, 30px);
  font-weight: 900;
  color: #1a2744;
  text-transform: uppercase;
}

.viewAllWrap {
  display: flex;
  justify-content: center;
  margin-top: 30px;
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

/* SLIDER WRAPPER — arrows sit as flex siblings outside marquee */
.sliderWrapper {
  display: flex;
  align-items: center;
  gap: 12px;
}

.marqueeWrap {
  flex: 1;
  overflow: hidden;
}

/* CARD */
.card {
  width: 260px;
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);
  transition: transform .3s, box-shadow .3s;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 14px 28px rgba(0,0,0,0.12);
}

.imgWrap {
  position: relative;
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
  background: rgba(0,0,0,0.4);
  padding: 6px;
  border-radius: 50%;
  font-size: 14px;
  cursor: pointer;
}

.cardInfo { padding: 12px; }

.cardTitle {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #111;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.cardMeta {
  display: flex;
  gap: 4px;
  font-size: 11px;
  color: #666;
}

/* NAVIGATION ARROWS */
.navArrow {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
 
 
  color: #1b2a41;
  font-size: 16px;
  cursor: pointer;
 
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s, box-shadow 0.2s;
}

.navArrow:hover {
  transform: scale(1.12);
  box-shadow: 0 6px 18px rgba(0,0,0,0.25);
}

@media (max-width: 768px) {
  .card { width: 220px; }
  .navArrow { width: 36px; height: 36px; font-size: 13px; }
}
`;