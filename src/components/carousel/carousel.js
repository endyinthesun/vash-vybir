import React from 'react'
import Slider from "react-slick";
import PrevArrowIcon from './prev-arrow.svg';
import NextArrowIcon from './next-arrow.svg';

function Arrow ({className, onClick, arrow}) {
    return(
        <div
            className={className}
            onClick={onClick}
        >
            {arrow}
        </div>
    );
}
function Carousel({settings, slides}) {
    let ownSettings = {
        prevArrow: <Arrow arrow={ <PrevArrowIcon/> }/>,
        nextArrow: <Arrow arrow={ <NextArrowIcon/> }/>,
        dots: true
    };
    return (
        <Slider 
            {...ownSettings}
            {...settings}
            className='slider__inner'
        >
            {slides}
        </Slider>
    );
}

export default Carousel;