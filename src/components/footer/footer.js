import React from 'react';

import {ReactComponent as Phone} from './img/phone.svg';
import {ReactComponent as Email} from './img/email.svg';
import {ReactComponent as Address} from './img/address.svg';
import {ReactComponent as Schedule} from './img/schedule.svg';

import {ReactComponent as Viber} from './img/viber.svg';
import {ReactComponent as Facebook} from './img/facebook.svg';
import {ReactComponent as Instagram} from './img/instagram.svg';

import './footer.scss';

function Footer() {
	return (
		<footer>
			<div className="footer-info">
				<div className="info_block">
					<div className="info_block_title">
						<Phone className="icon"/>
						<span className='title'>телефон</span>
					</div>
					<div className="info_block_descr">
						<a href="tel:+380634130701" className="phone_number">(063) 413 - 07 - 01</a>
						<a href="tel:+380634130701" className="phone_number">(063) 413 - 07 - 01</a>
						<a href="tel:+380634130701" className="phone_number">(063) 413 - 07 - 01</a>
					</div>
				</div>

				<div className="info_block">
					<div className="info_block_title">
						<Email className="icon"/>
						<span className='title'>email</span>
					</div>
					<div className="info_block_descr">
						vubirvikna@ukr.net
					</div>
				</div>

				<div className="info_block">
					<div className="info_block_title">
						<Address className="icon"/>
						<span className='title'>адреса</span>
					</div>
					<div className="info_block_descr">
						вул. Винниченка,65
						<br />
						(3-й поверх, 36 каб.)
					</div>
				</div>

				<div className="info_block">
					<div className="info_block_title">
						<Schedule className="icon"/>
						<span className='title'>графік</span>
					</div>
					<div className="info_block_descr">
						Пн-Пт: 09:00-18:00
					</div>
				</div>
			</div>

			<div className="footer-social">
				<a href="" className="social_link">
					<Viber />
				</a>
				<a href="" className="social_link">
					<Facebook />
				</a>
				<a href="" className="social_link">
					<Instagram />
				</a>
			</div>
		</footer>
	);
}

export default Footer;