import React, { useMemo, useState } from 'react';
import Slider from "react-slick";

interface CarouselProps {
    design?: 'SingleSlide' | 'DoubleSlide' | 'TripalSlide',
}
const SliderImg = [
    "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
    "https://monlyceenumerique.fr/snt_seconde/photographie_numerique/Cours/img/profondeur_3.bmp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStmksSzcBST7aBgdD6Ob11fYmyL-mowX3D8_lDf1pHKPNySpzgzh0PpPl4l8Hd49ZoL1c&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPdg0sb4x3bYVrS-BdP7KfOoz0w1NXO2vCHn5snC0n7BQmNi1qZ-lmYK_tGgIbjgbWOSQ&usqp=CAU"
]
let slides = 4;
export const Carousel = ({ design = 'SingleSlide', ...props }: CarouselProps) => {
    if (design == 'SingleSlide') {
        slides = 1;
    }
    else if (design == 'DoubleSlide') {
        slides = 2;
    }
    else if (design == 'TripalSlide') {
        slides = 3;
    }
    else {
        slides = 1;
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slides,
        slidesToScroll: 1
    };
    return (
        <>
            <div className="carouselSlider">
                <Slider {...settings}>
                    {
                        SliderImg.map((value) => {
                            return (
                                <>
                                    <div>
                                        <div className="imgSize">
                                            <img src={value} className="w-full h-full" />
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </Slider>
            </div>
        </>
    );
};