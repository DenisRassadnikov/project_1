import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { SlBasket } from "react-icons/sl";
import { AiOutlineMenu } from "react-icons/ai";
import Search from "./Search";
import AppLogo from "../logo/rozetka-45.svg";
import AppLogoSmall from "../logo/logo_short.svg";
import UaFlag from "../logo/flag-ua.svg";

const Header = ({ formSubmit, text, inputChange }) => {
  return (
    <div className='page-header'>
      <button className='page-header__menu'>
        <AiOutlineMenu />
      </button>
      <Link className='header-logo' to='.'>
        <img className='header-logo-img' src={AppLogo} alt='logo' />
        <img
          className='header-logo-img__small'
          src={AppLogoSmall}
          alt='small logo'
        />
      </Link>
      <Search
        formSubmit={formSubmit}
        inputChange={inputChange}
        request={text}
      />
      <ul className='header-actions'>
        <li>
          <span className='lang-en'>EN</span>
        </li>
        <li className='lang-ua'>
          <img className='lang-ua__flag' src={UaFlag} alt='ua' />
          <span>UA</span>
        </li>
        <li className='header-actions__item'>
          <FiUser />
        </li>
        <li className='header-actions__item'>
          <SlBasket />
        </li>
      </ul>
    </div>
  );
};

export default Header;
