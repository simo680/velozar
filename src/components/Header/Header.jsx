import { ReactComponent as LogoSvg } from "../../assets/icons/logo.svg";
import { Link } from "react-scroll";
import s from "./header.module.css";

function Header() {
  return (
    <header className={s.header}>
      <nav className={s.header__menu}>
        <LogoSvg />
        <ul className={s["header__links-list"]}>
          <li className={s["header__links-list-item"]}><Link to="about" spy={true} smooth={true}>О нас</Link></li>
          <li className={s["header__links-list-item"]}><Link to="offer" spy={true} smooth={true}>Услуги</Link></li>
          <li className={s["header__links-list-item"]}><Link to="rent" spy={true} smooth={true}>Аренда</Link></li>
        </ul>
        <button className={s["header__contact-btn"]}>Связаться</button>
      </nav>
    </header>
  );
}

export default Header;
