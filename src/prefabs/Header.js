import "./header.css"
import { Link } from "react-router-dom";

function Header() {
  return (
      <ul className="list-container">
       <li className="grid-item"><Link to="/" style={{ textDecoration: 'none' }}><button className="menu-buttons" id="lobby-button">LOBBY</button></Link></li>
        <li className="grid-item"><Link to="/quick-cash" style={{ textDecoration: 'none' }}><button className="menu-buttons" id="quick-cash-button">QUICK CASH</button></Link></li>
        <li className="grid-item"><Link to="/shop" style={{ textDecoration: 'none' }}><button className="menu-buttons" id="shop-button">SHOP</button></Link></li>
        <li className="grid-item" id="middle-image"></li>
        <li className="grid-item"><Link to="/merchants-quest" style={{ textDecoration: 'none' }}><button className="menu-buttons" id="merchants-quest-button">MERCHANT'S QUEST</button></Link></li>
        <li className="grid-item"><Link to="/about" style={{ textDecoration: 'none' }}><button className="menu-buttons" id="about-button">ABOUT</button></Link></li>
        <li className="grid-item"><Link to="/settings" style={{ textDecoration: 'none' }}><button className="menu-buttons" id="settings-button">SETTINGS</button></Link></li>
      </ul>
  );
}

export default Header;