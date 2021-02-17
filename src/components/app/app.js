import React, { Component } from 'react';
import ChoiceService from "../../services/choice-service";
import "./app.scss";


import Sidebar from "../sidebar";

export default class App extends Component {
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
			<div className="wrapper">
				<Sidebar 
					onChangePage={this.onChangePage}
					page={page}
				/>
			</div>
		);
	}
}