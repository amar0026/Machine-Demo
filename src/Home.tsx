import heroBg from "./assets/machinedemo.jpeg";
import { FaSearch } from "react-icons/fa";
import MachineDemo from "./components/Machinedemo";
import MachineDemosByCity from "./components/Democity";
import Videosection from "./components/Videosection";
import PopularSearches from "./components/Popularsearch";

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

      <Videosection />
      <MachineDemo />
      <MachineDemosByCity />
      <PopularSearches />

      <style>{`
        * {
          box-sizing: border-box;
        }

        .hero {
          min-height: 100vh;
          width: 100%;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
          font-family: "Arial, sans-serif";
          display: flex;
        }

        .overlay {
          background: rgba(0,0,0,0.55);
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          padding: 40px 20px;
        }

        .content {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
        }

        h1 {
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 700;
          margin-bottom: 20px;
        }

        .subtitle {
          font-size: clamp(16px, 2.5vw, 22px);
          margin-bottom: 15px;
        }

        .desc {
          font-size: clamp(14px, 2vw, 18px);
          opacity: 0.9;
          margin-bottom: 30px;
        }

        /* SEARCH */
        .searchBox {
          display: flex;
          justify-content: center;
          margin-bottom: 25px;
          flex-wrap: wrap;
          width: 100%;
        }

        .searchBox input {
          width: 100%;
          max-width: 550px;
          padding: 16px;
          border: 2px solid #ddd;
          border-right: none;
          border-radius: 6px 0 0 6px;
          font-size: 16px;
          outline: none;
        }

        .searchBox input:focus {
          outline: none;
          box-shadow: none;
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
          flex-wrap: wrap;
        }

        .yellowBtn {
          background: #f4c430;
          padding: 16px 28px;
          border: none;
          font-size: 18px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: bold;
          color: #1b2a41;
          font-family: "Arial, sans-serif";
        }

        .darkBtn {
          background: #1b2a41;
          color: white;
          padding: 16px 28px;
          border: none;
          font-size: 18px;
          border-radius: 6px;
          cursor: pointer;
          font-family: "Arial, sans-serif";
        }

        .trust {
          margin-top: 10px;
          font-size: 16px;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .overlay {
            padding: 60px 16px;
          }

          .searchBox {
            flex-direction: column;
            align-items: center;
          }

          .searchBox input {
            max-width: 100%;
            border-radius: 6px;
            border-right: 2px solid #ddd;
            margin-bottom: 10px;
          }

          .searchBtn {
            width: 100%;
            max-width: 250px;
            border-radius: 6px;
            border-left: 2px solid #ddd;
          }

          .buttons {
            flex-direction: column;
            align-items: center;
          }

          .yellowBtn,
          .darkBtn {
            width: 100%;
            max-width: 300px;
          }

          .trust {
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
}