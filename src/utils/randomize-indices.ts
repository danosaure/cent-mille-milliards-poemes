export const randomizeIndices = (strings: string[][]): number[] => strings.map((arr) => Math.floor(Math.random() * arr.length));
