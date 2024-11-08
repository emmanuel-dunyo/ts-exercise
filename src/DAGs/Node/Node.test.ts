import { Node } from './Node';

describe('Node class', () => {
  it('test constructor', () => {
    const node = new Node<string>('david');
    expect(node.getData()).toBe('david');
  });

  it('test addChild', () => {
    const sikhism = new Node<string>('sikhism');
    const india = new Node<string>('india');
    const fiji = new Node<string>('fiji');

    sikhism.addChild(india);
    sikhism.addChild(fiji);
    expect(sikhism.hasChild(india)).toBeTruthy();
    expect(sikhism.hasChild(fiji)).toBeTruthy();
    expect(india.hasChild(sikhism)).toBeFalsy();
  });

  it('test getChildren', () => {
    const budhism = new Node('budhism');
    const india = new Node('india');
    const england = new Node('england');
    const japan = new Node('japan');

    budhism.addChild(india);
    budhism.addChild(england);
    budhism.addChild(japan);
    expect(budhism.getChildren().size).toBe(3);
  });

  it('test getChildren adding the same child twice', () => {
    const budhism = new Node('budhism');
    const india = new Node('india');

    budhism.addChild(india);
    budhism.addChild(india);
    expect(budhism.getChildren().size).toBe(1);
  });

  it('test returned collection is immutable', () => {
    const budhism = new Node('budhism');
    const india = new Node('india');
    budhism.addChild(india);

    const children = budhism.getChildren();
    expect(children.size).toBe(1);

    children.add(new Node('budhism'));
    expect(children.size).toBe(2);
    expect(budhism.getChildren().size).toBe(1);
  });

  it('test getDescendants()', () => {
    const parent = new Node('parent');
    const child = new Node('child');
    const grandchild = new Node('grandchild');

    parent.addChild(child);
    child.addChild(grandchild);

    expect(parent.getDescendants().size).toBe(2);
    expect(parent.getDescendants()).toContain(child);
    expect(parent.getDescendants()).toContain(grandchild);
  });

  it('test getDescendants() a bit more complicated', () => {
    const parent = new Node('parent');
    const child1 = new Node('child1');
    const child2 = new Node('child2');
    const child3 = new Node('child3');
    const grandchild = new Node('grandchild');
    const greatgrandchild = new Node('greatgrandchild');

    parent.addChild(child1);
    parent.addChild(child2);
    parent.addChild(child3);
    child2.addChild(grandchild);
    grandchild.addChild(greatgrandchild);

    expect(parent.getDescendants().size).toBe(5);
    expect(parent.getDescendants()).toContain(child1);
    expect(parent.getDescendants()).toContain(child2);
    expect(parent.getDescendants()).toContain(child3);
    expect(parent.getDescendants()).toContain(grandchild);
    expect(parent.getDescendants()).toContain(greatgrandchild);
  });

  it('test it throws exception when adding a cyclic link', () => {
    const parent = new Node('parent');
    const child = new Node('child');

    parent.addChild(child);
    expect(() => {
      child.addChild(parent);
    }).toThrow(new Error('Adding this child would create a cyclic link.'));
  });

  it('test it throws exception when adding a cyclic link', () => {
    const a = new Node('a');
    const b = new Node('b');
    const c = new Node('c');
    const d = new Node('d');
    const e = new Node('e');

    a.addChild(b);
    a.addChild(c);
    b.addChild(d);
    c.addChild(d);
    d.addChild(e);

    expect(() => {
      e.addChild(c);
    }).toThrow(new Error('Adding this child would create a cyclic link.'));
  });

  it('test equality when adding nodes', () => {
    const parent = new Node<string>('parent');
    const child1 = new Node<string>('child');
    const child2 = new Node<string>('child');
    const child3 = new Node('child');

    parent.addChild(child1);
    parent.addChild(child2);
    parent.addChild(child3);
    expect(parent.getChildren().size).toBe(3);
  });
});
