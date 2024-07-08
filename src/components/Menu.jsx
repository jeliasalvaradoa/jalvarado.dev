import { useState, useEffect } from 'react';
import { Navbar, Nav, NavItem, } from 'react-bootstrap';
import { IconX } from './IconX';
import '../assets/css/menu.css';

export function Menu() {
  const [isSticky, setIsSticky] = useState(false)
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
<<<<<<< HEAD
    <Navbar collapseOnSelect className={`navbar-collapse nabvar-nav navbar-default navbar-sticky ${isSticky ? 'stick' : ''}`} style={{ zIndex: 1000 }}>
      <Navbar.Header >
      { collapsed ? <Navbar.Toggle onClick={() => setCollapsed(!collapsed)} /> : <IconX className="navbar-toggle" onClick={() => setCollapsed(!collapsed)}/>
          }
=======
    <Navbar collapseOnSelect className={`navbar-collapse nabvar-nav navbar-default navbar-sticky ${isSticky ? 'stick' : ''}`} style={{ zIndex: 1000; }}>
      <Navbar.Header>
        <Navbar.Toggle />
>>>>>>> 7bce972440fdba81a38d55330cea78ad1a6b694d
      </Navbar.Header>

      <Navbar.Collapse className='navbar-collapse nabvar-nav'>
        <Nav className='navbar-collapse nabvar-nav'>
          <NavItem className='navbar-collapse nabvar-nav' href="#" eventKey={1}>
            Inicio
          </NavItem>
          <NavItem className='navbar-collapse nabvar-nav' href="#servicios" eventKey={2}>
            Servicios
          </NavItem>
          <NavItem className='navbar-collapse nabvar-nav' href="#skills" eventKey={3}>
            Skills
          </NavItem>
          <NavItem className='navbar-collapse nabvar-nav' href="#proyectos" eventKey={4}>
            Proyectos
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
