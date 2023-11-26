import {useState, useEffect } from 'react'
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
    <nav className={`navbar navbar-default navbar-sticky ${isSticky ? 'stick' : ''}`}>
      
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"> </span>
          </button>
        </div>

        <div
          id="bs-example-navbar-collapse-1"
          className="navbar-collapse collapse"
        >
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="index.html">Inicio</a>
            </li>
            <li>
              <a href="about.html">Acerca de</a>
            </li>
            <li>
              <a href="single.html">Contacto</a>
            </li>
            <li>
              <a href="blog.html">Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}







import { useState, useEffect, useRef } from 'react';

export function Menu() {
  const [isSticky, setIsSticky] = useState(false);
  const myNavRef = useRef(null);
  const parallaxElementsRef = useRef([]);

  useEffect(() => {
    const myNav = myNavRef.current;
    const parallaxElements = parallaxElementsRef.current;

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
    <nav ref={myNavRef} className={`navbar navbar-default navbar-sticky${isSticky ? ' stick' : ''}`}>
      <div className="container-fluid">
        

      
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="index.html">Inicio</a>
            </li>
            <li>
              <a href="about.html">Acerca de</a>
            </li>
            <li>
              <a href="single.html">Contacto</a>
            </li>
            <li>
              <a href="blog.html">Blog</a>
            </li>
          </ul>
        </div>
      
    </nav>
  );
}
