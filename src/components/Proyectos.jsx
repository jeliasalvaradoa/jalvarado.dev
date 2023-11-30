import Tienda from '../assets/images/API-Tienda.png'
import Parallax from '../assets/images/parallax.png'
import PlatziFood from '../assets/images/Platzi-Food.png'
import Clonf from '../assets/images/clonf.png'
import Portafolio from '../assets/images/portafolio.png'
import Tictactoe from '../assets/images/Tic-tac-toe.png'

//import S1 from '../assets/images/s1.jpg'

export function Proyectos() {
    
    return (
        <>
        <div id='proyectos' className="row section recentworks topspace">
			
        <h2 className="section-title"><span>Proyectos</span></h2>
        
        <div className="thumbnails recentworks row">
            
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <a className="thumbnail" href="https://api-tienda.onrender.com/">
                    <span className="img">
                        <img src={Tienda} alt="Api Tienda"/>
                        <span className="cover"><span className="more">Ver &rarr;</span></span>
                    </span>
                    <span className="title">Api Rest - Tienda Online</span>
                </a>
                <span className="details"><a href="https://api-tienda.onrender.com/">Postgres</a> | <a href="https://api-tienda.onrender.com/">Node.js</a> | <a href="https://api-tienda.onrender.com/">JavaScript</a> | <a href="https://api-tienda.onrender.com/">Docker</a></span>
                <h4></h4>
                <p></p>
            </div>
            
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <a className="thumbnail" href="">
                    <span className="img">
                        <img src={Parallax} alt="Parallax"/>
                        <span className="cover"><span className="more">Ver &rarr;</span></span>
                    </span>
                    <span className="title">Diseño - Estilo parallax</span>
                </a>
                <span className="details"><a href="https://jeliasalvaradoa.github.io/parallax/">Html</a> | <a href="https://jeliasalvaradoa.github.io/parallax/">Css</a></span>
                <h4></h4>
                <p></p>
            </div>
            
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <a className="thumbnail" href="https://jeliasalvaradoa.github.io/app_tailwindcss/">
                    <span className="img">
                        <img src={PlatziFood} alt="Plazi-Food"/>
                        <span className="cover"><span className="more">Ver &rarr;</span></span>
                    </span>
                    <span className="title">Restaurant - Diseño con Tailwindcss</span>
                </a>
                <span className="details"><a href="https://jeliasalvaradoa.github.io/app_tailwindcss/">Html</a> | <a href="https://jeliasalvaradoa.github.io/app_tailwindcss/">Tailwindcss</a></span>
                <h4></h4>
                <p></p>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <a className="thumbnail" href="https://jeliasalvaradoa.github.io/free-code-camp-clon-testimonio/">
                    <span className="img">
                        <img src={Clonf} alt="Clon Freecodecamp"/>
                        <span className="cover"><span className="more">Ver &rarr;</span></span>
                    </span>
                    <span className="title">Testimonios - Clon Freecodecamp</span>
                </a>
                <span className="details"><a href="https://jeliasalvaradoa.github.io/free-code-camp-clon-testimonio/">Html</a> | <a href="https://jeliasalvaradoa.github.io/free-code-camp-clon-testimonio/">React</a></span>
                
            </div>
            
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <a className="thumbnail" href="https://portafolio-ten-indol.vercel.app/">
                    <span className="img">
                        <img src={Portafolio} alt="portafolio"/>
                        <span className="cover"><span className="more">Ver &rarr;</span></span>
                    </span>
                    <span className="title">Portafolio - Servicios</span>
                </a>
                <span className="details"><a href="">React</a> | <a href="">Bootstrap</a></span>
                <h4></h4>
                <p></p>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <a className="thumbnail" href="https://tic-tac-toe-eta-dusky.vercel.app/">
                    <span className="img">
                        <img src={Tictactoe} alt="S2"/>
                        <span className="cover"><span className="more">Ver &rarr;</span></span>
                    </span>
                    <span className="title">Tic-tac-toe - Juego</span>
                </a>
                <span className="details"><a href="">Vite + React</a> | <a href="">Node.js</a></span>
                <h4></h4>
                <p></p>
            </div>
        </div>

    </div>

    </>          
              )  
    
}