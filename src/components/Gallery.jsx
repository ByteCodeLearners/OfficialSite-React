import { useEffect } from "react";
import "../styles/gallery.css";
// import plus_sign from '../images/plus.jpg'

// Core modules imports are same as usual
import { Navigation } from "swiper";
// Direct React component imports
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";

const Gallery = () => {
  const lightBox = () => {
    var lb = document.querySelector(".light-box");
    var imgs = document.querySelectorAll(".gallery-img");
    imgs.forEach((img) => {
      img.addEventListener("click", () => {
        lb.classList.add("active-light-box");
        const image = document.createElement("img");
        image.src = img.src;
        while (lb.firstChild) {
          lb.removeChild(lb.firstChild);
        }
        lb.appendChild(image);
      });
    });

    lb.addEventListener("click", (e) => {
      if (e.target !== e.currentTarget) return;
      lb.classList.remove("active-light-box");
    });
  };
  useEffect(() => {
    lightBox();
  }, []);
  const images = [
    "http://bytecodelearners.cuh.ac.in/statics/event2022_pic1.jpeg",
    "http://bytecodelearners.cuh.ac.in/statics/event2022_pic2.jpeg",
    "http://bytecodelearners.cuh.ac.in/statics/event2022_pic3.jpeg",
    "http://bytecodelearners.cuh.ac.in/statics/event2022_pic4.jpeg",
    "http://bytecodelearners.cuh.ac.in/statics/event2022_pic5.jpeg",
    "http://bytecodelearners.cuh.ac.in/statics/event2022_pic6.jpeg",
    "http://bytecodelearners.cuh.ac.in/statics/event2022_pic7.jpeg",
    "http://bytecodelearners.cuh.ac.in/statics/event2022_pic8.jpeg",
    "http://bytecodelearners.cuh.ac.in/statics/event2022_pic9.jpeg",
    "http://bytecodelearners.cuh.ac.in/statics/event2022_pic10.jpg",
    "http://bytecodelearners.cuh.ac.in/statics/event2022_pic11.png",
    "http://bytecodelearners.cuh.ac.in/statics/fresh1.jpeg",
    "http://bytecodelearners.cuh.ac.in/statics/fresh2.jpeg",
    "http://bytecodelearners.cuh.ac.in/statics/fresh3.jpeg",
    "http://bytecodelearners.cuh.ac.in/statics/fresh4.jpeg",
  ];
  const fresherImgs = [
    "http://bytecodelearners.cuh.ac.in/statics/fresh5.jpeg",
    "http://bytecodelearners.cuh.ac.in/statics/fresh6.jpeg",
    "http://bytecodelearners.cuh.ac.in/statics/g1.jpg",
    "http://bytecodelearners.cuh.ac.in/statics/g2.jpg",
    "http://bytecodelearners.cuh.ac.in/statics/g3.jpg",
    "http://bytecodelearners.cuh.ac.in/statics/g4.jpg",
    "http://bytecodelearners.cuh.ac.in/statics/g5.jpg",
    "http://bytecodelearners.cuh.ac.in/statics/g6.jpg",
    "http://bytecodelearners.cuh.ac.in/statics/g7.jpg",
    "http://bytecodelearners.cuh.ac.in/statics/g8.jpg",
    "http://bytecodelearners.cuh.ac.in/statics/g10.jpg",
    "http://bytecodelearners.cuh.ac.in/statics/g11.jpg",
    "http://bytecodelearners.cuh.ac.in/statics/g12.jpg",
    "http://bytecodelearners.cuh.ac.in/statics/prevEvent1.jpg",
    "http://bytecodelearners.cuh.ac.in/statics/prevEvent2.jpg",
  ];
  const slide3 = [
    "http://bytecodelearners.cuh.ac.in/statics/event2022_pic12.jpeg",
    "http://bytecodelearners.cuh.ac.in/statics/event2022_pic13.jpeg",
    "http://bytecodelearners.cuh.ac.in/statics/event2022_pic14.jpeg",
    "http://bytecodelearners.cuh.ac.in/statics/event2022_pic15.jpeg",
    "http://bytecodelearners.cuh.ac.in/statics/event2022_pic16.jpeg",
    "http://bytecodelearners.cuh.ac.in/statics/event2022_pic17.jpeg",
    "http://bytecodelearners.cuh.ac.in/statics/event2022_pic18.jpeg",
    "http://bytecodelearners.cuh.ac.in/statics/event2022_pic19.jpeg",
    "http://bytecodelearners.cuh.ac.in/statics/event2022_pic20.jpeg",
    "http://bytecodelearners.cuh.ac.in/statics/event2022_pic21.jpeg",
    "http://bytecodelearners.cuh.ac.in/statics/event2022_pic22.jpeg",
    "http://bytecodelearners.cuh.ac.in/statics/event2022_pic23.jpeg",
    "http://bytecodelearners.cuh.ac.in/statics/event2022_pic24.jpeg",
    "http://bytecodelearners.cuh.ac.in/statics/event2022_pic25.jpeg",
    "http://bytecodelearners.cuh.ac.in/statics/event2022_pic26.jpeg",
  ];
  return (
    <div className="gallery" id="Gallery">
      <h1>Events Gallery</h1>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="images">
            {images.map((img, index) => {
              return (
                <div className="gallery-img-container">
                  <img className="gallery-img" key={index} src={img} alt="" />
                </div>
              );
            })}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="images">
            {fresherImgs.map((img, index) => {
              return (
                <div className="gallery-img-container">
                  <img className="gallery-img" key={index} src={img} alt="" />
                </div>
              );
            })}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="images">
            {slide3.map((img, index) => {
              return (
                <div className="gallery-img-container">
                  <img className="gallery-img" key={index} src={img} alt="" />
                </div>
              );
            })}
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="light-box">.</div>
    </div>
  );
};

export default Gallery;
