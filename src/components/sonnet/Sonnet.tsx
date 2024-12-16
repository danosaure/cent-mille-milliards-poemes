import * as styles from './Sonnet.module.scss';

import type { verseItemType } from '../../types/verse-item-type';

type SonnetProps = {
  sonnetNumber: number;
  verses: verseItemType[];
};

const Sonnet = ({ sonnetNumber, verses }: SonnetProps) => {
  return (
    <>
      <p>Sonnet #{sonnetNumber}</p>
      <div className={styles.sonnet}>
        {verses.map((verse, i) => (
          <div key={i} className={styles.verse}>
            <div className={styles.navigation}>
              <button onClick={verse.handleLeft}>&lt;</button>
            </div>
            <div className={styles.text}>{verse.text}</div>
            <div className={styles.navigation}>
              <button onClick={verse.handleRight}>&gt;</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export { Sonnet };
export type { SonnetProps };
