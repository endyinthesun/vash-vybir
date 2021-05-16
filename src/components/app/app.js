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
		sidebarOpen: false,
	};

	onChangePage = (page) => {
		this.setState({page});
	}
		
	
	
	render() {
		const {page, sidebarOpen} = this.state;
		return (
			<>
				<Router>
					<Sidebar 
						sidebarOpen={sidebarOpen}
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
			</>
		);
	}
}
export default hot(App);