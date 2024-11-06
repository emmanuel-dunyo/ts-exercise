export class NodeMap<T> {
  private map: Map<T, Array<T>> = new Map();

  addChildToParent(parent: T, child: T) {
    const childrenArray = this.map.get(parent) ?? new Array<T>();

    if (!this.map.has(parent)) {
      this.map.set(parent, childrenArray);
    }

    if (this.map.get(parent)?.includes(child)) {
      return;
    }

    childrenArray.push(child);
  }

  getChildrenOfNode(parent: T): Array<T> {
    return this.map.get(parent) ?? [];
  }
}
