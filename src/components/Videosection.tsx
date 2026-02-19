import { useRef, useEffect } from "react";
import {
  FaStar,
  FaHeart,
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight,
} from "react-icons/fa";

const TrendingProducts = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  // inject css once
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = styles;
    document.head.appendChild(style);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const amount = 320;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const products = [
  { title: "Accounting Services", price: "₹499", video: "/videos/v1.mp4" },
  { title: "GST Registration", price: "₹999", video: "/videos/v2.mp4" },
  { title: "Income Tax Filing", price: "₹799", video: "/videos/v3.mp4" },
  { title: "Business Setup", price: "₹1499", video: "/videos/v4.mp4" },
  { title: "Trademark Filing", price: "₹1299", video: "/videos/v5.mp4" },
];


  return (
    <section className="section">
      <div className="header">
        <h1>Trending Services</h1>

        <div className="controls">
          <button onClick={() => scroll("left")} className="iconBtn">
            <FaChevronLeft />
          </button>
          <button onClick={() => scroll("right")} className="iconBtn">
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div className="slider" ref={sliderRef}>
        {products.map((p, i) => (
          <div key={i} className="card">
            {/* <img src={p.img} className="img" />
            <FaHeart className="heart" /> */}

            <div className="cardBody">
              <h3>{p.title}</h3>

              <div className="rating">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                <span>(120)</span>
              </div>

              <div className="bottom">
                <span className="price">{p.price}</span>
                <button className="bookBtn">Book now</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="viewMoreWrap">
        <button className="viewBtn">
          View more <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default TrendingProducts;

const styles = `
.section{
  padding:50px 80px;
  background:#fff;
  font-family:sans-serif;
}

.header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:25px;
}

.controls{
  display:flex;
  gap:12px;
}

.iconBtn{
  width:40px;
  height:40px;
  border-radius:50%;
  border:none;
  background:#c9a227;
  color:#11233f;
  cursor:pointer;
  display:flex;
  align-items:center;
  justify-content:center;
  box-shadow:0 4px 12px rgba(0,0,0,0.15);
}

.slider{
  display:flex;
  gap:25px;
  overflow-x:auto;
  scroll-behavior:smooth;
  padding:10px;
}

/* 🔥 HIDE SCROLLBAR */
.slider::-webkit-scrollbar{
  display:none;
}
.slider{
  -ms-overflow-style:none;
  scrollbar-width:none;
}

.card{
  min-width:280px;
  background:#fff;
  border-radius:20px;
  overflow:hidden;
  position:relative;
  box-shadow:0 8px 24px rgba(0,0,0,0.12);
}

<video
  src={p.video}
  className="video"
  autoPlay
  loop
  muted
  playsInline
/>


.heart{
  position:absolute;
  top:15px;
  right:15px;
  background:#fff;
  padding:8px;
  border-radius:50%;
  color:#c9a227;
  box-shadow:0 2px 6px rgba(0,0,0,0.2);
}

.cardBody{
  padding:18px;
}

.rating{
  color:#f7b500;
  display:flex;
  align-items:center;
  gap:4px;
  margin:8px 0;
}

.bottom{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-top:12px;
}

.price{
  font-weight:bold;
  color:#11233f;
}

.bookBtn{
  background:#c9a227;
  border:none;
  padding:8px 16px;
  border-radius:20px;
  cursor:pointer;
  color:#11233f;
}

.viewMoreWrap{
  text-align:center;
  margin-top:40px;
}

.viewBtn{
  border:1px solid #aaa;
  padding:14px 28px;
  border-radius:30px;
  background:#c9a227;
  color:#11233f;
  cursor:pointer;
  display:inline-flex;
  align-items:center;
  gap:8px;
  font-size:16px;
}
`;
