import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import MerchantsQuest from "./components/merchantsquest.js";
import QuickCash from "./components/quickcash.js";
import Shop from "./components/shop.js";
import About from "./components/about.js";
import Settings from "./components/settings.js";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="quick-cash" element={<QuickCash />}/>
      <Route path="shop" element={<Shop />}/>
      <Route path="merchants-quest" element={<MerchantsQuest />}/>
      <Route path="about" element={<About />}/>
      <Route path="settings" element={<Settings />}/>
    </Routes>
  </BrowserRouter>,
  rootElement
);