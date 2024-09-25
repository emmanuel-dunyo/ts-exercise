import { NodeMap } from './Map';

describe('Node Map class', () => {
  it('test map returns key value', () => {
    const map = new NodeMap<number, string>();
    map.set(1, 'david');
    const node = map.get(1);
    expect(node).toBe('david');
  });

  it('test map returns size', () => {
    const map = new NodeMap<number, string>();

    map.set(1, 'sikhism');
    map.set(2, 'india');
    map.set(3, 'india');
    map.set(4, 'india');

    expect(map.size).toBe(4);
  });

  it('test map returns size', () => {
    const map = new NodeMap<number, string>();
    const newMap = new NodeMap<number, NodeMap<number, string>>();

    map.set(100, 'sikhism');
    map.set(200, 'india');
    newMap.set(1, map);
    expect(newMap.getChildren(1)).toBe(2);
  });
});
