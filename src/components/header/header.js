import React from 'react';

//SVGs
import Logo from './logo.svg';
import {Link} from 'react-router-dom';

//styles
import './header.scss';

export default function Header({onChangePage, page}) {
  let btnsArr = [];
  const createBtnArr = (label, key) => {
    btnsArr.push({label, key});
  };

  createBtnArr('Головна', '/');
  createBtnArr('Товари та послуги', '/products');
  createBtnArr('Галерея робіт', '/gallery');

  const btns = btnsArr.map(({key, label}) => {
    const Active = page === key;
    const clazz = Active ? 'nav_link active' : 'nav_link';
    console.log('key--- ', key);
    return (
      <li key={key}>
        <div className={clazz}>
          <span onClick={() => onChangePage(key)}>
            <Link to={key}>{label}</Link>
          </span>
        </div>
      </li>
    );
  });
  return (
    <header className="header">
      <a href="/" className="header_logo">
        <Logo className="header_logo_icon" />
      </a>
      <nav className="header_nav">
        <ul>{btns}</ul>
      </nav>
    </header>
  );
}
