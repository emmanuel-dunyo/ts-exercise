import { NodeMap } from './NodeMap';

let dag: NodeMap<String>;

beforeEach(() => {
  dag = new NodeMap<String>();
});

describe('Node Map class', () => {
  it('Create a simple DAG of strings "Parent" -> "Child"', () => {
    dag.addChildToParent('Parent', 'Child');
    const children = dag.getChildrenOfNode('Parent');
    expect(children).toContain('Child');
  });

  it('Create a simple DAG of strings "Parent" -> "Child1" and "Child2', () => {
    dag.addChildToParent('Parent', 'Child');
    dag.addChildToParent('Parent', 'Child2');
    const children = dag.getChildrenOfNode('Parent');
    expect(children.length).toBe(2);
  });

  it('Add the same child twice..', () => {
    dag.addChildToParent('Parent', 'Child');
    dag.addChildToParent('Parent', 'Child');
    const children = dag.getChildrenOfNode('Parent');
    expect(children.length).toBe(1);
  });
});
