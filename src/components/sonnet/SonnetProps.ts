import type { verseItemType } from '../../types/VerseItemType';

export type SonnetProps = {
  sonnetNumber: number;
  verses: verseItemType[];
  randomize: () => void;
};
