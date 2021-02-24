import React, { Component } from 'react'
import Carousel from '../../carousel';
import './mainPage.scss';
import ChoiceService from '../../../services/choice-service';


export default class MainPage extends Component {
    choServ = new ChoiceService();
    state = {
        sliderData: [],
        isLoaded: false
    };
    getSlideData = () => {
        const selectSlidesId = [1, 2, 3];
        let request = selectSlidesId.map((id) => {
            return this.choServ.getProduct(id);
        });

        Promise.all(request)
        .then((data) => {
            let sliderData = data.map(({id,  alt, name, imgName, advantages}) => {
                return ({id, alt, name, imgName, advantages});
            });
            this.setState({
                sliderData
            });
        });
    }
    componentDidMount() {
        this.getSlideData();
    }
    
    render() {
        const {sliderData} = this.state;
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
                    }
                }
            ],
        };
        let slides = sliderData.map(({id, alt, imgName, name, advantages}) => {
            let advantagesList = advantages.map((adv) => {
                return(
                    <li key={adv.id}>
                       {adv.name} 
                    </li>
                );
            });
            const src = require(`./img/${imgName}`).default;
            return (
                <div className='slide-wrapper' key={id}>
                    <div className="slide">
                        <div className="left_side">
                            <div className="slide_descr">
                                <span className='slide_descr_title'>{name}</span>
                                <ul className='slide_descr_list'>
                                    {advantagesList}
                                </ul>
                            </div>
                            <button className="slide_btn">
                                дізнатися <br/> 
                                більше
                            </button>
                        </div>
                        <div className="right_side">
                            <div className="slide_img">
                                <img src={src} alt={alt}/>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
        return (
            <div className="wrapper">
                <section className="slider">
                    <h2 className='title'>
                        Обирай найкраще <br/>
                        для себе та своєї родини
                    </h2>
                    <Carousel 
                        settings={settings}
                        slides={slides}
                    />
                </section>
            </div>
        );
};
}
