import React from "react";
import { Link } from "react-router-dom";
import bg from "../assets/bgt.png";
import logoBuku from "../assets/Logo_buku_transparan.png";
import piala from "../assets/Logo_piala_transparan.png";
import kamera from "../assets/Logo_camera_transparan.png";
import mapLetris from "../assets/map letris.png"; // kalau error ganti nama file jadi map-letris.png

export default function Footer() {
  const cards = [
    { img: logoBuku, text: "PPDB TA 2025/26", link: "/register"},
    { img: piala, text: "PRESTASI SISWA/WI" },
    { img: kamera, text: "DOKUMENTASI" },
  ];

  return (
    <div
      className="w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center items-start">
          {cards.map((c, i) => (
            <div key={i} className="relative w-full max-w-[300px]">
              {/* Circle icon (overlap top center) */}
              <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-blue-600 rounded-full w-28 h-28 flex items-center justify-center shadow-md z-30">
                <img src={c.img} alt={c.text} className="w-14 h-14 object-contain" />
              </div>

              {/* Box + simulated offset shadow behind */}
              <div className="mt-16 relative">
                {/* Shadow block behind (offset to bottom-right) */}
                <div
                  className="absolute top-3 right-3 w-full h-full bg-slate-300 rounded-sm z-10"
                  aria-hidden="true"
                />
                {/* Actual box */}
                <div className="relative z-20 bg-gray-100 px-6 py-5 text-center rounded-sm border border-gray-200">
                  <Link to ={c.link} className="text-sm font-semibold text-gray-800">
                  {c.text}
                  </Link>
                  
                </div>
              </div>

              {/* thin blue line under box */}
              <div className="mt-3 w-full flex justify-center z-40">
                <div className="w-11/12 h-0.5 bg-blue-200 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Map + Contact Footer */}
      <footer className="w-full bg-black text-white border-t-4 border-blue-600">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="hidden md:block" />
          <div>
            <h4 className="text-sm text-gray-300 mb-3">Lokasi</h4>
            <div className="bg-white p-2 inline-block rounded shadow">
              <img
                src={mapLetris}
                alt="Map Letris"
                className="w-[260px] h-[170px] object-cover"
              />
            </div>
          </div>

          <div className="text-sm">
            <h4 className="text-gray-300 font-semibold mb-2">Contact Us</h4>
            <p className="text-gray-400">02129446273</p>
            <p className="text-gray-400">Whatsapp : 0851-6186-7926</p>

            <div className="mt-4">
              <h5 className="text-gray-300 font-semibold">Alamat Sekolah :</h5>
              <p className="text-gray-400">
                Jl. Raya Siliwangi No.55, Pondok Benda, Tangerang Selatan, Banten
              </p>
            </div>

            <div className="mt-4">
              <p className="text-gray-400">Email : smkletris2020@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="w-full bg-black/90 text-gray-500 text-xs py-3">
          <div className="max-w-6xl mx-auto px-6 flex justify-between">
            <span>© {new Date().getFullYear()} SMK Letris Indonesia</span>
            <span>Designed by Saussage team❤️</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
