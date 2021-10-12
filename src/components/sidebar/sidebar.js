import React, {useRef, useEffect} from 'react';

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

  //Hooks and methods
  let burger = useRef(null);

  useEffect(() => {
    if (!sidebarOpen) {
      let scrollPrev = 0;
      window.addEventListener('scroll', () => {
        let scrolled = window.pageYOffset;

        if (scrolled > 250 && scrolled > scrollPrev) {
          burger.current.classList.add('hide');
        } else {
          burger.current.classList.remove('hide');
        }
        scrollPrev = scrolled;
      });
    }
  }, [sidebarOpen]);

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
      document.body.style.top = '0px';
      window.scrollTo({
        top: scrollPosition,
        left: 0,
        behavior: 'instant',
      });
      burger.current.classList.remove('hide');
      setSidebarOpen(false);
    }
  };
  if (sidebarOpen) {
    clazz += ' open';
  }
  return (
    <aside className={clazz}>
      <div onClick={toggleSidebar} className="menu-btn" ref={burger}>
        <div className="menu-btn_burger" />
      </div>
      <div className="sidebar_wrapper">
        <Header onChangePage={onChangePage} page={page} />
        <Footer />
      </div>
    </aside>
  );
}
