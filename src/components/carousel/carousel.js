import React from 'react';
import {useMedia} from 'react-use';

//components
import Slider from 'react-slick';

//SVGs
import PrevArrowIcon from './prev-arrow.svg';
import NextArrowIcon from './next-arrow.svg';

export default function Carousel({settings, sliderData}) {
  const isMobile = useMedia('(max-width: 599px)');
  const Arrow = ({className, onClick, arrow}) => {
    return (
      <div className={className} onClick={onClick}>
        {arrow}
      </div>
    );
  };
  let ownSettings = {
    prevArrow: <Arrow arrow={<PrevArrowIcon />} />,
    nextArrow: <Arrow arrow={<NextArrowIcon />} />,
    dots: true,
  };

  let slides = sliderData.map(({id, product_name, img, features}) => {
    // let advantagesList = advantages.map(adv => {
    //   return <li key={adv.id}>{adv.name}</li>;
    // });
    let featuresList = [];
    for (let key in features) {
      featuresList.push(<li key={key}>{features[key]}</li>);
    }
    console.log('img-- ', img);
    return (
      <div className="slide-wrapper" key={id}>
        <div className="slide">
          {isMobile ? (
            <>
              <span className="slide_descr_title">{product_name}</span>
              <div className="slide_img">
                <img src={img} alt={product_name} />
              </div>
              <ul className="slide_descr_list">{featuresList}</ul>
              <button className="slide_btn">
                дізнатися <br />
                більше
              </button>
            </>
          ) : (
            <>
              <div className="left_side">
                <div className="slide_descr">
                  <span className="slide_descr_title">{product_name}</span>
                  <ul className="slide_descr_list">{featuresList}</ul>
                </div>
                <button className="slide_btn">
                  дізнатися <br />
                  більше
                </button>
              </div>
              <div className="right_side">
                <div className="slide_img">
                  <img src={img} alt={product_name} />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  });

  return (
    <Slider {...ownSettings} {...settings} className="slider__inner">
      {slides}
    </Slider>
    // <div></div>
  );
}
