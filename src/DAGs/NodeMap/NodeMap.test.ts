import { NodeMap } from './NodeMap';

describe('Node Map class', () => {
  it('Create a simple DAG of strings "Parent" -> "Child"', () => {
    const dag = new NodeMap<String>();
    dag.addChildToParent('Parent', 'Child');
    const children = dag.getChildrenOfNode('Parent');
    expect(children).toContain('Child');
  });

  it('Create a simple DAG of strings "Parent" -> "Child1" and "Child2', () => {
    const dag = new NodeMap<String>();
    dag.addChildToParent('Parent', 'Child');
    dag.addChildToParent('Parent', 'Child2');
    const children = dag.getChildrenOfNode('Parent');
    expect(children.length).toBe(2);
  });
});
