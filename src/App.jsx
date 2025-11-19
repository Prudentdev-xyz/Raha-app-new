import { BrowserRouter, Route, Routes } from "react-router";
import { Footer } from "./components/layouts/Footer";
import { Header } from "./components/layouts/Header";
import Home from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { Donate } from "./pages/Donate";
import { Contact } from "lucide-react";
import { ContactPage } from "./pages/ContactPage";
import { FundraisePage } from "./pages/FundraisePage";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/Donate" element={<Donate />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Fundraise" element={<FundraisePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
