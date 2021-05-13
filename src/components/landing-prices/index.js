import React from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFlip, EffectCoverflow, EffectCube } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css'
import 'swiper/swiper-bundle.min.css';
import pricingPackages from '../../assets/data/pricing-list';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);



function LandingPrices() {
    return (
        <Swiper
            effect="slide"
            spaceBetween={20}
            slidesPerView={3}
            // navigation
            pagination={{ type: 'bullets' }}
            className="section-content py-md-5 py-lg-5 py-xl-5"

            scrollbar={{ draggable: true, }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
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
