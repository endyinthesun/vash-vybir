import React, {Component} from 'react'
import Slider from "react-slick";
import PrevArrowIcon from './prev-arrow.svg';
import NextArrowIcon from './next-arrow.svg';

export default class Carousel extends Component {
    render() {
        const {settings, sliderData} = this.props;
        
        const Arrow = ({className, onClick, arrow}) => {
            return(
                <div
                    className={className}
                    onClick={onClick}
                >
                    {arrow}
                </div>
            );
        }
        
        let ownSettings = {
            prevArrow: <Arrow arrow={ <PrevArrowIcon/> }/>,
            nextArrow: <Arrow arrow={ <NextArrowIcon/> }/>,
            dots: true
        };

        let slides = sliderData.map(({id, alt, imgName, name, advantages}) => {
            let advantagesList = advantages.map((adv) => {
                return(
                    <li key={adv.id}>
                       {adv.name} 
                    </li>
                );
            });
            const src = require(`./img/${imgName}`).default;
            return (
                <div className='slide-wrapper' key={id}>
                    <div className="slide">
                        <div className="left_side">
                            <div className="slide_descr">
                                <span className='slide_descr_title'>{name}</span>
                                <ul className='slide_descr_list'>
                                    {advantagesList}
                                </ul>
                            </div>
                            <button className="slide_btn">
                                    дізнатися <br/> 
                                    більше
                            </button>
                        </div>
                        <div className="right_side">
                            <div className="slide_img">
                                <img src={src} alt={alt}/>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
        
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
}