import { useEffect, useState } from "react";
import "../styles/gallery.css";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";
import axios from "../api/axios";
import serverUrl from "../api/serverurl";

const Gallery = () => {
  const [image, setImage] = useState();
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
  const getImagesBySlides = (images, columns = 9) => {
    let result = [];
    for (let i = 0; i < images.length; i += columns) {
      result.push(images.slice(i, i + columns));
    }
    return result;
  };
  const getAllGalleryImages = async () => {
    const res = await axios.get("/gallery/get");

    const images = res?.data?.data;
    setImage(getImagesBySlides(images));
  };
  useEffect(() => {
    lightBox();
    getAllGalleryImages();
  }, []);
  return (
    <div className="gallery" id="Gallery">
      <h1>Events Gallery</h1>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {image != null ? (
          image.map((evtimg, key) => {
            return (
              <SwiperSlide key={key}>
                <div className="images">
                  {evtimg.map((img, index) => {
                    return (
                      <div className="gallery-img-container" key={index}>
                        <img
                          className="gallery-img"
                          src={`${serverUrl}/eventgallery/${img.image_path}`}
                          alt=""
                        />
                      </div>
                    );
                  })}
                </div>
              </SwiperSlide>
            );
          })
        ) : (
          <></>
        )}
        {/* {slide1 != null ? (
          <SwiperSlide>
            <div className="images">
              {slide1.map((img, index) => {
                return (
                  <div className="gallery-img-container" key={index}>
                    <img
                      className="gallery-img"
                      src={`${serverUrl}/eventgallery/${img.image_path}`}
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        ) : (
          <SwiperSlide className="abc">hello</SwiperSlide>
        )}
        {slide2 != null ? (
          <SwiperSlide>
            <div className="images">
              {slide2.map((img, index) => {
                return (
                  <div className="gallery-img-container" key={index}>
                    <img
                      className="gallery-img"
                      src={`${serverUrl}/eventgallery/${img.image_path}`}
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        ) : (
          <></>
        )}
        {slide3 != null ? (
          <SwiperSlide>
            <div className="images">
              {slide3.map((img, index) => {
                return (
                  <div className="gallery-img-container" key={index}>
                    <img
                      className="gallery-img"
                      src={`${serverUrl}/eventgallery/${img.image_path}`}
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        ) : (
          <div className="abc">hello</div>
        )} */}
      </Swiper>
      <div className="light-box">.</div>
    </div>
  );
};

export default Gallery;
