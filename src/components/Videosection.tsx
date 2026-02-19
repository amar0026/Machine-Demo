import { useEffect } from "react";

type Product = {
  id: number;
  title: string;
  price: string;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    title: "Hoodie Suit Sports Leisure Sexy Zipper",
    price: "$9.93 - 12.11",
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
  },
  {
    id: 2,
    title: "Bow Knitted Loafers In Fashion",
    price: "$3.88",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: 3,
    title: "Rhinestone Bracelet Simple Zircon",
    price: "$1.81 - 1.99",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a",
  },
  {
    id: 4,
    title: "Corduroy High Waist Flared Pants",
    price: "$5.66",
    image: "https://images.unsplash.com/photo-1520975922284-9e0f85c9d8c4",
  },
  {
    id: 5,
    title: "PHOFAY Poly Peptide Keratin Cream",
    price: "$3.86 - 21.10",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348",
  },
];

export default function HomePage() {

  /* Inject CSS once */
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      *{margin:0;padding:0;box-sizing:border-box;font-family:Georgia,serif}

      .pageWrapper{
        min-height:80vh;
        padding:30px;
        background:linear-gradient(to bottom,#8f6f58,#e9ddd3);
      }

      .searchBar{
        max-width:950px;
        margin:auto;
        background:#f4efea;
        padding:12px 18px;
        border-radius:10px;
        display:flex;
        align-items:center;
        gap:15px;
        box-shadow:0 4px 15px rgba(0,0,0,0.1);
      }
      .searchInput{flex:1;border:none;background:transparent;font-size:16px;outline:none}

      .searchBtn{
        background:#ff7a00;
        border:none;
        color:#fff;
        padding:10px 18px;
        border-radius:30px;
        font-size:16px;
        cursor:pointer;
      }

      .productGrid{
        margin-top:35px;
        display:grid;
        grid-template-columns:repeat(5,1fr);
        gap:22px;
      }

      .card{
        background:#fff;
        border-radius:14px;
        overflow:hidden;
        transition:.3s;
        cursor:pointer;
      }
      .card:hover{
        transform:translateY(-6px);
        box-shadow:0 10px 20px rgba(0,0,0,.15);
      }

      .imageWrapper{position:relative}
      .imageWrapper img{width:100%;height:210px;object-fit:cover}

      .playIcon{
        position:absolute;
        bottom:10px;
        left:10px;
        background:#fff;
        width:30px;height:30px;border-radius:50%;
        display:flex;align-items:center;justify-content:center;
        font-size:12px;
      }

      .cardBody{padding:12px}
      .title{font-size:14px;color:#333}
      .price{margin-top:6px;font-weight:bold}
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div className="pageWrapper">
      {/* Search */}
      <div className="searchBar">
        <input className="searchInput" placeholder="Find the product you're looking for" />
      
        <button className="searchBtn">Search</button>
      </div>

      {/* Products */}
      <div className="productGrid">
        {products.map((item) => (
          <div key={item.id} className="card">
            <div className="imageWrapper">
              <img src={item.image} alt={item.title} />
              <div className="playIcon">▶</div>
            </div>
            <div className="cardBody">
              <p className="title">{item.title}</p>
              <p className="price">{item.price}</p>
            </div>
          </div>
        ))}
      </div>

   
    </div>
  );
}
