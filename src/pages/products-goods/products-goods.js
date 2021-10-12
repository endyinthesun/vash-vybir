import React, {useEffect, useState} from 'react';
import {useTitle} from 'react-use';

//styles
import './products-goods.scss';

//components
import {ProductCategory} from '_components/index';

//api
import {_getCategories} from '_api/routes';

//SVGs
import DoorIcon from './icons/door.svg';
import WindowIcon from './icons/window.svg';
import JalousieIcon from './icons/blinds.svg';

import DrillIcon from './icons/drill.svg';
import TruckIcon from './icons/truck.svg';
import AdviceIcon from './icons/advice.svg';

const productRateData = [
  {name: 'sdfdffd', rate: 3.5},
  {name: 'sdfdffd', rate: 3.5},
  {name: 'sdfdffd', rate: 3.5},
];
export default function ProductsGoods() {
  useTitle('Товари та послуги');
  const [categoriesData, setCategoriesData] = useState([]);
  useEffect(() => {
    _getCategories().then(res => {
      setCategoriesData(res.data.data);
    });
  }, []);

  return (
    <section className="products_goods-wrapper">
      <div className="products_goods">
        <div className="title">
          <span>товари та послуги</span>
        </div>
        <div className="container">
          <div className="main">
            {categoriesData.length
              ? categoriesData.map(({id, name}) => (
                  <ProductCategory
                    key={id}
                    icon={<WindowIcon />}
                    title={name}
                    subtitle={'Найбільший асортимент різного профілю'}
                    priceFrom={1233}
                    productRateData={productRateData}
                    className={'products_category_container'}
                  />
                ))
              : null}
            <div className="goods">
              <div className="good_items">
                <div className="good_item">
                  <div className="icon" id="drill">
                    <DrillIcon />
                  </div>
                  <div className="descr">
                    <div className="title">Монтажні роботи</div>
                    <div className="subtitle">
                      проведення монтажних робіт на найвищому рівні
                    </div>
                  </div>
                </div>
                <div className="good_item">
                  <div className="icon" id="truck">
                    <TruckIcon />
                  </div>
                  <div className="descr">
                    <div className="title">Доставка</div>
                    <div className="subtitle">
                      доставимо продукт в будь-який населений пункт Волинської
                      області
                    </div>
                  </div>
                </div>
                <div className="good_item">
                  <div className="icon" id="advice">
                    <AdviceIcon />
                  </div>
                  <div className="descr">
                    <div className="title">Консультація</div>
                    <div className="subtitle">
                      допоможемо вам підібрати те, що найкраще підходить саме
                      вам
                    </div>
                  </div>
                </div>
              </div>
              <div className="details">
                <div className="details_title">
                  Широкі архітектурні можливості
                </div>
                <div className="details_descr">
                  <p>
                    Завдяки широкому вибору додаткових профілів система REHAU
                    Euro-Design 70 дозволяє реалізувати різноманітні
                    архітектурні рішення, головними характеристиками яких
                    залишаються якість та економічність.
                  </p>
                  <p>
                    З інтеграцією системи Ecosol-Design 70 в систему Euro-Design
                    тепер Ви можете обрати стулку стандартної висоти (60 мм) чи
                    зменшеної (54 мм), яка забезпечить кращу інсоляцію
                    приміщення.
                  </p>
                  <p>
                    Система кольорових рішень REHAU відкриває додаткові
                    можливості: з поміж понад 40 варіантів декорів та 220
                    кольорів Ви можете обрати свій улюблений або ж оздобити
                    вікна за допомогою алюмінієвих накладок.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*<div className=" most_popular"></div>*/}
        </div>
      </div>
    </section>
  );
}
