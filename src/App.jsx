import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Dashboard from "./pages/Dashboard";
import MyItems from "./pages/MyItems";
import Badge from "./pages/Badges";
import Testimonials from "./pages/Testimonials";
import Login from "./pages/Login";

function App() {
  return (
    <div className="bg-[#E1FEA4] text-gray-900 font-sans">
      <Navbar />
      <main className="min-h-[85vh] px-6 md:px-12 pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/my-items" element={<MyItems />} />
          <Route path="/badges" element={<Badge />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
