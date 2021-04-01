import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ChoiceService from "../../services/choice-service";
import "./app.scss";

import Sidebar from "../sidebar";
import {Main, Gallery} from '../pages';

class App extends Component {
	choiceService = new ChoiceService();
	state = {
		page: "/",
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
						<Switch>
							<Route path='/' exact component={Main}/>
							<Route path='/gallery' component={Gallery}/>
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}
export default hot(App);