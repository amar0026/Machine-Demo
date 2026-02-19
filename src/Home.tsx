import heroBg from "./assets/machinedemo.jpeg";
import { FaSearch } from "react-icons/fa";
export default function Home() {
    return (
        <>
            <section
                className="hero"
                style={{ backgroundImage: `url(${heroBg})` }}
            >
                <div className="overlay">
                    <div className="content">
                        <h1>Discover Machines Before You Buy</h1>

                        <p className="subtitle">
                            Watch real demos, compare machines, and connect with trusted suppliers across India.
                        </p>

                        <p className="desc">
                            Machine Demo helps farmers, contractors, and businesses explore construction,
                            agriculture, and industrial machinery with videos, specifications and direct supplier access.
                        </p>

                        {/* SEARCH */}
                        <div className="searchBox">
                            <input
                                type="text"
                                placeholder="Search machines like Excavator, Rice Mill, Power Weeder..."
                            />
                            <button className="searchBtn">
                                <FaSearch />
                            </button>
                        </div>


                        {/* BUTTONS */}
                        <div className="buttons">
                            <button className="yellowBtn">Browse Machines</button>
                            <button className="darkBtn">Watch Demo Videos</button>
                        </div>

                        <div className="trust">
                            ✓ Trusted by machinery buyers across India &nbsp;&nbsp;
                            ✓ Real demo videos & verified suppliers
                        </div>
                    </div>
                </div>
            </section>

            {/* CSS INSIDE SAME FILE */}
            <style>{`
        .hero {
          height: 100vh;
          background-size: cover;
          background-position: center;
          position: relative;
          font-family: Arial, Helvetica, sans-serif;
        }

        .overlay {
          background: rgba(0,0,0,0.55);
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
        }

        .content {
          max-width: 900px;
          padding: 20px;
          
        }

        h1 {
          font-size: 56px;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .subtitle {
          font-size: 22px;
          margin-bottom: 15px;
        }

        .desc {
          font-size: 18px;
          opacity: 0.9;
          margin-bottom: 30px;
        }

        /* SEARCH */
        /* SEARCH BOX */
.searchBox {
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
}

.searchBox input {
  width: 550px;
  padding: 16px;
  border: 2px solid #ddd;
  border-right: none;
  border-radius: 6px 0 0 6px;
  font-size: 16px;
  outline: none;          /* ❌ remove blue cursor border */
}

.searchBox input:focus {
  outline: none;
  box-shadow: none;       /* ❌ remove browser glow */
  border-color: #ddd;
}

.searchBtn {
  padding: 0 22px;
  border: 2px solid #ddd;
  border-left: none;
  background: #1b2a41;
  color: white;
  font-size: 18px;
  border-radius: 0 6px 6px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
}


        /* BUTTONS */
        .buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          margin-bottom: 20px;
        }

        .yellowBtn {
          background: #f4c430;
          padding: 16px 28px;
          border: none;
          font-size: 18px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: bold;
        }

        .darkBtn {
          background: #1b2a41;
          color: white;
          padding: 16px 28px;
          border: none;
          font-size: 18px;
          border-radius: 6px;
          cursor: pointer;
        }

        .trust {
          margin-top: 10px;
          font-size: 16px;
        }

        /* MOBILE */
        @media(max-width:768px){
          h1{font-size:34px}
          .subtitle{font-size:18px}
          .searchBox input{width:250px}
          .buttons{flex-direction:column}
        }
      `}</style>
        </>
    );
}
