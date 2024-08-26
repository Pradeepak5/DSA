class Node {
    constructor(val){
        this.val = val
        this.right = null
        this.left = null
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null
    }

    insert (val) {
        let newNode = new Node(val)
        if (this.root === null) {
            this.root = newNode
            return this
        } else {
            let current = this.root
            while(true) {
                if (val < current.val) {
                    if (current.left === null) {
                        current.left = newNode
                        return this
                    } else {
                        current = current.left 
                    }
                } else if (val > current.val) {
                    if (current.right === null) {
                        current.right = newNode
                        return this
                    } else {
                        current = current.right
                    }
                } else {
                    return undefined
                }
            }
        }
    }

    find (val) {
        if (!this.root) return false
        let current = this.root
        while(current) {
            if (current.val === val) return true
            if (val > current.val) {
                current = current.right
            } else {
                current = current.left
            }
        }
        return false
    }

    BFS () {
        if (!this.root) return null
        let queue = [], data = []
        queue.push(this.root)
        while (queue.length > 0) {
            let node = queue.shift()
            data.push(node.val)
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
    return data
    }

    preOrder () {
        let data = []
        let traverse = (node) => {
            data.push(node.val)
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
        }
        traverse(this.root)
        return data
    }

    postOrder () {
        let data = []
        let traverse = (node) => {
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
            data.push(node.val)
        }
        traverse(this.root)
        return data
    }

    inOrder () {
        let data = []
        let traverse = (node) => {
            if (node.left) traverse(node.left)
            data.push(node.val)
            if (node.right) traverse(node.right)
        }
        traverse(this.root)
        return data
    }
}

let tree = new BinarySearchTree()
tree.insert(10)
tree.insert(15)
tree.insert(9)
tree.insert(5)
tree.insert(6)
tree.insert(3)
tree.insert(7)
tree.insert(12)
tree.insert(17)
console.log(tree.find(5), 'find')
console.log(tree)
console.log(tree.BFS())
console.log(tree.preOrder(), 'pre-order')
console.log(tree.postOrder(), 'post-order')
console.log(tree.inOrder(), 'in-order')