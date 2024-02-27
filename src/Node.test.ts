import { Node } from "./Node";

describe('Node class', () => {

  it('test addChild', () => {
    const sikhism = new Node();
    const india = new Node();

    sikhism.addChild(india);
    expect(sikhism.hasChild(india)).toBeTruthy();
    expect(india.hasChild(sikhism)).toBeFalsy();
  });

  it('test getChildren', () => {
    const budhism = new Node();
    const india = new Node();
    const england = new Node();
    const japan = new Node();

    budhism.addChild(india);
    budhism.addChild(england);
    budhism.addChild(japan);
    expect(budhism.getChildren().size).toBe(3);
  });

  //!
  // it('test getChildren adding the same child twice', () => {
  //   const budhism = new Node();
  //   const india = new Node();

  //   budhism.addChild(india);
  //   budhism.addChild(india);
  //   expect(budhism.getChildren().size).toBe(1);
  // });
  
  it('test returned collection is immutable', () => {
    const budhism = new Node();
    const india = new Node();
    budhism.addChild(india);
    
    const children = budhism.getChildren()
    expect(children.size).toBe(1);

    children.add(new Node());
    expect(children.size).toBe(2);
    expect(budhism.getChildren().size).toBe(1)
  });

  it('test getDescendants()', () => {
    const parent = new Node();
    const child = new Node();
    const grandchild = new Node();

    parent.addChild(child);
    child.addChild(grandchild);

    expect(parent.getDescendants().size).toBe(2);
    expect(parent.getDescendants()).toContain(child);
    expect(parent.getDescendants()).toContain(grandchild);
  });
  
  it('test getDescendants() a bit more complicated', () => {
    const parent = new Node();
    const child1 = new Node();
    const child2 = new Node()
    const child3 = new Node()
    const grandchild = new Node();
    const greatgrandchild = new Node();

    parent.addChild(child1);
    parent.addChild(child2);
    parent.addChild(child3);
    child2.addChild(grandchild);
    grandchild.addChild(greatgrandchild)

    expect(parent.getDescendants().size).toBe(5);
    expect(parent.getDescendants()).toContain(child1);
    expect(parent.getDescendants()).toContain(child2);
    expect(parent.getDescendants()).toContain(child3);
    expect(parent.getDescendants()).toContain(grandchild);
    expect(parent.getDescendants()).toContain(greatgrandchild);
  });

  it('jobber', () => {
    const parent = new Node();
    const child = new Node();
    
    parent.addChild(child)
    // child.addChild(parent)
    // expect( function() {child.addChild(parent);}).toThrow(new Error("Adding this child would create a cyclic link."))

    // console.log(add)

    
    // detect cyclic DAG loop expection
    // try catch throw new error to prevent it from creating a cyclic loop  
    
    // try {
      //   child.addChild(parent)
      // } catch {
        //   throw new Error("Don't do it.")
        // }
        
      // if (child.getDescendants().has(parent)) {
      //     throw new Error("Don't do it.")
      //     null
      // } else {
      //   child.addChild(parent)
      // }

      // if (parent.getDescendants().has(child)) {
      //   throw new Error('NOPE');
      // }

    // expect(parent.getDescendants().size).toBe(1);
  });
});