import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./component/navigation/Navbar";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import About from "./pages/About";
import NavbarOffcanvas from "./component/navigation/NavbarBS";

export default function App() {
  // <NavbarOffcanvas />
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
// const nav = ReactDOM.createRoot(document.getElementById('nav'));
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<NavbarOffcanvas)>);
root.render(<App />);