import React from 'react';

import Phone from './img/phone.svg';
import Email from './img/email.svg';
import Address from './img/address.svg';
import Schedule from './img/schedule.svg';

import Viber from './img/viber.svg';
import Facebook from './img/facebook.svg';
import Instagram from './img/instagram.svg';

import './footer.scss';

function Footer() {
	return (
		<footer>
			<div className="footer-info">
				<div className="info_block">
					<div className="info_block_title">
						<Phone className="info_block_title_icon"/>
						<span className='info_block_title_text'>телефон</span>
					</div>
					<div className="info_block_descr">
						<a href="tel:+380634130701" className="phone_number">(063) 413 - 07 - 01</a>
						<a href="tel:+380634130701" className="phone_number">(063) 413 - 07 - 01</a>
						<a href="tel:+380634130701" className="phone_number">(063) 413 - 07 - 01</a>
					</div>
				</div>

				<div className="info_block">
					<div className="info_block_title">
						<Email className="info_block_title_icon"/>
						<span className='info_block_title_text'>email</span>
					</div>
					<div className="info_block_descr">
						vubirvikna@ukr.net
					</div>
				</div>

				<div className="info_block">
					<div className="info_block_title">
						<Address className="info_block_title_icon"/>
						<span className='info_block_title_text'>адреса</span>
					</div>
					<div className="info_block_descr">
						вул. Винниченка,65
						<br />
						(3-й поверх, 36 каб.)
					</div>
				</div>

				<div className="info_block">
					<div className="info_block_title">
						<Schedule className="info_block_title_icon"/>
						<span className='info_block_title_text'>графік</span>
					</div>
					<div className="info_block_descr">
						Пн-Пт: 09:00-18:00
					</div>
				</div>
			</div>

			<div className="footer-social">
				<a href="/" className="social_link">
					<Viber id='vb' className="social_link_icon"/>
				</a>
				<a href="/" className="social_link">
					<Facebook id='fb' className="social_link_icon"/>
				</a>
				<a href="/" className="social_link">
					<Instagram id='inst' className="social_link_icon"/>
				</a>
			</div>
		</footer>
	);
}

export default Footer;