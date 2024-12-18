import Typography from '@mui/material/Typography';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

import type { SonnetProps } from './SonnetProps';

import * as styles from './Sonnet.module.scss';

const Sonnet = ({ sonnetNumber, verses }: SonnetProps) => {
  return (
    <>
      <Typography variant="body1">Sonnet #{sonnetNumber}</Typography>
      <div className={styles.sonnet}>
        {verses.map((verse, i) => (
          <div key={i} className={styles.verse}>
            <span className={`non-printable ${styles.navigation}`}>
              <ArrowCircleLeftIcon fontSize="small" onClick={verse.handleLeft} />
              <ArrowCircleRightIcon fontSize="small" onClick={verse.handleRight} />
            </span>
            <Typography variant="body2" className={styles.text}>
              {verse.text}
            </Typography>
          </div>
        ))}
      </div>
    </>
  );
};

export { Sonnet };
export type { SonnetProps };
