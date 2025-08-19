
import logo from '../assets/Letris schol.png';
import icon1 from '../assets/profil.png';
import icon2 from '../assets/Icon2.png';
import icon3 from '../assets/Icon3.png';
import icon4 from '../assets/Icon4.png';
import icon5 from '../assets/Icon5.png';
import icon6 from '../assets/Icon6.png';
import icon7 from '../assets/Icon7.png';
import icon8 from '../assets/Icon8.png';
import icon9 from '../assets/Icon9.png';
import icon10 from '../assets/Icon10.png';

export default function Registrasi() {
    return (
        <>
            <div className='flex justify-center h-[840px] bg-gray-300'>
                <div className='flex flex-col items-start bg-white w-[550px] h-[650px] mt-10 border-black border rounded-[14px] p-6'>

                  
                    <div className="flex items-center space-x-4 mb-4">
                        <img src={logo} className='w-[60px] h-[60px] object-contain' alt="Logo" />
                        <div className="flex flex-col">
                            <h1 className='font-bold text-lg'>SMK Letris Indonesia 2</h1>
                            <p className='text-gray-600'>Educate Initiate Innovate</p>
                        </div>
                    </div>


                    <div className="mt-2">
                        <h1 className="text-xl font-semibold ">Penerimaan Peserta Didik Baru</h1>
                        <p className='text-gray-500'>Silakan lengkapi data berikut untuk proses pendaftaran</p>
                    </div>

                   
                    <div className="Data">
                        <h2 className='font-bold text-xl mb-1'>Data pribadi</h2>

                        <div className="flex items-center border border-black w-[500px] h-[30px] mb-2 px-2">
                            <img src={icon1} alt="" className="w-4 h-4 mr-2" />
                            <input type='text' placeholder='Nama lengkap' className='flex-1 outline-none' />
                        </div>

                        <div className="flex gap-2 mb-2">
                            <div className="flex items-center border border-black w-[235px] px-2">
                                <img src={icon2} alt="" className="w-4 h-4 mr-2" />
                                <input type='text' placeholder='Tempat lahir' className='flex-1 outline-none' />
                            </div>
                            <div className="flex items-center border border-black w-[235px] px-2">
                                <img src={icon3} alt="" className="w-4 h-4 mr-2" />
                                <input type='number' placeholder='Tanggal lahir' className='flex-1 outline-none' />
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <div className="flex items-center border border-black w-[235px] px-2">
                                <img src={icon4} alt="" className="w-4 h-4 mr-2" />
                                <input type='text' placeholder='Jenis kelamin' className='flex-1 outline-none' />
                            </div>
                            <div className="flex items-center border border-black w-[235px] px-2">
                                <img src={icon5} alt="" className="w-4 h-4 mr-2" />
                                <input type='text' placeholder='Agama' className='flex-1 outline-none' />
                            </div>
                        </div>
                    </div>

                    {/* Akademik */}
                    <div className="Akademik mt-4">
                        <h2 className='font-bold text-2xl mb-1'>Data Akademik</h2>
                        <div className="flex items-center border border-black w-[500px] px-2 mb-4">
                            <img src={icon6} alt="" className="w-4 h-4 mr-2" />
                            <input type='text' placeholder='Asal Sekolah' className='flex-1 outline-none' />
                        </div>
                    </div>

                    {/* Alamat */}
                    <div className="alamat">
                        <h2 className='font-bold'>Alamat dan Kontak</h2>
                        <div className="flex items-center border border-black w-[500px] h-[30px] mb-2 px-2">
                            <img src={icon7} alt="" className="w-4 h-4 mr-2" />
                            <input type='text' placeholder='Alamat' className='flex-1 outline-none' />
                        </div>

                        <div className="flex gap-2 mb-2">
                            <div className="flex items-center border border-black w-[235px] px-2">
                                <img src={icon8} alt="" className="w-4 h-4 mr-2" />
                                <input type='number' placeholder='No hp' className='flex-1 outline-none' />
                            </div>
                            <div className="flex items-center border border-black w-[235px] px-2">
                                <img src={icon9} alt="" className="w-4 h-4 mr-2" />
                                <input type='text' placeholder='Email' className='flex-1 outline-none' />
                            </div>
                        </div>
                    </div>


                    <div className="Dataorangtua">
                        <h2 className='font-bold'>Data Orang Tua</h2>
                        <div className="flex gap-2 mb-2">
                            <div className="flex items-center border border-black w-[235px] px-2">
                                <img src={icon10} alt="" className="w-4 h-4 mr-2" />
                                <input type='text' placeholder='Nama Ayah' className='flex-1 outline-none' />
                            </div>
                            <div className="flex items-center border border-black w-[235px] px-2">
                                <img src={icon1} alt="" className="w-4 h-4 mr-2" />
                                <input type='text' placeholder='Nama Ibu' className='flex-1 outline-none' />
                            </div>
                        </div>
                    </div>

                    
                    <div className="submit mt-4">
                        <a href='#' className='bg-blue-500 text-white px-4 py-2 rounded-full ml-40'>Daftar sekarang</a>
                    </div>
                </div>
            </div>
        </>
    )
}
