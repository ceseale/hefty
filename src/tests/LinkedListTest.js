import { expect } from 'chai';
import { LinkedList } from '../linkedlist';

describe('LinkedList', () => {
  it('should just be true', () => {
    const list = new LinkedList();
    expect(list.head).to.exist;
  });
});