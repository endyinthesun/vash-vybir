// import {hot} from 'react-hot-loader/root';
import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './app.scss';

import Sidebar from '_components/sidebar';
import {Main, ProductsGoods, Gallery} from '_pages/index';

function App() {
  const [page, setPage] = useState('/');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const onChangePage = page => setPage(page);

  return (
    <>
      <Router>
        <Sidebar
          setSidebarOpen={setSidebarOpen}
          sidebarOpen={sidebarOpen}
          onChangePage={onChangePage}
          page={page}
        />
        <div className="content">
          <div className="wrapper">
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/products" exact component={ProductsGoods} />
              <Route path="/gallery" component={Gallery} />
            </Switch>
            {/*  <Gallery />*/}
          </div>
        </div>
      </Router>
    </>
  );
}
// export default hot(App);
export default App;
