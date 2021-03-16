import React, { Component } from 'react'
import Carousel from '../../carousel';
import './mainPage.scss';
import ChoiceService from '../../../services/choice-service';

import Workers from './img/trust/workers.svg'; 

export default class MainPage extends Component {
    choServ = new ChoiceService();
    state = {
        sliderData: [],
        isLoaded: false,
        formName: '',
        formNumber: '',
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

    handleChangeName = (e) => {
        this.setState({formName: e.target.value});
    }
    handleChangeNumber = (e) => {
        this.setState({formNumber: e.target.value});
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
    }
    
    componentDidMount() {
        this.getSlideData();
    }
    
    render() {
        const {sliderData, formName, formNumber} = this.state;
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
            const src = require(`./img/slider/${imgName}`).default;
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
                <section className="trust">
                    <h2 className='title'>
                        довірте це <br/> 
                        професіоналам
                    </h2>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="workers">
                                    <Workers />
                                </div>
                            </div>
                            <div className="col-md-6">

                            </div>
                        </div>
                    </div>
                </section>
                <section className="form">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 left_side">
                                <div className="form_title">
                                    заповніть форму <br/>
                                    і ми вам зателефонуємо
                                </div>
                            </div>
                            <div className="col-xl-6 right_side">
                                <div className="form_block">
                                    <div className="form_block_wrapper">
                                        <form autocomplete="on" onSubmit={this.handleSubmit}>
                                            <label htmlFor="name" className="form_label">
                                                Як до вас звертатися?
                                            </label>
                                            <input 
                                                className="form_field"
                                                type="text" 
                                                id="name" 
                                                value={formName}
                                                onChange={this.handleChangeName}
                                            />
                                            <label htmlFor="number" className="form_label">
                                                Введіть номер телефону
                                            </label>
                                            <input 
                                                className="form_field"
                                                type="text" 
                                                id="number" 
                                                value={formNumber}
                                                onChange={this.handleChangeNumber}
                                            />
                                            {/* <input 
                                                type="submit" 
                                                value="отримати консультацію"
                                                className="form_btn" 
                                            /> */}
                                            <button
                                                type="submit" 
                                                className="form_btn"
                                            >
                                                отримати <br/>
                                                консультацію
                                            </button>
                                        </form>
                                    </div>
                                </div>    
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
};
}
