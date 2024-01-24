export class Node {
    private children = new Set<Node>()
    
    hasChild(item: Node): boolean {
        return this.children.has(item);
    }
    
    addChild(item: Node) {
            this.children.add(item)
    }
    
    getChildren(): Set<Node> {
        return this.children
    }
}