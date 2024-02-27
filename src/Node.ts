
// DAG - Directed Acyclic Graph
export class Node {
    private children = new Set<Node>()

    hasChild(item: Node): boolean {
        return this.children.has(item);
    }

    addChild(item: Node) {
        // if (this.getDescendants().has(item)) {
        //     throw new Error("Adding this child would create a cyclic link.");
        // }
        this.children.add(item);
        const jobber = this.getDescendants()
        console.log('getDesc', this.getDescendants())
    }

    getChildren(): Set<Node> {
        return new Set<Node>(this.children)
    }

    getDescendants(): Set<Node> {
        const result: Set<Node> = new Set();

        this.children.forEach((child) => {
            result.add(child);
            child.getDescendants().forEach(descendant => result.add(descendant));
        });

        return result;
    }
    // this returns children as well as daeacendants - add one child to one parent and getDescendants will be true for parent to contain child
}