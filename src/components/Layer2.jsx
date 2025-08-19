import React from "react";
// import sky from "../assets/sky.png";
import foto1 from "../assets/1.png";
import foto2 from "../assets/2.png";
import imgRect from "../assets/Rectangle.png"; // ikon bintang kotak
import bac from "../assets/bg.png";


function Layer2() {
  return (
    <>
    <div
      className="ALD bg-cover bg-center py-16 bg-gradient-to-b"
       style={{ backgroundImage: `url(${bac})` }}
    >
      <div className="max-w-6xl mx-auto px-8">
        {/* Judul kiri atas seperti gambar */}
        <div className="mb-10">
          <h2 className="inline-block bg-white/95 text-3xl md:text-4xl font-semibold text-left px-6 py-2 rounded-tr-[40px] rounded-br-[40px] shadow-sm">
            KEUNGGULAN AKADEMIK
          </h2>
        </div>

        {/* CONTAINER semua item: border vertikal di kiri */}
        <div className="pl-6 border-l-2 border-gray-300">
          {/* Item 1 */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-2">
            {/* Teks (kiri) */}
            <div className="md:w-1/2 flex items-start gap-4">
              <img src={imgRect} alt="ikon" className="h-8 w-8 mt-1" />
              <div className="text-left">
                <h3 className="text-lg font-semibold text-white">
                  Akreditasi A (2023)
                </h3>
                <p className="mt-2 text-sm text-blue-500 font-bold leading-relaxed max-w-md ">
                  Meraih kembali predikat Akreditasi A dari BAN-SM pada tahun 2023
                  sebagai bukti konsistensi mutu pendidikan.
                </p>
              </div>
            </div>

            {/* Foto (kanan) */}
            <div className="md:w-1/2 flex justify-end w-full">
              <img
                src={foto1}
                alt="Akreditasi"
                className="w-full md:w-[560px] object-cover rounded-l-[80px] shadow-lg"
              />
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-2">
            {/* Teks (kiri) */}
            <div className="md:w-1/2 flex items-start gap-4">
              <img src={imgRect} alt="ikon" className="h-8 w-8 mt-1" />
              <div className="text-left">
                <h3 className="text-lg font-semibold text-white">
                  Kolaborasi Strategis
                </h3>
                <p className="mt-2 text-sm text-blue-500 font-bold leading-relaxed max-w-md">
                  Menjalin kerja sama dengan Universitas Nusa Mandiri untuk program
                  PKL, pelatihan digital, dan jalur beasiswa bagi siswa berprestasi.
                </p>
              </div>
            </div>

            {/* Foto (kanan) */}
            <div className="md:w-1/2 flex justify-end w-full">
              <img
                src={foto2}
                alt="Kolaborasi"
                className="w-full md:w-[560px] object-cover rounded-l-[80px] shadow-lg"
              />
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-0">
            {/* Teks (kiri) */}
            <div className="md:w-1/2 flex items-start gap-4">
              <img src={imgRect} alt="ikon" className="h-8 w-8 mt-1" />
              <div className="text-left">
                <h3 className="text-lg font-semibold text-white">
                  Penguatan Literasi Akademik
                </h3>
                <p className="mt-2 text-sm text-blue-500 font-bold leading-relaxed max-w-md">
                  Bekerja sama dengan Universitas Pamulang dalam pelatihan menulis
                  puisi digital, mendorong daya pikir kreatif dan literasi siswa.
                </p>
              </div>
            </div>

            {/* Foto (kanan) */}
            <div className="md:w-1/2 flex justify-end w-full">
              <img
                src={foto2}
                alt="Literasi"
                className="w-full md:w-[560px] object-cover rounded-l-[80px] shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>



          </>
  );
}

export default Layer2;
