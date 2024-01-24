import { Node } from "./Node";

describe('Item class', () => {

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

  it('test getChildren adding the same child twice', () => {
    const budhism = new Node();
    const india = new Node();

    budhism.addChild(india);
    budhism.addChild(india);
    expect(budhism.getChildren().size).toBe(1);

  });

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


});