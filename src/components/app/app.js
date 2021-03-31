import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ChoiceService from "../../services/choice-service";
import "./app.scss";

import Sidebar from "../sidebar";
import {Main, Gallery} from '../pages';

class App extends Component {
	choiceService = new ChoiceService();
	state = {
		page: "main"
	};

	onChangePage = (page) => {
		this.setState({page});
	}
		
	render() {
		const {page} = this.state;
		return (
			<Router>
				<Sidebar 
					onChangePage={this.onChangePage}
					page={page}
				/> 
				<div className="content">
					<div className="wrapper">
						<Route path='/main' component={Main}/>
						<Route path='/gallery' component={Gallery}/>
					</div>	
				</div>
			</Router>
		);
	}
}
export default hot(App);