import React from 'react';

//SVGs
import RightArrowIcon from './right-arrow.svg';

//styles
import './product-category.scss';
export default function ProductCategory({
  icon,
  title,
  subtitle,
  productRateData,
  priceFrom,
  onClick,
}) {
  const rateContents = productRateData.map(({name, rate}) => (
    <div className="info_item">
      <div className="info_item_name">● {name}</div>
      <div className="info_item_rate">
        <div className="indicator"></div>
        <div className="number">{rate}/5</div>
      </div>
    </div>
  ));
  return (
    <div className="products_category">
      <div className="head">
        <div className="head_icon">{icon}</div>
        <div className="head_text">
          <h3 className="head_text_title">{title}</h3>
          <div className="head_text_subtitle">{subtitle}</div>
        </div>
      </div>
      <div className="info">{rateContents}</div>
      <div className="bottom">
        <div className="price">
          <span className={'price_from'}>від {priceFrom}₴</span>
          <span className={'price_best'}>найкраща ціна</span>
        </div>
        <div className="arrow_box">
          <RightArrowIcon />
        </div>
      </div>
    </div>
  );
}
