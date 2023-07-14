import ca from "../../../assets/gallery/ca.png";
import ftc from "../../../assets/gallery/ftc.png";
import ftc2 from "../../../assets/gallery/ftc2.png";
import git from "../../../assets/gallery/git.png";
import python from "../../../assets/gallery/python.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "./Gallery.css";
import AOS from "aos";

const photos = [ca, ftc, ftc2, git, python];

const Gallery = () => {
  AOS.init();

  return (
    <div
      className="mt-4 sm:mt-5 md:mt-6 lg:mt-8 mx-9 sm:mx-12 lg:mx-16 bg-gray-100 shadow-lg shadow-zinc-700 dark:shadow-md dark:shadow-[#14940c]"
      data-aos="zoom-in"
      data-aos-duration="2500"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
    >
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        id="gallery"
      >
        {photos.map((photo) => (
          <SwiperSlide key={photos.indexOf(photo)}>
            <img src={photo} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
