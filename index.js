// import {Stack} from "./Stack/index.js"
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.size = 0  
  }

  isEmpty () {
    return this.size === 0
  }

  getSize() {
    return this.size
  }

  prepend() {
    const node = Node(5)
    if(this.isEmpty()){
      this.head = node
    }else{
      this.next = this.head
      this.head = node
    }
    this.size++
  }

  print() {
    if(this.isEmpty()){
      console.log('The list is empty')
    }
  }
}

const list = new LinkedList()
console.log('List is empty?', list.isEmpty())
console.log('list size', list.getSize())


