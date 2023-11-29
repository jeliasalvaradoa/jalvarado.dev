
import {useState, useEffect } from 'react'
import '../assets/css/menu.css'
export function Menu() {

  const [isSticky, setIsSticky] = useState(false);
  const [collapsed, setCollapsed] = useState(true)
  useEffect(() => {
    const myNav = document.querySelector('.navbar-sticky');
    const parallaxElements = document.querySelectorAll('.parallax');

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const stickyNavigationOffsetTop = myNav.offsetTop;

      if (scrollY > stickyNavigationOffsetTop) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

         parallaxElements.forEach((element) => {
        const speed = element.getAttribute('parallax-speed');
        if (speed) {
          const backgroundPos = `center -${scrollY / speed}px`;
          element.style.backgroundPosition = backgroundPos;
        }
      });
    };
     

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-default navbar-sticky ${isSticky ? 'stick' : ''}`} style={{ zIndex: 1000 }}>
      
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-label="Toggle navigation" onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? (<div>
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"> </span></div>) : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" height="2rem" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          )}

          </button>
        </div>

        <div
          id="bs-example-navbar-collapse-1"
          className="navbar-collapse collapse"
        >
          <ul className="nav navbar-nav">
            <li  >
              <a  href="#" >Inicio</a>
            </li>
            <li >
              <a  href="#servicios" >Servicios</a>
            </li>
            <li >
              <a  href="#skills" >Skills</a>
            </li>
            <li >
              <a href="#proyectos" >Proyectos</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}