import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faTelegramPlane,
  faInstagram,
  faFacebookF,
} from '@fortawesome/free-brands-svg-icons';
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkedAlt,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
import './footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-info">
        <div className="info_block">
          <div className="info_block_title">
            <FontAwesomeIcon
              className="info_block_title_icon"
              icon={faPhoneAlt}
            />
            <span className="info_block_title_text">телефон</span>
          </div>
          <div className="info_block_descr">
            <a href="tel:+380634130701" className="phone_number">
              (063) 413 - 07 - 01
            </a>
            <a href="tel:+380634130701" className="phone_number">
              (063) 413 - 07 - 01
            </a>
          </div>
        </div>

        <div className="info_block">
          <div className="info_block_title">
            <FontAwesomeIcon
              className="info_block_title_icon"
              icon={faEnvelope}
            />
            <span className="info_block_title_text">email</span>
          </div>
          <div className="info_block_descr">vubirvikna@ukr.net</div>
        </div>

        <div className="info_block">
          <div className="info_block_title">
            <FontAwesomeIcon
              className="info_block_title_icon"
              icon={faMapMarkedAlt}
            />
            <span className="info_block_title_text">адреса</span>
          </div>
          <div className="info_block_descr">
            вул. Винниченка,65
            <br />
            (3-й поверх, 36 каб.)
          </div>
        </div>

        <div className="info_block">
          <div className="info_block_title">
            <FontAwesomeIcon className="info_block_title_icon" icon={faClock} />
            <span className="info_block_title_text">графік</span>
          </div>
          <div className="info_block_descr">Пн-Пт: 09:00-18:00</div>
        </div>
      </div>

      <div className="footer-social">
        <a href="/" className="social_link">
          <FontAwesomeIcon
            icon={faTelegramPlane}
            id="tg"
            className="social_link_icon"
          />
        </a>
        <a href="/" className="social_link">
          <FontAwesomeIcon
            icon={faInstagram}
            id="inst"
            className="social_link_icon"
          />
        </a>
        <a href="/" className="social_link">
          <FontAwesomeIcon
            icon={faFacebookF}
            id="fb"
            className="social_link_icon"
          />
        </a>
      </div>
    </footer>
  );
}
