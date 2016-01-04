import { expect } from 'chai';
import { LinkedList } from '../linkedlist';

describe('LinkedList Methods', () => {
  const list = new LinkedList();

  it('should have a head', () => {
    expect(list.head).to.be.null;
  });

  it('should have a tail', () => {
    expect(list.tail).to.be.null;
  });

  it('should have a add method', () => {
    expect(list.add).to.exist;
  });

  it('should have a remove method', () => {
    expect(list.remove).to.exist;
  });

  it('should have a getHead method', () => {
    expect(list.getHead).to.exist;
  });

  it('should have a getTail method', () => {
    expect(list.getTail).to.exist;
  });

  it('should have a reverse method', () => {
    expect(list.reverse).to.exist;
  });

  it('should have a removeHead method', () => {
    expect(list.removeHead).to.exist;
  });

  it('should have a removeTail method', () => {
    expect(list.removeTail).to.exist;
  });

  it('should have a removeDuplicates method', () => {
    expect(list.removeDuplicates).to.exist;
  });

  it('should have clear method', () => {
    expect(list.clear).to.exist;
  });

  it('should have filter method', () => {
    expect(list.filter).to.exist;
  });

  it('should have some method', () => {
    expect(list.some).to.exist;
  });

  it('should have map method', () => {
    expect(list.map).to.exist;
  });

  it('should have reduce method', () => {
    expect(list.reduce).to.exist;
  });

  it('should have forEach method', () => {
    expect(list.forEach).to.exist;
  });

  it('should have every method', () => {
    expect(list.every).to.exist;
  });

  it('should have equals method', () => {
    expect(list.equals).to.exist;
  });

  it('should have size method', () => {
    expect(list.size).to.exist;
  });

  it('should have toArray method', () => {
    expect(list.toArray).to.exist;
  });

  it('should have contains method', () => {
    expect(list.contains).to.exist;
  });
});