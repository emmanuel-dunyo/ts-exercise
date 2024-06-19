// DAG - Directed Acyclic Graph
export class Node<T> {
	private children: Set<Node<T>>;
	private data: T;

	constructor(data: T) {
		this.data = data;
		this.children = new Set<Node<T>>();
	}

	getData(): T {
		return this.data;
	}

	hasChild(item: Node<T>): boolean {
		return this.children.has(item);
	}

	addChild(child: Node<any>) {
		if (child.getDescendants().has(this)) {
			throw new Error('Adding this child would create a cyclic link.');
		}

		if(this.getChildren().has(child)) {
			// throw new Error('Adding this would create a duplicate child');
			return;
		}

		const childName = child.getData()
		for (const c of this.getChildren()) {
			if (c.getData() === childName) {
					return
			}
		}
		this.children.add(child)
	}

	getChildren(): Set<Node<T>> {
		return new Set<Node<T>>(this.children);
	}

	getDescendants(): Set<Node<T>> {
		const result: Set<Node<T>> = new Set();

		this.children.forEach((child) => {
			result.add(child);
			child.getDescendants().forEach((descendant) => result.add(descendant));
		});
		return result;
	}
}
