import { BrowserRouter, Routes, Route } from "react-router-dom";
import Head from './components/Head';
import About from './components/About';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import Layer2 from './components/Layer2';
import Juara from './components/Juara';
import Register from './components/Registrasi';
import Informatika from "./components/Informatika";
import { Info } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>  
      <Routes>
        {/* Halaman Utama */}
        <Route path="/" element={
          <>
            <Head />
            <Layer2 />
            <About />
            <Welcome />
            <Juara />
            <Footer />
          </>
        } />

        {/* Halaman Register */}
        <Route path="/register" element={
          <>
           
            <Register />
            
          </>
        } />
        <Route path="/informatika" element={
          <>
          <Informatika/>
        </>
      }>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
