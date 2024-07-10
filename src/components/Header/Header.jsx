import { useContext } from 'react'
import Nav from "./Nav";
import { ThemeContext } from '../../context/ThemeContext'


const Header = () => {
  return <header className="header">
    <Nav />
  </header>;
};

export default Header;