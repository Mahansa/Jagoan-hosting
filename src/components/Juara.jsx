import React, { useState } from 'react';
import { Trophy, Medal, Star, Calendar, Award, Camera, MapPin } from 'lucide-react';

export default function Juara() {
  const [selectedFilter, setSelectedFilter] = useState('Semua');

  const filters = ['Semua', 'Akademik', 'Non-Akademik'];

  const prestasi = [
    {
      id: 1,
      nama: "User1",
      prestasi: "Juara 1 Olimpiade Matematika",
      kategori: "Akademik",
      bulan: "Agustus",
      foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=face",
      tempat: "SMK letris indonesia 2",
      medali: "Emas"
    },
    {
      id: 2,
      nama: "User2",
      prestasi: "Medali Emas Badminton",
      kategori: "Non-Akademik", 
      bulan: "Agustus",
      foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=face",
      tempat: "SMK letris indonesia 2",
      medali: "Emas"
    },
    {
      id: 3,
      nama: "User3",
      prestasi: "Juara Terbaik Seni Lukis",
      kategori: "Non-Akademik",
      bulan: "Agustus", 
      foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=face",
      tempat: "SMK letris indonesia 2",
      medali: "Emas"
    },
    {
      id: 4,
      nama: "User4",
      prestasi: "Juara 2 Debat Bahasa Inggris",
      kategori: "Akademik",
      bulan: "Agustus",
      foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=face",
      tempat: "SMK letris indonesia 2",
      medali: "Perak"
    },
    {
      id: 5,
      nama: "User5",
      prestasi: "Juara Renang Gaya Bebas",
      kategori: "Non-Akademik",
      bulan: "Agustus",
      foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=face",
      tempat: "SMK letris indonesia 2",
      medali: "Emas"
    },
    {
      id: 6,
      nama: "User6",
      prestasi: "Penghargaan Musik Piano",
      kategori: "Non-Akademik",
      bulan: "Agustus",
      foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=face",
      tempat: "SMK letris indonesia 2",
      medali: "Emas"
    }
  ];

  const filteredPrestasi = selectedFilter === 'Semua' 
    ? prestasi 
    : prestasi.filter(item => item.kategori === selectedFilter);

  const getMedalIcon = (medali) => {
    switch(medali) {
      case 'Emas': return <Medal className="w-5 h-5 text-yellow-500" />;
      case 'Perak': return <Medal className="w-5 h-5 text-gray-400" />;
      case 'Perunggu': return <Medal className="w-5 h-5 text-amber-600" />;
      default: return <Award className="w-5 h-5 text-blue-500" />;
    }
  };

  const getMedalColor = (medali) => {
    switch(medali) {
      case 'Emas': return 'from-yellow-400 to-yellow-600';
      case 'Perak': return 'from-gray-300 to-gray-500';
      case 'Perunggu': return 'from-amber-500 to-amber-700';
      default: return 'from-blue-400 to-blue-600';
    }
  };

  return(
    <>
    
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Header */}
      <div className="relative container mx-auto px-6 py-12">
        <div className="text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="w-28 h-28 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                <Trophy className="w-14 h-14 text-white" />
              </div>
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce">
                <Star className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-4 tracking-tight">
            LETRIS INDONESIA 2
          </h1>
          <p className="text-3xl text-blue-200 font-light mb-8 tracking-wide">Prestasi</p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedFilter === filter
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-xl shadow-blue-500/25'
                    : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Year Badge */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl px-8 py-4 text-white border border-white/20">
            <Calendar className="w-6 h-6" />
            <span className="font-semibold text-lg">Tahun 2025</span>
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="container mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrestasi.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-3 hover:shadow-3xl border border-white/20"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Photo Section */}
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={item.foto} 
                  alt={item.nama}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Medal Badge */}
                <div className={`absolute top-4 right-4 bg-gradient-to-r ${getMedalColor(item.medali)} rounded-full p-3 shadow-lg`}>
                  {getMedalIcon(item.medali)}
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-white font-medium text-sm">{item.kategori}</span>
                </div>

                {/* Name at Bottom */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-1">{item.nama}</h3>
                  <div className="flex items-center gap-2 text-white/80">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{item.tempat}</span>
                  </div>
                </div>

                {/* Photo Icon Overlay */}
                <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Camera className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  <span className="text-lg font-semibold text-gray-700">{item.bulan}</span>
                  <div className="ml-auto">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm px-4 py-2 rounded-full font-medium">
                      2025
                    </span>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-gray-800 mb-3 leading-tight">
                  {item.prestasi}
                </h4>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {getMedalIcon(item.medali)}
                    <span className="font-semibold text-gray-600">{item.medali}</span>
                  </div>
                  
                  <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:shadow-lg transform hover:scale-105">
                    Detail
                  </button>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300 pointer-events-none opacity-0 group-hover:opacity-100"></div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPrestasi.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Trophy className="w-12 h-12 text-white/50" />
            </div>
            <p className="text-white/70 text-xl">Belum ada prestasi untuk kategori ini</p>
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Pencapaian LETRIS 2025</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <Trophy className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">6</div>
              <div className="text-blue-200 font-medium">Total Prestasi</div>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <Medal className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">5</div>
              <div className="text-blue-200 font-medium">Medali Emas</div>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <Star className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">3</div>
              <div className="text-blue-200 font-medium">Kategori</div>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <Award className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">6</div>
              <div className="text-blue-200 font-medium">Siswa berpretasi</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-1 rounded-3xl shadow-2xl">
            <div className="bg-slate-900 rounded-3xl px-12 py-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                🏆 Bergabunglah dengan Para Juara!
              </h3>
              <p className="text-blue-200 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                LETRIS Indonesia 2 membuka kesempatan emas bagi seluruh siswa Indonesia untuk menunjukkan bakat terbaik dan meraih prestasi membanggakan.
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}