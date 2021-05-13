import React, { useState } from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFlip, EffectCoverflow, EffectCube } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css'
import 'swiper/swiper-bundle.min.css';
import pricingPackages from '../../assets/data/pricing-list';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);



function LandingPrices() {
    const [slidesPerView, setSlidesPerView] = useState(3);
    window.addEventListener('resize', (ev) => {
        console.log(window.innerWidth)
        const width = window.innerWidth;
        if (width < 1024 && width >= 768)
            setSlidesPerView(2)
        else if (width < 768)
            setSlidesPerView(1)
        else
            setSlidesPerView(3)
    })
    return (
        <Swiper
            effect="slide"
            spaceBetween={10}
            slidesPerView={slidesPerView}
            className="section-content py-md-5 py-lg-5"
        >

            {pricingPackages.map((pricePackage, index) => {
                return <SwiperSlide key={index.toString()} >
                    <div key={index.toString()} className="price-box bg-gray" >
                        <div className="title" >
                            <span>{pricePackage.title}</span>
                        </div>
                        <div className="features">
                            {pricePackage.fetures.map((feature, featureIndex) => (
                                <div className="feature-item" key={featureIndex.toString()}>
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div className="price">
                            <span>{pricePackage.price} <span>&#8378;</span>
                            </span>
                        </div>
                    </div>
                </SwiperSlide>
            })}

        </Swiper>
    )
}

export default LandingPrices
