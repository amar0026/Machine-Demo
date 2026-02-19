import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/navbar";
import Footer from "./components/footer";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
// Import your category component
// import CategoryPage from "./CategoryPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/category/:categoryName" element={<CategoryPage />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;