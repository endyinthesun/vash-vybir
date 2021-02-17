import React from 'react';
import "./header.scss";
import {ReactComponent as Logo} from "./logo.svg"

 function Header({onChangePage, page}) {

	let btnsArr = [];
	const createBtnArr = (label, key) => {
		btnsArr.push({label, key});
	};

	createBtnArr('Головна', 'main');
	createBtnArr('Товари та послуги', 'products');
	createBtnArr('Галерея робіт', 'gallery');

	const btns = btnsArr.map(({key, label}) => {
		const Active = (page === key);
		const clazz = Active ? 'nav_link active' : 'nav_link';
		return (
			<li key={key}>
				<div className={clazz}>
					<a onClick={() => onChangePage(key)}>
						{label}
					</a>
				</div>

			</li>
		);
	})
	return(
		<header className="header">
			<a href="/" className="header_logo">
				<Logo className='header_logo_icon'/>
			</a>
			<nav className="header_nav">
				<ul>
					{btns}
				</ul>
			</nav>
		</header>
	);
}

export default Header;