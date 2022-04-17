import './index.scss';

const AnimatedLetters = ({ word, letterClass, idx }) => {
  return (
    <span>
      {word.split('').map((letter, i) => (
        <span key={letter + i} className={`${letterClass} _${i + idx}`}>
          {letter}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
