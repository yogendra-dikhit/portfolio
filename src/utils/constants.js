import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';

export const WINDOW_SIZES = {
  XL: 'desktop',
  L: 'laptop',
  M: 'tab',
  S: 'mob',
};

export const NAV_LIST = [
  {
    id: 1,
    class: '',
    icon: faHome,
    linkTo: '/',
  },
  {
    id: 2,
    class: 'about-link',
    icon: faUser,
    linkTo: '/about',
  },
  {
    id: 3,
    class: 'contact-link',
    icon: faEnvelope,
    linkTo: '/contact',
  },
];

export const SOCIAL_LIST = [
  {
    id: 1,
    icon: faLinkedin,
    linkTo: 'https://linkedin.com/in/yogendra-dikhit',
  },
  {
    id: 2,
    icon: faGithub,
    linkTo: 'https://github.com/yogendra-dikhit',
  },
  {
    id: 3,
    icon: faWhatsapp,
    linkTo: 'https://wa.me/917489990973',
  },
  {
    id: 4,
    icon: faFacebook,
    linkTo: 'https://fb.com/yogendra.dikhit.9',
  },
  {
    id: 5,
    icon: faInstagram,
    linkTo: 'https://instagram.com/yogendra.dikhit.9',
  },
];
