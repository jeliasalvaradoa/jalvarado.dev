import "../assets/css/footer.css";
export function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-xs-12 mb-4  widget">
            <h3 className="widget-title">Contacto</h3>
            <div className="widget-body mb-4 ">
              <p>
                Contáctame para iniciar tu proyecto de desarrollo web y haré que
                tu visión se vuelva realidad. <br />
                <a href="mailto:#">josealvarado30@hotmail.com</a>
                <br></br>{" "}
              </p>
              <br></br>
              <p> Aragua Venezuela</p>
            </div>
          </div>

          <div className="col-md-3 col-xs-12 widget">
            <h3 className="widget-title">Sigueme</h3>
            <div className="widget-body mb-4 ">
              <p className="follow-me-icons">
                <a href="https://github.com/jeliasalvaradoa">
                  <i className="fa fa-github fa-2"></i>
                </a>
                <a href="https://www.linkedin.com/in/jose-alvarado-6b92bb1a2/">
                  <i className="fa fa-linkedin fa-2"></i>
                </a>
                <a href="">
                  <i className="fa fa-instagram fa-2"></i>
                </a>
                <a href="">
                  <i className="fa fa-facebook fa-2"></i>
                </a>
              </p>
              <br/>
            </div>
          </div>

          <div className="col-md-3 col-xs-12 widget">
            <h3 className="widget-title">Portafolio</h3>
            <div className="widget-body">
              <p>
                {" "}
                ¡Bienvenido a mi espacio creativo! Soy un apasionado
                desarrollador web con experiencia en tecnologías como HTML, CSS,
                JavaScript, y mucho más. Mi objetivo es convertir ideas en
                experiencias digitales cautivadoras y funcionales.
              </p>
              <p>
                Explora mi portafolio para descubrir proyectos emocionantes y
                artículos informativos sobre programación. Si estás listo para
                dar vida a tu visión digital, ¡contáctame y trabajemos juntos
                para hacerlo realidad!
              </p>
            </div>
          </div>

          <div className="col-md-3 col-xs-12widget">
            <h3 className="widget-title">SkillS</h3>
            <div className="widget-body mb-4 ">
              <ul>
                <li>HTML</li>
                <li>Javascript</li>
                <li>CSS</li>
                <li>Node.js</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>WordPress</li>
                <li>PostgreSQL</li>
                <li>MySQL</li>
                <li>Git</li>
                <li>GitHub</li>
                <li>Docker</li>
                <li>Bootstrap</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
