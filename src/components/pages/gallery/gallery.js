import React from 'react';
import ImageGallery from 'react-image-gallery';
import './gallery.scss';
import PrevArrowIcon from './prev-arrow.svg';
import NextArrowIcon from './next-arrow.svg';

function Gallery () {
    const imagesArrs = [
        {
            original: '1.jpg',
            thumbnail: '1.jpg',
            description: 'вул. Винниченка, 5'
        },
        {
            original: '2.jpg',
            thumbnail: '2.jpg',
            description: 'пр. Волі, 27'
        },
        {
            original: '3.jpg',
            thumbnail: '3.jpg',
            description: 'Цукровий завод'
        },
        {
            original: '4.jpg',
            thumbnail: '4.jpg',
            description: 'вул. Василя Стуса, 666'
        },
        {
            original: '5.jpg',
            thumbnail: '5.jpg'
        },
        {
            original: '6.jpg',
            thumbnail: '6.jpg'
        },
        {
            original: '7.jpg',
            thumbnail: '7.jpg'
        },
        // {
        //     original: '7.jpg',
        //     thumbnail: '7.jpg'
        // },
        // {
        //     original: '7.jpg',
        //     thumbnail: '7.jpg'
        // },
        //  {
        //     original: '7.jpg',
        //     thumbnail: '7.jpg'
        // },
        //  {
        //     original: '7.jpg',
        //     thumbnail: '7.jpg'
        // },
        //  {
        //     original: '7.jpg',
        //     thumbnail: '7.jpg'
        // },
        //  {
        //     original: '7.jpg',
        //     thumbnail: '7.jpg'
        // },
        //  {
        //     original: '7.jpg',
        //     thumbnail: '7.jpg'
        // },
        //  {
        //     original: '7.jpg',
        //     thumbnail: '7.jpg'
        // },
        //  {
        //     original: '7.jpg',
        //     thumbnail: '7.jpg'
        // },
        //  {
        //     original: '7.jpg',
        //     thumbnail: '7.jpg'
        // },
        
    ];
    const images = imagesArrs.map(({original, thumbnail, description = ''}) => {
        return (
            {
                original: require(`./img/original/${original}`).default,
                thumbnail: require(`./img/thumbnail/${thumbnail}`).default,
                description,

            }
        )
    })

    const renderLeftNav = (onClick, disabled) => {
        return(
            <button
                className='image-gallery-icon image-gallery-left-nav'
                disabled={disabled}
                onClick={onClick}
            >
                <PrevArrowIcon 
                    className='image-gallery-svg'
                />
            </button>
        );
    }
    const renderRightNav = (onClick, disabled) => {
        return(
            <button
                className='image-gallery-icon image-gallery-right-nav'
                disabled={disabled}
                onClick={onClick}
            >
                <NextArrowIcon 
                    className='image-gallery-svg'
                />
            </button>
        );
    }
    
    return(
        <div>
            <ImageGallery 
                items={images}
                showFullscreenButton={false}
                showPlayButton={false}
                renderLeftNav={renderLeftNav}
                renderRightNav={renderRightNav}
            />
        </div>
    );
}

export default Gallery;