import Program from '../assets/GAMBAR pemograman.webp';
import { Link } from "react-router-dom";
import Engine from '../assets/Game engine.webp';
import laptop from '../assets/orang liat laptop.webp';
import cameramen from '../assets/Orang lagi foto pake kamera.jfif';
import Desainer from '../assets/Gambar orang lagi desain di laptop.jfif';
import Adobe from '../assets/Kumpulan gambar Adobe.png';
import Perbaikan from '../assets/Servise laptop.webp';

export default function Informatika() {
  return (
    <>
      <header className="bg-blue-900 text-white py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
          <h1 className="text-lg font-bold">SMK Letris Indonesia</h1>
          <nav className="space-x-6">
            <Link to = "/" className="hover:text-gray-300">Home</Link> 
            <a href="#" className="hover:text-gray-300">Tentang Kami</a>
            <a href="#" className="hover:text-gray-300">Berita</a>
            <a href="#" className="hover:text-gray-300">Profil</a>
            <a href="#" className="hover:text-gray-300">Jurusan</a>
            <a href="#" className="hover:text-gray-300">Osis & Ekskul</a>
          </nav>
        </div>
      </header>

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold italic text-center text-indigo-800 mb-6">
          Prodi Teknik Informatika
        </h2>
        <h3 className="text-xl font-semibold mb-4">Apa itu Teknik Informatika?</h3>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src={laptop}
            alt="Ilustrasi Informatika"
            className="rounded-lg shadow-md"
          />
          <p className="text-justify leading-relaxed">
            Teknik Informatika merupakan jurusan yang mempelajari bagaimana komputer bekerja, mencakup pemrograman,
            pengembangan software, jaringan, hingga keamanan sistem. Siswa akan dibimbing untuk menguasai logika,
            algoritma, serta teknologi terkini seperti AI dan IoT. Program ini dirancang untuk menyiapkan lulusan
            yang siap kerja dan mampu bersaing di industri digital yang terus berkembang secara cepat dan dinamis.
          </p>
        </div>
      </section>

      {/* Jurusan */}
      <section className="max-w-6xl mx-auto px-6 space-y-10">
        <h3 className="text-lg font-semibold text-blue-700">
          Berbagai jurusan prodi Teknik Informatika yang ada di SMK Letris 2
        </h3>

        {/* PPLG */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-bold mb-3">1. PPLG (Perkembangan Perangkat Lunak dan Gim)</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <p className="text-justify">
                 PPLG (Pengembangan Perangkat Lunak dan Gim) adalah salah satu kompetensi keahlian di bidang Teknik Informatika yang fokus pada pembelajaran pemrograman, pembuatan aplikasi, serta pengembangan gim digital. Di jurusan ini, siswa tidak hanya belajar teori, tetapi langsung praktik membuat software dan game dari nol.
Selama tiga tahun, siswa akan dibekali keterampilan teknis seperti algoritma dan struktur data, pemrograman berbasis teks dan visual, pengembangan aplikasi web dan mobile, desain antarmuka pengguna (UI/UX), pembuatan gim 2D/3D, hingga manajemen proyek teknologi. 
   Selain itu, siswa juga diperkenalkan pada tools dan bahasa pemrograman populer seperti HTML, CSS, JavaScript, dan UNITY. Di PPLG, kreativitas dan logika berpadu. Siswa diajak untuk berinovasi menciptakan solusi digital yang berguna di berbagai bidang. Mereka juga akan menjalani praktik kerja industri (PKL), magang di perusahaan teknologi, hingga membuat proyek akhir sebagai bukti kemampuan mereka.
Setelah lulus, siswa PPLG memiliki prospek kerja yang sangat luas, mulai dari software developer, game developer, UI/UX designer, mobile app developer, web programmer, hingga IT support. Mereka juga memiliki bekal kuat untuk melanjutkan studi ke perguruan tinggi atau membangun startup digital sendiri.
            </p>
            <img
              src={Engine}
              alt="PPLG"
              className="rounded-md shadow"
            />
            <img
            src={Program}
            className='rounded-md shadow'
            ></img>
          </div>
        </div>

        {/* DKV Reguler */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-bold mb-3">2.1 DKV (Desain Komunikasi Visual) Reguler</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <p className="text-justify">
                 Desain Komunikasi Visual (DKV) adalah jurusan yang mengajarkan cara menyampaikan pesan melalui media visual yang menarik, informatif, dan efektif. Di jurusan ini, siswa belajar memadukan seni, teknologi, dan komunikasi agar mampu menciptakan karya desain yang memiliki nilai estetika sekaligus fungsi komunikasi yang kuat.Selama pembelajaran, siswa DKV akan mendalami berbagai keterampilan seperti menggambar manual dan digital, desain grafis, tipografi, fotografi, videografi, ilustrasi, animasi 2D/3D, serta pembuatan konten kreatif untuk media sosial. Mereka juga akan menggunakan software profesional seperti Adobe Photoshop, Illustrator, InDesign, After Effects, dan lainnya untuk mewujudkan ide-ide kreatif menjadi karya nyata.
  Selain teori, siswa juga akan mengikuti proyek-proyek nyata, kolaborasi desain, pameran karya, serta praktik kerja lapangan di industri kreatif. Tujuannya adalah membentuk lulusan yang siap kerja, kreatif, dan adaptif terhadap perkembangan teknologi dan tren desain.
  Lulusan DKV memiliki prospek kerja yang luas seperti menjadi desainer grafis, illustrator, animator, UI/UX designer, videographer, content creator, atau bahkan membangun studio kreatif dan brand pribadi.
            </p>
            <img
              src={Desainer} 
              alt="DKV Reguler"
              className="rounded-md shadow w-[800px]"
            />
            <img
            src={cameramen}
            >
            </img>
          </div>
        </div>

        {/* DKV Bilingual */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-bold mb-3">2.2 DKV (Desain Komunikasi Visual) Bilingual</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <p className="text-justify">
                 Desain Komunikasi Visual (DKV) Bilingual adalah jurusan kreatif yang mengajarkan cara menyampaikan pesan melalui media visual secara menarik, informatif, dan efektif dengan keunikan utama: penggunaan Bahasa Inggris sebagai bahasa utama dalam pembelajaran.
   Berbeda dari kelas reguler, DKV Bilingual mengintegrasikan kemampuan desain dan komunikasi global. Seluruh proses belajar berlangsung dalam Bahasa Inggris, termasuk diskusi, presentasi, dan penugasan. Bahkan, kami juga menghadirkan native speaker (guru asing) sebagai pengajar, untuk melatih kemampuan komunikasi siswa secara langsung dan membiasakan mereka dengan standar internasional.
   Siswa DKV akan mendalami keterampilan desain seperti menggambar manual dan digital, tipografi, desain grafis, ilustrasi, fotografi, videografi, animasi 2D/3D, hingga pembuatan konten kreatif untuk media sosial. Mereka juga menggunakan software profesional seperti Adobe Photoshop, Illustrator, InDesign, After Effects, dan lainnya.
Tidak hanya teori, siswa juga akan terlibat dalam proyek nyata, kolaborasi desain, pameran karya, serta praktik kerja lapangan di industri kreatif.
   Lulusan DKV Bilingual memiliki peluang karier yang luas, baik di dalam negeri maupun global, seperti desainer grafis, illustrator, animator, UI/UX designer, content creator, hingga founder studio desain dan brand sendiri. DKV bukan hanya tentang desain — ini tentang menciptakan dampak visual dengan cara yang profesional dan mendunia.
            </p>
            <img
              src={Adobe}
              alt="DKV Bilingual"
              className="rounded-md shadow"
            />
          </div>
        </div>

        {/* TKJ */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-bold mb-3">3. TKJ (Teknik Jaringan Komputer)</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <p className="text-justify">
                Teknik Komputer dan Jaringan (TKJ) adalah jurusan yang fokus pada penguasaan teknologi komputer dan sistem jaringan. Di jurusan ini, siswa tidak hanya belajar teori, tetapi juga praktik langsung dalam merakit, menginstal, dan mengelola perangkat keras serta jaringan komputer.
   Selama masa belajar, siswa TKJ akan mempelajari berbagai materi penting seperti perakitan komputer, instalasi sistem operasi (Windows & Linux), dasar-dasar jaringan komputer, konfigurasi LAN dan WAN, penggunaan perangkat jaringan seperti router, switch, dan access point, serta keamanan jaringan (cybersecurity dasar). Tak hanya itu, siswa juga diajarkan keterampilan troubleshooting, administrasi server, dan penggunaan perangkat lunak manajemen jaringan seperti Mikrotik, Cisco Packet Tracer, dan Winbox.
Pembelajaran dilakukan secara aktif, termasuk proyek jaringan, simulasi infrastruktur IT, serta praktik kerja industri (PKL) di perusahaan teknologi. Siswa juga diajarkan cara membangun jaringan dari nol hingga siap digunakan di lingkungan sekolah, kantor, atau instansi publik.
   Lulusan TKJ memiliki peluang karier sebagai Network Technician, IT Support, System Administrator, Network Engineer, Teknisi ISP, hingga menjadi wirausaha layanan IT. Jurusan ini sangat cocok bagi kamu yang ingin langsung kerja setelah lulus atau melanjutkan kuliah di bidang teknologi dan informatika.
            </p>
            <img
              src={Perbaikan}
              alt="TKJ"
              className="rounded-md shadow"
            />
          </div>
        </div>
      </section>

      <footer className="bg-blue-900 text-white mt-16 py-6 text-center">
        <p>© 2025 SMK Letris Indonesia. Semua Hak Dilindungi.</p>
      </footer>
    </>
  );
}
