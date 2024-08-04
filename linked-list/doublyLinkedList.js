class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push (val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop () {
        if (this.length === 0) {
            return false
        }
        let poppedNode = this.tail
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = poppedNode.prev
            this.tail.next = null
            poppedNode.prev = null
        }
        this.length--
        return this
    }

    shift () {
        if (!this.head) return false
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = this.head.next
            this.head.prev = null
            this.head.next = null
        }
        this.length--
        return this
    }

    unShift (val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            let current = this.head
            current.prev = newNode
            this.head = newNode
            newNode.next = current
        }
        this.length++
        return this
    }

    get (index) {
        if (index < 0 || index >= this.length) return null
        let count, current
        if (index <= this.length / 2) {
            count = 0
            current = this.head
            while(index !== count) {
                current = current.next
                count++
            }
        } else {
            count = this.length - 1
            current = this.tail
            while(index !== count) {
                current = current.prev
                count--
            }
        }
        return current
    }

    set (val, index) {
        if (index < 0 || index >= this.length) return false
        let isValueExists = this.get(index)
        if (isValueExists) {
            isValueExists.val = val
            return true
        }
        return false
    }

    insert (val, index) {
        if (index < 0 || index > this.length) return false
        if (index === 0) return this.unShift(val)
        if (index === this.length) return this.push(val)
        let foundNode = this.get(index)
        let prevNode = foundNode.prev
        let newNode = new Node(val)
        foundNode.prev = newNode
        newNode.next = foundNode
        newNode.prev = prevNode
        prevNode.next = newNode
        this.length++
        return this
    }

    remove (index) {
        if (index < 0 || index > this.length) return false
        if (index === 0) return !!this.shift()
        if (index === this.length - 1) return !!this.pop()
        let removeNode = this.get(index)
        removeNode.prev.next = removeNode.next
        removeNode.next.prev = removeNode.prev
        removeNode.next = null
        removeNode.prev = null
        this.length--
        return true
    }
}

const list = new DoublyLinkedList()
list.push('Pradeep')
list.push('Kumar')
list.push('A')
console.log(list.get(2), 'get=======')
console.log(list)