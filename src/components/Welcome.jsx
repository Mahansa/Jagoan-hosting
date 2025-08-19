import React from 'react';

import { Link } from "react-router-dom";
import logo from '../assets/Letris schol.png';
import schoolImage1 from '../assets/Kelapasekolah.png';
import pplgImage from '../assets/PPLG.png';
import dkvImage from '../assets/DKV.png';
import businessImage from '../assets/Bisnis.png';
import schoolImage2 from '../assets/Sekolah3.png';


function Welcome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900">
    
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg shadow-2xl rounded-3xl p-8 md:p-12 border border-white/20">
              <div className="flex flex-col lg:flex-row items-center justify-between border-b border-white/20 pb-8 mb-8">
                <div className="text-center lg:text-left mb-6 lg:mb-0">
                  <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                    Welcome to
                  </h1>
                  <h2 className="text-3xl md:text-5xl font-black text-yellow-400 mt-2">
                    Letris School
                  </h2>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-lg opacity-50"></div>
                  <img 
                    src={logo} 
                    className="relative w-24 md:w-32 hover:scale-110 transition-transform duration-300"
                    alt="Letris School Logo"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6 text-white">
                  <p className="text-lg md:text-xl leading-relaxed">
                    Selamat datang di <span className="font-bold text-yellow-400">SMK Letris Indonesia 2</span>, 
                    sekolah berakreditasi A yang berkomitmen mencetak generasi unggul, kreatif, 
                    dan siap menghadapi tantangan masa depan.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Dengan <span className="font-bold text-yellow-400">7 program keahlian</span> yang 
                    relevan dengan kebutuhan industri, kami menghadirkan pembelajaran yang modern, 
                    praktis, dan berkarakter.
                  </p>
                  <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 p-6 rounded-2xl border border-yellow-400/30">
                    <p className="text-yellow-300 font-semibold text-center text-lg italic">
                      "Together we grow, together we achieve excellence."
                    </p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-30"></div>
                    <img 
                      src={logo} 
                      className="relative w-48 md:w-64 hover:rotate-6 transition-transform duration-500"
                      alt="School Building"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      <div className="py-20 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <img 
                    src={schoolImage1}
                    className="relative w-full rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                    alt="Our Vision"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  <h2 className="text-4xl md:text-5xl font-black">Our Vision</h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Menjadi SMK unggulan di Tangerang Selatan yang mencetak lulusan berkualitas tinggi dengan keahlian terdepan, berakhlak mulia, dan adaptif terhadap perkembangan teknologi dan kebutuhan industri.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-semibold">Excellence</span>
                  <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full font-semibold">Innovation</span>
                  <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full font-semibold">Character</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    
      <div className="py-20 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  <h2 className="text-4xl md:text-5xl font-black">Our Mission</h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We aim to provide holistic education in an environment which seeks to bring out 
                  the potential in every student to the fullest; developing in each a strong moral 
                  character, imbued with Godly values & principles and to guide and prepare him or 
                  her to be a leader for the greater good and of service to others.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                    <span className="text-gray-700">Holistic Education Development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                    <span className="text-gray-700">Strong Moral Character Building</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                    <span className="text-gray-700">Future Leadership Preparation</span>
                  </div>
                </div>
                <button className="group inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-bold hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  <span>View Details</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <img 
                  src={schoolImage2}
                  className="relative w-full rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                  alt="Our Mission"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-white">
                3 Jurusan Unggulan
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-400">
                SMK Letris Indonesia
              </h3>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Mempersiapkan Generasi Siap Kerja dan Berdaya Saing Global
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* PPLG Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden transform group-hover:scale-105 transition-all duration-300 shadow-2xl">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={pplgImage} 
                      alt="PPLG" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-2xl font-bold text-xl">
                      PPLG
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      Membekali siswa dengan keterampilan pemrograman, pengembangan aplikasi, 
                      dan rekayasa sistem berbasis teknologi digital
                    </p>
                    <div className = "mt-[10px]">

                   <Link to = "/informatika">
                    <button className="group/btn w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-3 px-6 rounded-2xl font-bold hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                      <span className="group-hover/btn:mr-2 transition-all duration-300">Info Lengkap</span>
                      <span className="inline-block group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                    </button>
                    </Link>
                    
                    </div>
                  </div>
                </div>
              </div>

              {/* DKV Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-red-600 rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden transform group-hover:scale-105 transition-all duration-300 shadow-2xl">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={dkvImage} 
                      alt="DKV" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="inline-block bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-3 rounded-2xl font-bold text-xl">
                      DKV
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      Mengembangkan kreativitas dan keterampilan desain visual, multimedia, 
                      dan komunikasi grafis untuk industri kreatif
                    </p>
                    <div className = "mt-[20px]">
                    <Link to = '/informatika' >
                    <button className="group/btn w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-3 px-6 rounded-2xl font-bold hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                      <span className="group-hover/btn:mr-2 transition-all duration-300">Info Lengkap</span>
                      <span className="inline-block group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                    </button>
                    </Link>
                    </div>
                 
                  </div>
                </div>
              </div>

              {/* Business Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-teal-600 rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden transform group-hover:scale-105 transition-all duration-300 shadow-2xl">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={businessImage} 
                      alt="Business Management" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="inline-block bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-2xl font-bold text-lg text-center">
                      Bisnis & Management
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      Mempersiapkan siswa dengan pengetahuan bisnis, manajemen, 
                      kewirausahaan, dan keterampilan kepemimpinan modern
                    </p>
                    <button className="group/btn w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-3 px-6 rounded-2xl font-bold hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                      <span className="group-hover/btn:mr-2 transition-all duration-300">Info Lengkap</span>
                      <span className="inline-block group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default Welcome;