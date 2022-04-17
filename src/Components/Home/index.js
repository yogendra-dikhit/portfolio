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
    }, 3000);
  }, []);
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            {/* <span className="text-animate">Hi,</span> */}
            <AnimatedLetters letterClass={letterClass} word={'Hi,'} idx={1} />
            <br />
            <AnimatedLetters letterClass={letterClass} word={"I'm "} idx={4} />
            {/* <span>I'm Yogendra,</span> */}
            <img
              className={logoClass}
              src={LogoY}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              word={'ogendra,'}
              idx={8}
            />
            <br />
            {/* <span>Software Developer.</span> */}
            <AnimatedLetters
              letterClass={letterClass}
              word={'Software Developer.'}
              idx={17}
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
