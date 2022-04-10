import "./header.css"

function Header() {
  return (
    <>
      <ul className="list-container">
        <li className="grid-item"><button className="menu-buttons" id="lobby-button">LOBBY</button></li>
        <li className="grid-item"><button className="menu-buttons" id="quick-cash-button">QUICK CASH</button></li>
        <li className="grid-item"><button className="menu-buttons" id="shop-button">SHOP</button></li>
        <li className="grid-item" id="middle-image"></li>
        <li className="grid-item"><button className="menu-buttons" id="merchants-quest-button">A MERCHANT'S QUEST</button></li>
        <li className="grid-item"><button className="menu-buttons" id="about-button">ABOUT</button></li>
        <li className="grid-item"><button className="menu-buttons" id="settings-button">SETTINGS</button></li>
      </ul>
    </>
  );
}

export default Header;


// <img src="https://i.ibb.co/6rdKcMj/1f949fd4746d9c77b7c935427c312be2f1fa9af4-hq.gif"></img>