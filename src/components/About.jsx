
import logo from '../assets/Letris schol.png';
import bac from '../assets/bg.png'

function About(){
    return(
        <>
        <div className="Udin pb-7"
        style={{  backgroundImage: `url(${bac})`}}
        >

        
        <div clas>
            <div className="w-[560px] h-[180px] bg-blue-900 m-7 border-b-2 flex">
                <p className="text-4xl text-white pl-7 mt-16"
                style={{
                  
                  fontFamily: "'Luckiest Guy', cursive",
                  WebkitTextStroke: "0.2px white"
          }}>About our school</p>
                <img src={logo} alt=""  className='w-[190px] relative '/>
            </div>
            <div className='flex justify-end'>
                <img src={logo} alt=""  className='w-[1px]'/>
            </div>
            <div class="bg-blue-900 text-white max-w-3xl p-8 rounded-2xl shadow-lg">
    <p class="leading-relaxed text-justify">
      <strong>SMK Letris Indonesia 2</strong> adalah sekolah menengah kejuruan swasta unggulan di kawasan Pamulang, Tangerang Selatan, yang telah meraih akreditasi A. Bernaung di bawah Yayasan Leo Sutrisno, sekolah ini menawarkan 7 program keahlian fokus industri masa kini, seperti Multimedia, RPL, TKJ, OTKP, AKL, BDP, dan PBS. 
    </p>
    
    <p class="mt-4 leading-relaxed text-justify">
      Berkomitmen menyediakan fasilitas belajar modern dan nyaman, sekolah ini dilengkapi dengan ruang kelas lengkap (58 unit), laboratorium khusus (komputer, multimedia, IPA, bahasa), perpustakaan, serta sarana sanitasi yang baik. Dengan tenaga pendidik profesional dan bersertifikat, SMK Letris 2 memastikan lulusan siap menghadapi tantangan dunia digital dan industri kreatif.
    </p>
  </div>
        </div>
        </div>
        </>
    )

}

export default About