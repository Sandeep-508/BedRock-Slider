// import React, { useState, useEffect, useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Mousewheel, Keyboard, Virtual } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/mousewheel';
// import 'swiper/css/keyboard';

// const originalSlides = [
//     'INFINI', 'TourGame', 'Aperture', 'Aperture',
//     'SocialTensor', 'NicheTensor', 'THELASTONE', 'INFINI'
// ];

// const VerticalSlider = () => {
//     const [slides, setSlides] = useState([]);
//     const swiperRef = useRef(null);

//     useEffect(() => {
//         setSlides([...originalSlides, ...originalSlides, ...originalSlides]);
//     }, []);

//     useEffect(() => {
//         if (!swiperRef.current?.swiper) return;

//         const swiperInstance = swiperRef.current.swiper;

//         const updateSlideStyles = () => {
//             const slides = swiperInstance.slides;
//             const activeIndex = swiperInstance.activeIndex;
//             const totalSlides = slides.length;
//             const slidesPerView = swiperInstance.params.slidesPerView;

//             slides.forEach((slide, index) => {
//                 const slideElement = slide.querySelector('.slide-content');
//                 if (!slideElement) return;

//                 const distance = Math.min(Math.abs(index - activeIndex), totalSlides - Math.abs(index - activeIndex));
//                 const maxDistance = Math.floor(slidesPerView / 2);
//                 const normalizedDistance = distance / maxDistance;

//                 const rotateX = normalizedDistance * 30;
//                 const scale = 1 - (normalizedDistance * 0.2);
//                 const opacity = Math.max(0, 1 - normalizedDistance * 0.5);

//                 slideElement.style.transform = `rotateX(${rotateX}deg) scale(${scale})`;
//                 slideElement.style.opacity = opacity.toFixed(2);
//             });
//         };

//         swiperInstance.on('slideChange', updateSlideStyles);
//         swiperInstance.on('resize', updateSlideStyles);

//         updateSlideStyles();

//         return () => {
//             swiperInstance.off('slideChange', updateSlideStyles);
//             swiperInstance.off('resize', updateSlideStyles);
//         };
//     }, [slides]);

//     const getSlidesPerView = () => {
//         if (typeof window !== 'undefined') {
//             if (window.innerWidth >= 1920) return 13;
//             if (window.innerWidth >= 1280) return 9;
//             return 9;
//         }
//         return 9;
//     };

//     return (
//         <div className="h-screen w-full bg-black flex items-center justify-center overflow-hidden">
//             <div className="flex items-center justify-center h-full w-full max-w-full mx-auto px-4" style={{ perspective: '1000px' }}>
//                 <Swiper
//                     ref={swiperRef}
//                     direction="vertical"
//                     slidesPerView={getSlidesPerView()}
//                     centeredSlides={true}
//                     spaceBetween={24}
//                     mousewheel={true}
//                     keyboard={{ enabled: true }}
//                     modules={[Mousewheel, Keyboard, Virtual]}
//                     loop={true}
//                     loopAdditionalSlides={originalSlides.length}
//                     speed={800}
//                     className="h-full w-full"
//                 >
//                     {slides.map((slide, index) => (
//                         <SwiperSlide key={index} className="flex items-center justify-center">
//                             {({ isActive }) => (
//                                 <div
//                                     className={`
//                                         transition-transform duration-300
//                                         slide-content
//                                         text-white
//                                         flex items-center justify-center
//                                         h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16
//                                     `}
//                                 >
//                                     <span
//                                         className={`
//                                             ${isActive ? 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl hover:underline cursor-pointer' : 'text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl cursor-default'}
//                                         `}
//                                     >
//                                         {slide}
//                                     </span>
//                                 </div>
//                             )}
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//             </div>
//         </div>
//     );
// };

// export default VerticalSlider;


import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Keyboard, Virtual } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/keyboard';

const originalSlides = [
    'INFINI', 'TourGame', 'Aperture', 'Aperture',
    'Social Tensor', 'Niche Tensor', 'THELASTONE', 'INFINI'
];

const VerticalSlider = () => {
    const [slides, setSlides] = useState([]);
    const swiperRef = useRef(null);

    useEffect(() => {
        setSlides([...originalSlides, ...originalSlides, ...originalSlides]);
    }, []);

    useEffect(() => {
        if (!swiperRef.current?.swiper) return;

        const swiperInstance = swiperRef.current.swiper;

        const updateSlideStyles = () => {
            const slides = swiperInstance.slides;
            const activeIndex = swiperInstance.activeIndex;
            const totalSlides = slides.length;
            const slidesPerView = swiperInstance.params.slidesPerView;

            slides.forEach((slide, index) => {
                const slideElement = slide.querySelector('.slide-content');
                if (!slideElement) return;

                const distance = Math.min(Math.abs(index - activeIndex), totalSlides - Math.abs(index - activeIndex));
                const maxDistance = Math.floor(slidesPerView / 2);
                const normalizedDistance = distance / maxDistance;

                const rotateX = normalizedDistance * 50;
                const scale = 1 - (normalizedDistance * 0.2);
                const opacity = Math.max(0, 1 - normalizedDistance * 0.5);

                slideElement.style.transform = `rotateX(${rotateX}deg) scale(${scale})`;
                slideElement.style.opacity = opacity.toFixed(2);
            });
        };

        swiperInstance.on('slideChange', updateSlideStyles);
        swiperInstance.on('resize', updateSlideStyles);

        updateSlideStyles();

        return () => {
            swiperInstance.off('slideChange', updateSlideStyles);
            swiperInstance.off('resize', updateSlideStyles);
        };
    }, [slides]);

    const getSlidesPerView = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth >= 1920) return 13;
            if (window.innerWidth >= 1280) return 9;
            return 9;
        }
        return 9;
    };

    return (
        <div className="h-screen w-full bg-black flex items-center justify-center overflow-hidden">
            <div className="flex items-center justify-center h-full w-full max-w-full mx-auto px-4" style={{ perspective: '1000px' }}>
                <Swiper
                    ref={swiperRef}
                    direction="vertical"
                    slidesPerView={getSlidesPerView()}
                    centeredSlides={true}
                    spaceBetween={24}
                    mousewheel={true}
                    keyboard={{ enabled: true }}
                    modules={[Mousewheel, Keyboard, Virtual]}
                    loop={true}
                    loopAdditionalSlides={originalSlides.length}
                    speed={800}
                    className="h-full w-full"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index} className="flex items-center justify-center h-8 sm:h-10 md:h-12 lg:h-14">
                            {({ isActive }) => (
                                <div
                                    className={`transition-transform duration-300 slide-content text-white flex items-center justify-center h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16`}
                                >
                                    <span
                                        className={`
                                            ${isActive ? 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[80px] hover:underline cursor-pointer' : 'text-base sm:text-lg md:text-xl lg:text-3xl xl:text-4xl cursor-default'}
                                        `}
                                    >
                                        {slide}
                                    </span>
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default VerticalSlider;