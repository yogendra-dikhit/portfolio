import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Name from '../../assets/images/name1.png';
import LogoY from '../../assets/images/Y_image.png';
import { NAV_LIST, SOCIAL_LIST } from '../../utils/constants';
import useDeviceType from '../../utils/useDeviceType';
import './index.scss';

const SideBar = () => {
  const deviceType = useDeviceType();
  const [device, setDevice] = useState(deviceType);
  const [isMenuOpen, setIsMenuOpen] = useState('menu-closed');
  const checkBox = useRef();

  useEffect(() => {
    setDevice(deviceType);
  }, [deviceType]);

  const handleMenuClick = (e) => {
    if (e?.currentTarget?.checked) {
      setIsMenuOpen('menu-open');
    } else {
      setIsMenuOpen('menu-closed');
    }
  };
  const handleLinkClick = (e) => {
    checkBox.current.checked = false;
    setIsMenuOpen('menu-closed');
  };
  return (
    <div className={`nav-bar ${device} ${isMenuOpen}`}>
      <Link className="logo" to="/">
        <img src={LogoY} alt="Logo" />
        <img className="sub-logo" src={Name} alt="Yogendra" />
      </Link>

      <label className="mob-menu">
        <input
          name="menu-check"
          type="checkbox"
          ref={checkBox}
          value={isMenuOpen === 'menu-closed'}
          onChange={handleMenuClick}
        />
        <span className="menu">
          <span className="hamburger"></span>
        </span>
      </label>

      <nav>
        {NAV_LIST &&
          NAV_LIST.map((nav) => (
            <NavLink
              key={nav.id}
              activeclassname="active"
              className={nav.class}
              exact="true"
              to={nav.linkTo}
              onClick={handleLinkClick}
            >
              <FontAwesomeIcon icon={nav.icon} />
            </NavLink>
          ))}
      </nav>
      <span className="divider"></span>
      <ul>
        {SOCIAL_LIST &&
          SOCIAL_LIST.map((social) => (
            <li key={social.id}>
              <a href={social.linkTo} rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={social.icon} color="#4d4d4e" />
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SideBar;
