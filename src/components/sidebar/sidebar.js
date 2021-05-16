import React, {useState} from 'react';
import Header from "../header";
import Footer from "../footer";
import "./sidebar.scss"

let scrollPosition = 0;
function Sidebar({onChangePage, page}) {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	let clazz = 'sidebar';
	const toggleSidebar = ({currentTarget}) => {

		if(!sidebarOpen) {
			scrollPosition = window.pageYOffset;
			currentTarget.classList.add('open');
			document.body.classList.add('sidebar-open');
			document.body.style.top = -scrollPosition + 'px';
			setSidebarOpen(true);
		} else {
			currentTarget.classList.remove('open');
			document.body.classList.remove('sidebar-open');
			document.body.style.top = 0;
			window.scrollTo({
				top: scrollPosition,
				left: 0,
				behavior: 'instant'
			});
			setSidebarOpen(false);
		}
	}
	if(sidebarOpen) {
		clazz += ' open';
	}
	return (
		<aside className={clazz}>
			<div 
				onClick={toggleSidebar}
				className='menu-btn'
			>
				<div className="menu-btn_burger"></div>
			</div>
			<div className="sidebar_wrapper">
				<Header 
					onChangePage={onChangePage}
					page={page}
				/>
				<Footer/>
			</div>
		</aside>
	);
}

export default Sidebar;