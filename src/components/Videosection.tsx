import { useRef, useEffect } from "react";
import { FaArrowRight, FaHeart } from "react-icons/fa";

const categories = [
  {
    label: "CONSTRUCTION MACHINES",
    products: [
      { title: "Mastering the Komatsu PC210 Excavator: A Friendly Operating....", category: "Construction", location: "Japan", image: "/images/c1.jpg" },
      { title: "Top 5 Largest Mining Excavators in the World: The Giants of....", category: "Construction", location: "Europe", image: "/images/c2.jpg" },
      { title: "Mastering the Komatsu PC210 Excavator: A Friendly Operating....", category: "Construction", location: "Japan", image: "/images/c1.jpg" },
      { title: "Mastering the Komatsu PC210 Excavator: A Friendly Operating....", category: "Construction", location: "Japan", image: "/images/c1.jpg" },
    ],
  },
  {
    label: "AGRICULTURE MACHINES",
    products: [
      { title: "Mini Rice Mill Machine: Revolutionizing Small Rice....", category: "Agriculture", location: "India", image: "/images/a1.jpg" },
      { title: "KAMA 6N70 Mini Rice Mill: High Efficiency at Affordable Price....", category: "Agriculture", location: "India", image: "/images/a2.jpg" },
      { title: "Compact Paddy Demo – Faster Pi...", category: "Agriculture", location: "•", image: "/images/a3.jpg" },
      { title: "Mastering the Komatsu PC210 Excavator: A Friendly Operating....", category: "Construction", location: "Japan", image: "/images/c1.jpg" },
    ],
  },
  {
    label: "Our Picks",
    products: [
      { title: "Introducing the 6N70 Pro Max Rice Mill: A Game....", category: "Agriculture", location: "India", image: "/images/p1.jpg" },
      { title: "Mastering the Komatsu PC210 Excavator: A....", category: "Construction", location: "Japan", image: "/images/p2.jpg" },
      { title: "Compact Paddy Demo – Faster Pi...", category: "Agriculture", location: "•", image: "/images/p3.jpg" },
      { title: "Mastering the Komatsu PC210 Excavator: A Friendly Operating....", category: "Construction", location: "Japan", image: "/images/c1.jpg" },
    ],
  },
];

const ProductCard = ({ title, category, location, image }: { title: string; category: string; location: string; image: string }) => (
  <div className="card">
    <div className="imgWrap">
      <img
        src={image}
        alt={title}
        className="cardImg"
        onError={(e) => {
          (e.target as HTMLImageElement).style.background = "#dde3ec";
        }}
      />
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

const Section = ({ label, products }: { label: string; products: typeof categories[0]["products"] }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  return (
    <div className="sectionBlock">
      <div className="sectionHeader">
        <h1 className="sectionTitle">{label}</h1>
        <button className="viewAll">
          View all <FaArrowRight style={{ marginLeft: 6 }} />
        </button>
      </div>
      <div className="slider" ref={sliderRef}>
        {products.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </div>
    </div>
  );
};

const TrendingProducts = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
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
*{
  box-sizing:border-box;
  margin:0;
  padding:0;
}

.wrapper{
  font-family:'Segoe UI',sans-serif;
  background:#f5f7fa;
  padding:40px clamp(16px, 5vw, 60px); /* ✅ FIXED RESPONSIVE LEFT-RIGHT */
  width:100%;
  min-height:100vh;
}
  .sectionTitle{
  font-size: clamp(22px, 3vw, 34px);  /* ✅ Bigger + Responsive */
  font-weight: 800;
  color:#1a2744;
  letter-spacing:0.05em;
  text-transform:uppercase;
}

.sectionBlock{
  margin-bottom:36px;
}

.sectionHeader{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:14px;
}

.sectionTitle{
  font-size: clamp(20px, 3vw, 31px);
  font-weight:900;
  color:#1a2744;
  letter-spacing:0.06em;
  text-transform:uppercase;
}

.viewAll{
  background:#f4c430;
  border:none;
  border-radius:6px;
  padding:12px 22px;
  font-size:14px;
  font-weight:bold;
  color:#1b2a41;
  cursor:pointer;
  display:flex;
  align-items:center;
  white-space:nowrap;
}

.slider{
  display:flex;
  gap:14px;
  overflow-x:auto;
  scroll-behavior:smooth;
  padding-bottom:6px;
  -ms-overflow-style:none;
  scrollbar-width:none;
}

.slider::-webkit-scrollbar{
  display:none;
}

.card{
  min-width:280px;
  max-width:280px;
  background:#fff;
  border-radius:16px;
  overflow:hidden;
  box-shadow:0 6px 18px rgba(0,0,0,0.08);
  flex-shrink:0;
  transition:transform 0.25s ease, box-shadow 0.25s ease;
}

.card:hover{
  transform:translateY(-6px);
  box-shadow:0 12px 28px rgba(0,0,0,0.12);
}

.imgWrap{
  position:relative;
  width:100%;
  height:180px;
  background:#e2e8f0;
}
.cardImg{
  width:100%;
  height:100%;
  object-fit:cover;
  display:block;
}
.heartIcon{
  position:absolute;
  top:8px;
  right:8px;
  color:#fff;
  background:rgba(0,0,0,0.25);
  padding:5px;
  border-radius:50%;
  font-size:14px;
  backdrop-filter:blur(4px);
}
.cardInfo{
  padding:10px 10px 12px;
}
.cardTitle{
  font-size:14px;
  font-weight:600;
  color:#111;
  line-height:1.5;
  margin-bottom:8px;
  display:-webkit-box;
  -webkit-line-clamp:2;
  -webkit-box-orient:vertical;
  overflow:hidden;
}

.cardMeta{
  display:flex;
  align-items:center;
  gap:4px;
  flex-wrap:wrap;
}

.tag{
  font-size:10px;
  color:#555;
  font-weight:500;
}

.dot{
  font-size:10px;
  color:#aaa;
}

.loc{
  font-size:10px;
  color:#555;
}
`;