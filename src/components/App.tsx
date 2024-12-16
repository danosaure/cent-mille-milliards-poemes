import { useState } from 'react';

import { VERSES } from '../verses';
import { getRandomNumber } from '../utils/get-random-number';
import { Sonnet } from './sonnet/Sonnet';
import type { verseItemType } from '../types/verse-item-type';
import * as styles from './App.module.scss';

const App = () => {
  const [indices, setIndices] = useState<number[]>(VERSES.map((_, i) => getRandomNumber(VERSES[i].length)));

  const verses: verseItemType[] = VERSES.map((verseLines, i) => ({
    text: VERSES[i][indices[i]],
    handleLeft: () => setIndices(indices.map((v, j) => (i == j ? (v - 1 + VERSES[i].length) % VERSES[i].length : v))),
    handleRight: () => setIndices(indices.map((v, j) => (i == j ? (v + 1) % VERSES[i].length : v))),
  }));
  const sonnetNumber: number = VERSES.reduce((nb, _, i) => {
    return nb + indices[i] * Math.pow(10, i);
  }, 1);
  return (
    <div className={`${styles.main} center`}>
      <h1>Cent Mille Milliards de Poèmes</h1>
      <div className="poeme">
        <Sonnet sonnetNumber={sonnetNumber} verses={verses} />
      </div>
    </div>
  );
};

export { App };
