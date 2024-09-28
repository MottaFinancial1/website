'use client';
import Link from 'next/link';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  spaceBetween: 0,
  effect: 'fade',
  loop: true,
  autoplay: {
    delay: 6000,
  },
};

export default function HeroSlider() {
  return (
    <>
      <Swiper {...swiperOptions}>
        <SwiperSlide className="swiper-slide slider__single">
          <div
            className="slider__bg"
            data-background="/assets/img/slider/slider_bg01.jpg"
          />
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="slider__content">
                  <span className="sub-title">
                    We Are Experts In This Field
                  </span>
                  <h2 className="title">
                    "No need to worry, my accountant handles that."
                  </h2>
                  <p>
                    Our CPAs are among the industry's top professionals, ready
                    to help you, your family, clients, or business achieve your
                    financial goals.
                  </p>
                  <Link href="/" className="btn mr-10">
                    Get Started Now
                  </Link>
                  <Link href="/" className="btn border-btn">
                    Browse All Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="slider__shape">
            <img src="/assets/img/slider/slider_shape01.png" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
