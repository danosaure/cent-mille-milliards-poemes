export const randomizeIndices = (strings: string[][]): number[] =>
  strings.map((arr) => (arr.length ? Math.floor(Math.random() * arr.length) : -1));
