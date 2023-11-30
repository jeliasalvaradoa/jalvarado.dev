import "../assets/css/footer.css";
export function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 widget">
            <h3 className="widget-title">Contacto</h3>
            <div className="widget-body">
              <p>
                Contáctame para iniciar tu proyecto de desarrollo web y haré que
                tu visión se vuelva realidad. <br/>
                <a href="mailto:#">josealvarado30@hotmail.com</a>
                <br></br>{" "}
              </p>
              <br></br>
              <p> Aragua Venezuela</p>
            </div>
          </div>

          <div className="col-md-3 widget">
            <h3 className="widget-title">Sigueme</h3>
            <div className="widget-body">
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
            </div>
          </div>

          <div className="col-md-3 widget">
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

          <div className="col-md-3 widget">
            <h3 className="widget-title">SkillS</h3>
            <div className="widget-body">
              <p>
              HTML-JAVASCRIPT-CSS-NODEJS REACTJS-NEXTJS-WORDPRESS POSTGRES-MYSQL-
              GIT-GITHUB-DOCKER-BOOTSTRAP-TAILWINDCSS.
                
                <br/>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
