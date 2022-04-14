import "./header.css"
import { Link } from "react-router-dom";

function Header() {
  return (
      <ul className="list-container">
        <li className="grid-item"><button className="menu-buttons" id="lobby-button" ><Link to="/" style={{ textDecoration: 'none' }}>LOBBY</Link></button></li>
        <li className="grid-item"><button className="menu-buttons" id="quick-cash-button"><Link to="/quick-cash" style={{ textDecoration: 'none' }}>QUICK CASH</Link></button></li>
        <li className="grid-item"><button className="menu-buttons" id="shop-button"><Link to="/shop" style={{ textDecoration: 'none' }}>SHOP</Link></button></li>
        <li className="grid-item" id="middle-image"></li>
        <li className="grid-item"><Link className="menu-buttons" id="lobby-button" to="/merchants-quest" style={{ textDecoration: 'none' }}>A MERCHANT'S QUEST</Link></li>
        <li className="grid-item"><button className="menu-buttons" id="settings-button"><Link to="/about" style={{ textDecoration: 'none' }}>ABOUT</Link></button></li>
        <li className="grid-item"><button className="menu-buttons" id="settings-button"><Link to="/settings" style={{ textDecoration: 'none' }}>SETTINGS</Link></button></li>
      </ul>
  );
}

export default Header;