class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

class Stack {
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }

    push(val) {
        let newNode = new Node(val)
        if (!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
            let temp = this.first
            this.first = newNode
            this.first.next = temp
        }
        return ++this.size
    }

    pop() {
        if (!this.first) return null
        let nextNode = this.first.next
        if (!nextNode) {
            this.last = null
        }
        this.first = this.first.next
        this.size--
        return this.first
    }
}

let stack = new Stack()
stack.push('1')
stack.push('2')
stack.push('3')
console.log(stack, 'after push')
stack.pop()
console.log(stack, 'after pop')

/*
Time Complexity
 - Insertion : O(1)
 - Removal   : O(1)
 - Searching : O(n)
 - Access    : O(n)

Space Complexity: O(n)
*/