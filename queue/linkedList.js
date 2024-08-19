class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    enQueue(val) {
        let newNode = new Node(val)
        if (!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        this.size++
        return this
    }

    deQueue() {
        if (!this.first) return null
        if (this.first === this.last) {
            this.last = null
        }
        this.first = this.first.next
        this.size--
        return this
    }
}

let queue = new Queue()
queue.enQueue('1')
queue.enQueue('2')
queue.enQueue('3')
console.log(queue, 'before dequeue')
queue.enQueue()
console.log(queue, 'after dequeue')

/*
Time Complexity
 - Insertion : O(1)
 - Removal   : O(1)
 - Searching : O(n)
 - Access    : O(n)

Space Complexity: O(n)
*/