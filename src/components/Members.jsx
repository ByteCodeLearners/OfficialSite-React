import React, { useEffect, useState } from "react";
import Imgcard from "./Imgcard";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/pagination/pagination.min.css";
import axios from "../api/axios";
import baseUrl from "../api/baseurl";

const currentbatch = 2021;

const Members = () => {
  const [mem, setMem] = useState(null);
  const getBatchData = async () => {
    const res = await axios.get(
      `${baseUrl}/api/member/getactive/batch/${currentbatch}`
    );

    setMem(res?.data?.data);
  };

  useEffect(() => {
    getBatchData();
  }, []);

  return (
    <div className="members-section">
      <h1>Members</h1>
      <Swiper
        spaceBetween={5}
        // slidesPerView={5}
        // centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          // when window width is >= 640px
          140: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          600: {
            slidesPerView: 3,
          },
          830: {
            slidesPerView: 4,
          },
        }}
      >
        <div className="members">
          <div className="mem-list1">
            {mem
              ? mem.map((member, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <Imgcard member={member} alt="member" />
                    </SwiperSlide>
                  );
                })
              : null}
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Members;
