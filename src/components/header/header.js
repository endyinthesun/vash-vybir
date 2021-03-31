import React from 'react';
import "./header.scss";
import Logo from "./logo.svg"
import {Link} from 'react-router-dom';

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
					<span onClick={() => onChangePage(key)}
					>
						<Link to={`/${key}`}>
							{label}
						</Link>	
					</span>
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