import React, { useEffect, useState } from 'react';
import Imgcard from './Imgcard';
import api from '../backend.js';
// Core modules imports are same as usual
import {Autoplay, Navigation, Pagination } from 'swiper';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

// swiper bundle styles
import 'swiper/swiper-bundle.min.css'

// swiper core styles
import 'swiper/swiper.min.css'

// modules styles
import 'swiper/modules/navigation/navigation.min.css'
import 'swiper/modules/pagination/pagination.min.css'

const Members = () => {
    const [mem,setMem] = useState(null);

    const getBatch2020 = async ()=>{
        const res = await api.get("/api/batch/2020");
        setMem(res.data);
    }
   
    useEffect(()=>{
        getBatch2020();
    },[]);
    
    return ( 
        <div className="members-section">
            <h1>Members</h1>
            <Swiper
        spaceBetween={10}
        slidesPerView={3}
        centeredSlides={true}
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
            500: {
              slidesPerView: 2,
            },
            730: {
                slidesPerView: 3,
              },
          }}
      >
          <div className="members">
                <div className="mem-list1">
                    {mem?mem.map((member,index)=>{return <SwiperSlide key={index}><Imgcard member={member} alt="member" /></SwiperSlide> }):null}
                </div>
            </div>
        
      
      </Swiper>
            
        </div>
     );
}
 
export default Members;