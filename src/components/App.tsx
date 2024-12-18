import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { VERSES } from '../verses';
import { getRandomNumber } from '../utils/get-random-number';
import { randomizeIndices } from '../utils/randomize-indices';
import { Sonnet } from './sonnet/Sonnet';
import type { verseItemType } from '../types/VerseItemType';

export const App = () => {
  const [indices, setIndices] = useState<number[]>(randomizeIndices(VERSES));

  const verses: verseItemType[] = VERSES.map((verseLines, i) => ({
    text: VERSES[i][indices[i]],
    handleLeft: () => setIndices(indices.map((v, j) => (i == j ? (v - 1 + VERSES[i].length) % VERSES[i].length : v))),
    handleRight: () => setIndices(indices.map((v, j) => (i == j ? (v + 1) % VERSES[i].length : v))),
  }));
  const sonnetNumber: number = VERSES.reduce((nb, _, i) => {
    return nb + indices[i] * Math.pow(10, i);
  }, 1);

  const randomize = () => setIndices(randomizeIndices(VERSES));

  return (
    <Stack direction="column" spacing={2}>
      <Typography variant="h1">Cent Mille Milliards de Poèmes</Typography>
      <Sonnet sonnetNumber={sonnetNumber} verses={verses} randomize={randomize} />
    </Stack>
  );
};
