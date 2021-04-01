import React, { Component } from 'react'
import ChoiceService from '../../../services/choice-service';

import Carousel from '../../carousel';
import Gmap from '../../gmap';
import Spinner from '../../spinner';
import './main.scss';

import Workers from './img/trust/workers.png'; 
import About from './img/about_map/about.svg';
import Pin from './img/about_map/pin.svg';

export default class Main extends Component {
    choServ = new ChoiceService();
    state = {
        formName: '',
        formNumber: '',
        loadingSlider: true,
        loadingMap: true,
        sliderData: []
    };
 
    handleChangeName = (e) => {
        this.setState({formName: e.target.value});
    }
    handleChangeNumber = (e) => {
        this.setState({formNumber: e.target.value});
    }
    handleSubmit = (e) => {
        e.preventDefault();
    }
    
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
                sliderData,
                loadingSlider: false
            });
        });
    }
    
    onLoadMap = () => {
        this.setState({
            loadingMap: false
        });
    }
    
    componentDidMount() {
        this.getSlideData();
    }

    render() {
        const {formName, formNumber, loadingSlider, loadingMap, sliderData} = this.state;
        console.log('loadingMap', loadingMap);
        
        //slider settings
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

        return (
            (loadingSlider && loadingMap) ? <Spinner />
            : <>
            <section className="slider">
                <h2 className='title'>
                    Обирай найкраще <br/>
                    для себе та своєї родини
                </h2>
                <Carousel 
                    settings={settings}
                    sliderData={sliderData}
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
                                <img src={Workers} alt="workers"/>
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
            
            <section className="about_map">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 left_side">
                            <div className="title">
                                <div className="title_icon">
                                    <About />
                                </div>
                                <div className="title_text">
                                    <span className="first">
                                        коротко    
                                    </span> 
                                    <span className="second">
                                        про нас
                                    </span>
                                </div>
                            </div>
                            <div className="descr">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod architecto recusandae ab incidunt amet tempore. Quos voluptatem excepturi, commodi dolorum, repudiandae, odit nulla dignissimos eius illum sequi sed blanditiis ut.
                                Ducimus officia natus tio iste voluptates debitis, minus fugit consectetur iusto praesentium eius impedit. Facere, quasi! Molestias distinctio iste quod unde aliquam voluptatum cupiditate, eaque molestiae aperiam iure perferendis tempora.
                            </div>
                        </div>
                        <div className="col-xl-6 right_side">
                            <div className="title">
                                <div className="title_icon">
                                    <Pin />
                                </div>
                                <div className="title_text">
                                    <span className="first">
                                        наша    
                                    </span> 
                                    <span className="second">
                                        адреса
                                    </span>
                                </div>
                            </div>
                            <div className="map">
                                <Gmap 
                                    onLoadMap = {this.onLoadMap}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
        );
    };
}
