import React from 'react';
import Header from "../header";
import Footer from "../footer";

import "./sidebar.scss"

function Sidebar({onChangePage, page}) {
	return (
		<aside className="sidebar">
			<Header 
				onChangePage={onChangePage}
				page={page}
			/>
			<Footer/>
		</aside>
	);
}

export default Sidebar;