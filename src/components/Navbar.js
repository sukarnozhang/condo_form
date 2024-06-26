//Navbar.js

import { Link } from "react-router-dom";
import { BookBookmark, House, ShoppingCart } from "phosphor-react";
import styles from "../css/Navbar.modules.css";

function Navbar() {
  return (
    <div className="nav">
      <div className="navbar">
        <p
          style={{ fontSize: "22px", marginRight: "auto", marginLeft: "15px" }}
        >
          Condo Online Form
        </p>

        <House
          size={32}
          style={{ justifyContent: "flex-end", marginRight: "15px" }}
        />
      </div>
    </div>
  );
}

export default Navbar;
