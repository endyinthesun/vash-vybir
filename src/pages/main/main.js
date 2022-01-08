import React, {useEffect, useState} from 'react';
import {useTitle} from 'react-use';

//components
import Carousel from '_components/carousel';
import Gmap from '_components/gmap';
import ContactForm from '_components/contact-form';
import Spinner from '_components/spinner';

//images
import Workers from './img/trust/workers.png';

//SVGs
import About from './img/about_map/about.svg';
import Pin from './img/about_map/pin.svg';
import SliderBG from './img/slider-bg.svg';
import TrustBG from './img/trust-bg.svg';

//api
import {_getAllProducts} from '_api/routes';

//styles
import './main.scss';

export default function Main() {
    useTitle('Ваш вибір');

    //states
    const [loadingSlider, setLoadingSlider] = useState(true);
    const [loadingMap, setLoadingMap] = useState(true);
    const [sliderData, setSliderData] = useState([]);

    useEffect(() => {
        _getAllProducts()
            .then(res => {
                console.log('res--- ', res.data.data);
                setSliderData(res.data.data);
            })
            .catch(e => {
                console.log('error-- ', e);
            })
            .finally(() => {
                setLoadingSlider(false);
            });
    }, []);

    const onLoadMap = () => setLoadingMap(false);

    return loadingSlider && loadingMap ? (
        <Spinner/>
    ) : (
        <>
            <Slider sliderData={sliderData}/>
            <Trust/>
            <section className="form">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-6 col-xl-6 left_side">
                            <div className="form_title">
                                заповніть форму <br/>і ми вам зателефонуємо
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 col-xl-6 right_side">
                            <div className="form_block">
                                <div className="form_block_wrapper">
                                    <ContactForm/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <AboutMap onLoadMap={onLoadMap}/>
        </>
    );
}

const Slider = ({sliderData}) => {
    let settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 5000,
        // pauseOnDotsHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    dots: true,
                },
            },
        ],
    };

    return (
        <section className="slider-wrapper">
            <div className="slider">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-xl-12">
                            <h2 className="title_text">
                                Обирай найкраще <br/>
                                для себе та своєї родини
                            </h2>
                            <Carousel settings={settings} sliderData={sliderData}/>
                        </div>
                    </div>
                </div>
            </div>
            <SliderBG/>
        </section>
    );
};

const Trust = () => {
    return (
        <section className="trust-wrapper">
            <TrustBG/>
            <div className="trust">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-6 col-xl-6">
                            <div className="workers">
                                <img src={Workers} alt="workers"/>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 col-xl-6"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const AboutMap = ({onLoadMap}) => {
    return (
        <section className="about_map-wrapper">
            <div className="about_map">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-6 col-xl-6 left_side">
                            <div className="title">
                                <div className="title_icon">
                                    <About/>
                                </div>
                                <div className="title_text">
                                    <span className="first">коротко</span>
                                    <span className="second">про нас</span>
                                </div>
                            </div>
                            <div className="descr">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                                architecto recusandae ab incidunt amet tempore. Quos voluptatem
                                excepturi, commodi dolorum, repudiandae, odit nulla dignissimos
                                eius illum sequi sed blanditiis ut. Ducimus officia natus tio
                                iste voluptates debitis, minus fugit consectetur iusto
                                praesentium eius impedit. Facere, quasi! Molestias distinctio
                                iste quod unde aliquam voluptatum cupiditate, eaque molestiae
                                aperiam iure perferendis tempora.
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 col-xl-6 right_side">
                            <div className="title">
                                <div className="title_icon">
                                    <Pin/>
                                </div>
                                <div className="title_text">
                                    <span className="first">наша</span>
                                    <span className="second">адреса</span>
                                </div>
                            </div>
                            <div className="map">
                                <Gmap/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
