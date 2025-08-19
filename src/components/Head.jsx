import React from "react";
import { Link } from "react-router-dom"; // tambahkan ini
import logo from '../assets/Letris schol.png';
import bg from '../assets/Letris Building.png';

function Head() {
  return (
    <div
      className="min-h-screen bg-cover bg-center "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <nav className=" flex items-center justify-between">
        <div className="flex items-center space-x-2 bg-black bg-opacity-50 rounded-br-full ">
          <img src={logo} alt="Logo Letris School" className="w-20 h-20" />
          <p className="">....</p>
        </div>

        <ul className="flex space-x-6 text-yellow-300 font-semibold text-2xl bg-black bg-opacity-50 p-4 rounded-bl-full">
          <li>
            <Link to="/tentang" className="hover:text-blue-300">Tentang Kami</Link>
          </li>
          <li>
            <Link to="/berita" className="hover:text-blue-300">Berita</Link>
          </li>
          <li>
            <Link to="/profil" className="hover:text-blue-300">Profil</Link>
          </li>
          <li>
            <Link to="/jurusan" className="hover:text-blue-300">Jurusan</Link>
          </li>
          <li>
            <Link to="/osis" className="hover:text-blue-300">Osis & Ekskul</Link>
          </li>
        </ul>
      </nav>

      {/* Headline */}
      <div className="flex flex-col items-center justify-center text-center mt-20 px-4">
        <h1
          className=" hello text-5xl font-extrabold text-yellow-400 drop-shadow-lg"
          style={{
            fontFamily: "'Luckiest Guy', cursive",
            WebkitTextStroke: "0.2px white"
          }}
        >
          LETRIS SCHOOL
        </h1>
        <p className=" hi text-xl text-blue-950 italic mt-2 drop-shadow-md  font-black">
          "When Tomorrow's Leaders Come Together"
        </p>
      </div>
    </div>
  );
}

export default Head;
