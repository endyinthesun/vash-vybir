import React, {useEffect, useState} from 'react';
import {useRouteMatch} from 'react-router-dom';

export default function Products({title}) {
  // useTitle('Товари та послуги');
  // const [loadingCategories, setLoadingCategories] = useState(true);
  // let match = useRouteMatch();
  // const [categoriesData, setCategoriesData] = useState([]);
  // useEffect(() => {
  //     _getCategories().then(res => {
  //         console.log('res.data.data--- ', res.data.data);
  //         setCategoriesData(res.data.data);
  //     });
  // }, []);
  let match = useRouteMatch();
  console.log('match--- ', match);

  return (
    <section className="products_goods-wrapper">
      <div>{title}</div>
      <div>sdfsdfsdfsdf</div>
      <div>sdfsdfsdfsdf</div>
    </section>
  );
}
