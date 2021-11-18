import React, {useEffect, useState} from 'react';
import ImageGallery from 'react-image-gallery';
import {useTitle, useMedia} from 'react-use';

//style
import './gallery.scss';

//SVGs
import PrevArrowIcon from './prev-arrow.svg';
import NextArrowIcon from './next-arrow.svg';
import {_getGallery} from '_api/routes';

//components
import Spinner from '_components/spinner';

function Gallery() {
  //hooks
  useTitle('Галерея робіт');

  const isMobile = useMedia('(max-width: 599px)');

  const [galleryData, setGalleryData] = useState([]);
  const [loadingGallery, setLoadingGallery] = useState(true);

  useEffect(() => {
    _getGallery()
      .then(res => {
        console.log('res--- ', res.data.data);
        setGalleryData(res.data.data);
      })
      .catch(e => {
        console.log('error-- ', e);
      })
      .finally(() => {
        setLoadingGallery(false);
      });
  }, []);

  const images = galleryData.map(({source, title = ''}) => {
    return {
      original: source,
      thumbnail: source,
      description: title,
    };
  });

  const renderLeftNav = (onClick, disabled) => {
    return (
      <button
        className="image-gallery-icon image-gallery-left-nav"
        disabled={disabled}
        onClick={onClick}>
        <PrevArrowIcon className="image-gallery-svg" />
      </button>
    );
  };
  const renderRightNav = (onClick, disabled) => {
    return (
      <button
        className="image-gallery-icon image-gallery-right-nav"
        disabled={disabled}
        onClick={onClick}>
        <NextArrowIcon className="image-gallery-svg" />
      </button>
    );
  };
  const renderItem = ({original, description}) => (
    <div>
      <img
        className="image-gallery-image"
        src={original}
        alt={description}
        srcSet=""
        height
        width
        sizes
        title
      />
      <div className="image-gallery-title">
        <span>{description}</span>
      </div>
    </div>
  );

  return (
    <div>
      {loadingGallery ? (
        <Spinner />
      ) : (
        <ImageGallery
          items={images}
          showFullscreenButton={false}
          showPlayButton={false}
          renderLeftNav={renderLeftNav}
          renderRightNav={renderRightNav}
          renderItem={renderItem}
          showNav={!isMobile}
        />
      )}
    </div>
  );
}

export default Gallery;
