import './index.scss';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import LogoY from '../../assets/images/Y_image.png';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [logoClass, setLogoClass] = useState('spin-animate');
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
      setLogoClass('hover-animate');
    }, 4500);
  }, []);
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters letterClass={letterClass} word={'Hi,'} idx={11} />
            <br />
            <AnimatedLetters letterClass={letterClass} word={"I'm "} idx={14} />
            <img
              className={logoClass}
              src={LogoY}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              word={'ogendra,'}
              idx={18}
            />
            <br />

            <AnimatedLetters
              letterClass={letterClass}
              word={'Software Developer.'}
              idx={27}
            />
          </h1>
          <h2>Front-end / Back-end / Full-stack</h2>
          <Link to="/contact" className="flat-btn">
            CONTECT ME
          </Link>
        </div>
        <div className="logo-container">
          <img
            className={logoClass}
            src={LogoY}
            alt="JavaScript Developer Name, Web Developer Name"
          />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
