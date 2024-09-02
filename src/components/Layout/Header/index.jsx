import { FaFacebook, FaInstagram } from "react-icons/fa";
import "./Header.scss";
const Header = () => {
  return (
    <header>
      <div className="logo-header">
        <img
          src="https://www.percimon.com/wp-content/themes/percimon/images/logo-percimon.svg"
          alt="LOGO"
        />
      </div>
      <div className="menu-header">
        <ul>
          <li>CULTURA</li>
          <li>PRODUCTOS</li>
          <li>HAZ TU PEDIDO</li>
          <li>TRABAJA AQUI</li>
          <li>ORIGEN</li>
          <li>ENCUENTRANOS</li>
          <li>CONTACTO</li>
          <li>CAMPUS</li>
        </ul>
      </div>
      <div className="social-header">
        <ul>
          <li>
            <a href="">
              <FaFacebook size={30} color="#00c08b" />
            </a>
          </li>
          <li>
            <a href="">
              <FaInstagram size={30} color="#00c08b" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
