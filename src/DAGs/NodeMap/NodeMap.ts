export class NodeMap<T> {
  private map: Map<T, Array<T>> = new Map();

  addChildToParent(parent: T, child: T) {
    const childrenArray = this.map.get(parent) || new Array<T>();
    childrenArray.push(child);
    this.map.set(parent, childrenArray);
  }

  getChildrenOfNode(parent: T): Array<T> {
    return this.map.get(parent) ?? [];
  }
}
