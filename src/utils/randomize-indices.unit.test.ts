import { expect } from 'chai';
import { randomizeIndices } from './randomize-indices';

describe('RandomizeIndices()', () => {
  it('returns empty array when given empty array', () => {
    expect(randomizeIndices([])).to.deep.equal([]);
  });

  it('returns [-1] when item is empty', () => {
    expect(randomizeIndices([[]])).to.deep.equal([-1]);
  });

  it('returns [0] when item has only one element', () => {
    expect(randomizeIndices([['a']])).to.deep.equal([0]);
  });

  it('returns an array with the same number of items.', () => {
    expect(randomizeIndices([['a'], ['b'], ['c']])).to.have.lengthOf(3);
  });
});
