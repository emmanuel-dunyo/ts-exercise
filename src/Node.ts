// DAG - Directed Acyclic Graph
export class Node {
    private children
    private name: string

    constructor(name: string){
        this.name = name
        this.children = new Set<Node>
    }

    getName(): string {
        return this.name
    }

    hasChild(item: Node): boolean {
        return this.children.has(item);
    }

    addChild(child: Node) {
        if (child.getDescendants().has(this)) {
            throw new Error("Adding this child would create a cyclic link.")
        }

        for (const existing of this.children) {
            if (existing.name === child.name) {
                return;
            }
        }

        this.children.add(child)
    }

    getChildren(): Set<Node> {
        return new Set<Node>(this.children)
    }

    getDescendants(): Set<Node> {
        const result: Set<Node> = new Set()

        this.children.forEach((child) => {
            result.add(child)
            child.getDescendants().forEach(descendant => result.add(descendant))
        })
        return result
    }
}