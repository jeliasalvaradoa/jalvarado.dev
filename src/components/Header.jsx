import { Menu } from "./Menu";
import mi from "../assets/images/mi.jpg";
import '../assets/css/header.css'
export function Header() {
 // const parallaxSpeed = 2; // Puedes ajustar el valor según sea necesario

  return (
    <header id="header">
      <div
        id="head"
        className="parallax"
      >
        <h1 id="logo" className="text-center">
          <img className="img-circle" src={mi} alt="" />
          <span className="title">José Alvarado</span>
          <span className="tagline">
            Desarrollador FullStack <br />
            <a href="">josealvarado30@hotmail.com</a>
          </span>
        </h1>
      </div>
      <Menu />
    </header>
  );
}
