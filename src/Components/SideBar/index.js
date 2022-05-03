import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoY from '../../assets/images/Y_image.png';
import Name from '../../assets/images/name1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

const SideBar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoY} alt="Logo" />
        <img className="sub-logo" src={Name} alt="slobodan" />
      </Link>

      <nav>
        <NavLink activeclassname="active" exact="true" to="/">
          <FontAwesomeIcon icon={faHome} />
        </NavLink>

        <NavLink activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>

        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href="https://linkedin.com/in/yogendra-dikhit"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/yogendra-dikhit"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a href="https://wa.me/917489990973" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faWhatsapp} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://fb.com/yogendra.dikhit.9"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/yogendra.dikhit.9"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
