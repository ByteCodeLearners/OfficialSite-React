import { useEffect } from "react";
import "../styles/gallery.css";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";
import { useInfoContextProvider } from "../context/InfoContextProvider";

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
  const info = useInfoContextProvider();

  const images = [
    `${info.server}/statics/event2022_pic1.jpeg`,
    `${info.server}/statics/event2022_pic2.jpeg`,
    `${info.server}/statics/event2022_pic3.jpeg`,
    `${info.server}/statics/event2022_pic4.jpeg`,
    `${info.server}/statics/event2022_pic5.jpeg`,
    `${info.server}/statics/event2022_pic6.jpeg`,
    `${info.server}/statics/event2022_pic7.jpeg`,
    `${info.server}/statics/event2022_pic8.jpeg`,
    `${info.server}/statics/event2022_pic9.jpeg`,
    `${info.server}/statics/event2022_pic10.jpg`,
    `${info.server}/statics/event2022_pic11.png`,
    `${info.server}/statics/fresh1.jpeg`,
    `${info.server}/statics/fresh2.jpeg`,
    `${info.server}/statics/fresh3.jpeg`,
    `${info.server}/statics/fresh4.jpeg`,
  ];
  const fresherImgs = [
    `${info.server}/statics/fresh5.jpeg`,
    `${info.server}/statics/fresh6.jpeg`,
    `${info.server}/statics/g1.jpg`,
    `${info.server}/statics/g2.jpg`,
    `${info.server}/statics/g3.jpg`,
    `${info.server}/statics/g4.jpg`,
    `${info.server}/statics/g5.jpg`,
    `${info.server}/statics/g6.jpg`,
    `${info.server}/statics/g7.jpg`,
    `${info.server}/statics/g8.jpg`,
    `${info.server}/statics/g10.jpg`,
    `${info.server}/statics/g11.jpg`,
    `${info.server}/statics/g12.jpg`,
    `${info.server}/statics/prevEvent1.jpg`,
    `${info.server}/statics/prevEvent2.jpg`,
  ];
  const slide3 = [
    `${info.server}/statics/event2022_pic12.jpeg`,
    `${info.server}/statics/event2022_pic13.jpeg`,
    `${info.server}/statics/event2022_pic14.jpeg`,
    `${info.server}/statics/event2022_pic15.jpeg`,
    `${info.server}/statics/event2022_pic16.jpeg`,
    `${info.server}/statics/event2022_pic17.jpeg`,
    `${info.server}/statics/event2022_pic18.jpeg`,
    `${info.server}/statics/event2022_pic19.jpeg`,
    `${info.server}/statics/event2022_pic20.jpeg`,
    `${info.server}/statics/event2022_pic21.jpeg`,
    `${info.server}/statics/event2022_pic22.jpeg`,
    `${info.server}/statics/event2022_pic23.jpeg`,
    `${info.server}/statics/event2022_pic24.jpeg`,
    `${info.server}/statics/event2022_pic25.jpeg`,
    `${info.server}/statics/event2022_pic26.jpeg`,
  ];
  return (
    <div className="gallery" id="Gallery">
      <h1>Events Gallery</h1>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="images">
            {images.map((img, index) => {
              return (
                <div className="gallery-img-container" key={index}>
                  <img className="gallery-img" src={img} alt="" />
                </div>
              );
            })}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="images">
            {fresherImgs.map((img, index) => {
              return (
                <div className="gallery-img-container" key={index}>
                  <img className="gallery-img" src={img} alt="" />
                </div>
              );
            })}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="images">
            {slide3.map((img, index) => {
              return (
                <div className="gallery-img-container" key={index}>
                  <img className="gallery-img" src={img} alt="" />
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
