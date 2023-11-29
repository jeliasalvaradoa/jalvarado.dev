import { useState, useEffect } from 'react';
import { Navbar, Nav, NavItem, } from 'react-bootstrap';
import '../assets/css/menu.css';

export function Menu() {
  const [isSticky, setIsSticky] = useState(false);

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
    <Navbar collapseOnSelect className={`navbar-default navbar-sticky ${isSticky ? 'stick' : ''}`} style={{ zIndex: 1000 }}>
      <Navbar.Header>
        <Navbar.Toggle />
      </Navbar.Header>

      <Navbar.Collapse style={{ flexWrap: 'nowrap' }}>
        <Nav>
          <NavItem href="#" eventKey={1}>
            Inicio
          </NavItem>
          <NavItem href="#servicios" eventKey={2}>
            Servicios
          </NavItem>
          <NavItem href="#skills" eventKey={3}>
            Skills
          </NavItem>
          <NavItem href="#proyectos" eventKey={4}>
            Proyectos
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}