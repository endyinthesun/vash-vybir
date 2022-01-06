import React, {useEffect, useState} from 'react';
import {useTitle} from 'react-use';
import {Link, Route, Switch, useRouteMatch} from 'react-router-dom';

//styles
import './products-goods.scss';

//components
import {ProductCategory} from '_components/index';

//pages
import Products from '_pages/products/products';

//api
import {_getCategories, _getGallery} from '_api/routes';

//SVGs
import DoorIcon from './icons/door.svg';
import WindowIcon from './icons/window.svg';
import JalousieIcon from './icons/blinds.svg';

import DrillIcon from './icons/drill.svg';
import TruckIcon from './icons/truck.svg';
import AdviceIcon from './icons/advice.svg';
import Spinner from '_components/spinner';
import {JS} from 'json-server/lib/cli/utils/is';

const productRateData = [
  {name: 'sdfdffd', rate: 3.5},
  {name: 'sdfdffd', rate: 3.5},
  {name: 'sdfdffd', rate: 3.5},
];
export default function ProductsGoods() {
  useTitle('Товари та послуги');
  const [loadingCategories, setLoadingCategories] = useState(true);
  let match = useRouteMatch();
  const [categoriesData, setCategoriesData] = useState([]);
  useEffect(() => {
    _getCategories().then(res => {
      // console.log('res.data.data--- ', res.data.data[0].brand_list);
      setCategoriesData(res.data.data);
    });
  }, []);
  useEffect(() => {
    _getCategories()
      .then(res => {
        setCategoriesData(res.data.data);
      })
      .catch(e => {
        console.log('error-- ', e);
      })
      .finally(() => {
        setLoadingCategories(false);
      });
  }, []);
  if (categoriesData.length) {
    // for (let key of categoriesData[0].brand_list.keys()) {
    //   console.log('key--- ', key);
    // }
    console.log(categoriesData);
  }
  const categoriesContent =
    categoriesData.length &&
    categoriesData.map(({id, title, sub_tittle, brand_list, route}) => {
      let icon;
      switch (route) {
        case 'window':
          icon = <WindowIcon />;
          break;
        case 'door':
          icon = <DoorIcon />;
          break;
        case 'jalousie':
          icon = <JalousieIcon />;
          break;
        default:
          console.log('icon does not exist');
          icon = <div />;
      }
      return (
        <Link to={`${match.url}/${route}`} key={id.toString()}>
          <ProductCategory
            icon={icon}
            title={title}
            subtitle={sub_tittle}
            priceFrom={1233}
            productRateData={brand_list}
            className={'products_category_container'}
          />
        </Link>
      );
    });
  const routes = categoriesData.map(
    ({id, title, sub_tittle, brand_list, route}) => (
      <Route path={`${match.path}/${route}`} key={id.toString()}>
        <Products title={title} />
      </Route>
    ),
  );
  return (
    <section className="products_goods-wrapper">
      <div className="products_goods">
        <div className="title">
          <span>товари та послуги</span>
        </div>
        <div className="container">
          <div className="main">
            {loadingCategories ? <Spinner /> : categoriesContent}
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
      <Switch>{routes}</Switch>
    </section>
  );
}
