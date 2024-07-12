import { useContext } from 'react'
import { Link } from "react-router-dom";

import burgerIcon from "/public/burger-icon.png";

const Nav = () => {

  // PENDING adaptar el CONTEXT
  // const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <nav className="nav">
      <input type="checkbox" id="menu" />
      <label htmlFor="menu"><img src={`${burgerIcon}`} alt="burger" width="25px" /></label>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new">Create your Pokemon</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;