import { useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import NavButton from "../components/NavButton.jsx";
import { courses } from "../data/courses";
import VideoCard from "../components/VideoCard";
import { useState } from "react";
import FilterNav from "../components/FilterNav.jsx";
function Home() {
  const [filter, setFilter] = useState("all");

  const categories = [
    { key: "all", label: "Semua Kelas" },
    { key: "pemasaran", label: "Pemasaran" },
    { key: "desain", label: "Desain" },
    { key: "pengembangan", label: "Pengembangan Diri" },
    { key: "bisnis", label: "Bisnis" },
  ];
  return (
    <div className="">
      <div className="px-2 md:px-20 bg-[#FFFDF3]">
        {/* <!--header--> */}
        <Header withUserMenu={true} />

        {/* <!--spot--> */}
        <section id="spotlight" className="pt-28 md:pt-36 bg-white rounded-lg">
          <div className="relative w-full h-[500px] md:h-80 flex items-center justify-center rounded-lg">
            <img
              src={`${import.meta.env.BASE_URL}spot.jpg`}
              alt="Spotlight"
              className="rounded-lg absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="absolute rounded-lg inset-0 bg-black bg-opacity-80 z-1"></div>
            <div className="md:w-2/4 relative z-20 text-white text-center px-3 md:px-4 md:py-12">
              <h2 className="text-3xl font-bold mb-2 md:my-8">
                Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
                Interaktif!
              </h2>
              <p className="text-lg ">
                Temukan ilmu baru yang menarik dan mendalam melalui koleksi
                video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda
                juga dapat berpartisipasi dalam latihan interaktif yang akan
                meningkatkan pemahaman Anda.
              </p>
              <NavButton variant="primary" className="my-8 w-full md:w-3/4">
                Temukan Video Course untuk Dipelajari!
              </NavButton>
            </div>
          </div>
        </section>

        {/* <!--headmenu--> */}
        <section id="headmenu" className="pt-14 bg-lightgray px-2">
          <div className="w-full">
            <h2 className="text-black text-3xl font-bold">
              Koleksi Video Pembelajaran Unggulan
            </h2>
            <p className="text-[#333333AD] text-lg font-semibold mt-3">
              Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
            </p>
          </div>
        </section>

        {/* <!--mininav--> */}

        <FilterNav categories={categories} onFilterChange={setFilter} />

        {/* <!--video course--> */}
        <section id="videocourse" className="w-full mt-10">
          <div className="w-full md:flex flex-wrap justify-evenly gap-6">
            {courses
              .filter(
                (course) => filter === "all" || course.category === filter
              )
              .map((course, index) => (
                <VideoCard
                  key={`${course.id}`}
                  image={course.image}
                  title={course.title}
                  description={course.desc}
                  avatar={course.avatar}
                  name={course.instructor}
                  role={course.role}
                  company={course.company}
                  rating={course.rating}
                  review={course.reviews}
                  price={course.price}
                />
              ))}
          </div>
        </section>

        {/* <!--news--> */}
        <section id="newsletter" className=" bg-black">
          <div className="relative w-full h-auto flex items-center justify-center">
            <img
              src={`${import.meta.env.BASE_URL}newsletter.jpg`}
              alt="Spotlight"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="absolute inset-0 bg-black bg-opacity-80 z-1"></div>
            <div className="py-12 md:w-2/5 relative z-20 text-white text-center px-4">
              <h5 className="text-xl  text-lightgray mb-2">NEWSLETTER</h5>
              <h3 className="text-2xl font-bold mb-2">
                Mau Belajar Lebih Banyak?
              </h3>
              <p className="text-lg">
                Daftarkan dirimu untuk mendapatkan informasi terbaru dan
                penawaran spesial dari program-program terbaik videobelajar.id
              </p>
              <div className="flex justify-center mt-10">
                <div className="flex justify-center flex-wrap md:relative md:w-80">
                  <input
                    type="text"
                    className="placeholder:text-center md:placeholder:text-start w-full p-2 md:pr-24 rounded-lg text-black placeholder:text-gray-500 border border-gray-300"
                    placeholder="Masukkan emailmu"
                  />
                  <button className="justify-center flex w-full mt-6 md:w-auto md:m-0 md:absolute md:top-1/2 md:right-1 md:-translate-y-1/2 bg-yellow-500 px-3 py-1 rounded-lg font-bold text-white">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* <!--footer--> */}
      <Footer />
    </div>
  );
}

export default Home;
