import React from 'react';

//components
import Header from '_components/header';
import Footer from '_components/footer';

//styles
import './sidebar.scss';
let scrollPosition = 0;

export default function Sidebar({
  onChangePage,
  page,
  sidebarOpen,
  setSidebarOpen,
}) {
  let clazz = 'sidebar';
  const toggleSidebar = ({currentTarget}) => {
    if (!sidebarOpen) {
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
        behavior: 'instant',
      });
      setSidebarOpen(false);
    }
  };
  if (sidebarOpen) {
    clazz += ' open';
  }
  return (
    <aside className={clazz}>
      <div onClick={toggleSidebar} className="menu-btn">
        <div className="menu-btn_burger"></div>
      </div>
      <div className="sidebar_wrapper">
        <Header onChangePage={onChangePage} page={page} />
        <Footer />
      </div>
    </aside>
  );
}
