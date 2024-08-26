import HeroSlider from '../slider/HeroSlider'

export default function Slider1() {
    return (
        <>
            <section className="slider__area">
                <div className="swiper-container slider__active">
                    <HeroSlider/>
                </div>
            </section>
        </>
    )
}
