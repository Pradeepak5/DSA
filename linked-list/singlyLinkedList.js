class Node {
    constructor (val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedlist {
    constructor () {
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
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop () {
        if (!this.head) return null
        let current = this.head
        let newTail = current
        while (current.next) {
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return current
    }

    shift () {
        if (!this.head) return null
        let currentHead = this.head
        this.head = currentHead.next
        this.length--
        if (this.length === 0) {
            this.tail = null
        }
        return currentHead
    }

    unShift(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    get(index) {
        if (index < 0 || index >= this.length) return null
        let count = 0
        let current = this.head
        while(count !== index) {
            current = current.next
            count++
        }
        return current
    }

    set(val, index) {
        if (index < 0 || index >= this.length) return null
        const valueExists = this.get(index)
        if (valueExists) {
            valueExists.val = val
            return true
        }
        return false
    }

    insert(val, index) {
        if (index < 0 || index > this.length) return false
        if (index === this.length) {
            this.push(val)
        } else if (index === 0) {
            this.unShift(val)
        } else {
            let prev = this.get(index - 1)
            let newNode = new Node(val)
            newNode.next = prev.next
            prev.next = newNode
            this.length++
        }
        return this
    }

    remove (index) {
        if (index < 0 || index > this.length) return false
        if (index === this.length - 1) return this.pop()
        if (index === 0) return this.shift()
        let prev = this.get(index - 1)
        let removedNode = prev.next
        prev.next = removedNode.next
        this.length--
        return removedNode
    }

    reverse () {
        let node = this.head
        this.head = this.tail
        this.tail = node
        let next, prev = null
        for (let i=0; i<this.length; i++) {
            next = node.next
            node.next = prev
            prev = node
            node = next
        }
        return this
    }

    print () {
        let arr = []
        let current = this.head
        while (current) {
            arr.push(current.val)
            current = current.next
        }
        console.log(arr)
    }
}

const list = new SinglyLinkedlist()
// list.push('pradeep')
// list.push('kumar')
// list.push('a')
// list.push('Hi')
// list.shift()
// list.unShift('Pradeep')
// console.log(list.get(1), 'get')
// list.set('hello', 1)
// list.insert('welcome', 1)
// list.remove(1)
// list.reverse()
// console.log(list)
// list.print()

const sample = (head) => {
    const temp = head
    console.log(temp, 'temp')
    console.log(temp?.next, 'next')
    return
}

sample([1,2,3,4,5])