import { VERSES } from '../verses';
import { getRandomNumber } from '../utils/get-random-number';
import * as styles from '../styles/App.module.scss';

const App = () => {
  const indices: number[] = VERSES.map((_, i) => getRandomNumber(VERSES[i].length));
  const verses: string[] = VERSES.map((verseLines, i) => VERSES[i][indices[i]]);
  const sonnetNumber: number = VERSES.reduce((nb, _, i) => {
    return nb + indices[i] * Math.pow(10, i);
  }, 1);
  return (
    <div className="center">
      <h1>Cent Mille Milliards de Poèmes</h1>
      <p>Sonnet #{sonnetNumber}</p>
      <div className={styles.sonnet}>
        {verses.map((verse, i) => (
          <div key={i}>{verse}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
