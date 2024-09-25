// create a class that uses a map

export class NodeMap<K, V> {
  private myMap: Map<K, V>;

  constructor() {
    this.myMap = new Map<K, V>();
  }

  set(key: K, value: V): void {
    this.myMap.set(key, value);
  }

  get(key: K): V | undefined {
    return this.myMap.get(key);
  }

  getChildren(key: K): number | undefined {
    const value = this.get(key);
    if (value instanceof NodeMap) {
      return value.size;
    }
  }

  has(key: K): boolean {
    return this.myMap.has(key);
  }

  delete(key: K): boolean {
    return this.myMap.delete(key);
  }

  clear(): void {
    this.myMap.clear();
  }

  get size(): number {
    return this.myMap.size;
  }
}
