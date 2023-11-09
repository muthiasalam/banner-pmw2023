
import Image from 'next/image'
export default function Home() {
  return (
   <div>
      <div className="banner-container">
        {/*ini kartunya*/}
        <div className = "header-banner-wrapper">
          {/*Foto Profil dan Nama*/}
          <div className = "profile-header-banner">
            <Image
              src="/assets/profile.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
          <div className = "content-header-banner">
            <div className = "bio-name-header-banner">
            <h1>Muthia Salam</h1>
            <p>D121211003</p>
            <p>Pemrograman Web A</p>

            </div>
          </div>
        </div>
        <div className = "cta-banner-wrapper">
          <button>
            Halo!
          </button>
        </div>
      </div>
   </div>

  )

}
