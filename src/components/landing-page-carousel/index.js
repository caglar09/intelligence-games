import React, { useState } from 'react'
import { Container } from 'reactstrap';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFlip, EffectCoverflow,EffectCube } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css'
import 'swiper/swiper-bundle.min.css';

import { datas } from '../../assets/data/data';



// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFlip, EffectCoverflow,EffectCube]);


function LangingPageCarousel() {

    return (
        <Swiper
            effect="coverflow"
            spaceBetween={220}
            slidesPerView={1}
            // navigation
            loopFillGroupWithBlank
            loop
            pagination={{ clickable: true, type: 'bullets' }}
            className="section-content py-md-5 py-lg-5 py-xl-5"

        // scrollbar={{ draggable: true}}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
        >
            {datas && datas.map((data, index) => {
                return <SwiperSlide key={index.toString()} >
                    <Container>
                        <div className="row mb-50">
                            <div className={`col-sm-12  col-md-6 col-lg-6 col-xl-5 slide-text-container ${index % 2 === 0 ? 'order-0' : 'order-0'}`}>
                                <h1 className="slide-title">{data.title}  <span className="color-purple fw-bold">{data.titleColorful}</span></h1>
                                <span className="slide-subtitle">{data.subTitle}</span>
                            </div>
                            <div className={`col-sm-12 col-md-6 col-lg-6 col-xl-7 slide-img-container ${index % 2 === 0 ? 'order-1' : 'order-1'}`}>
                                <img src={data.image} alt={data.title} className="slide-img" />
                            </div>
                        </div>
                    </Container>
                </SwiperSlide>
            })}

        </Swiper>
    );
}

export default LangingPageCarousel
