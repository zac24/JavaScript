export default class Stack {
  constructor() {
    this.items  = [] 
  }

  push(element){
    return this.items.push(element)
  }

  pop(){
    return this.items.pop()
  }

  size(){
    return this.items.length
  }

  peek(){
    return this.items[this.items.length - 1]
  }

  isEmpty() {
    return this.items.length == 0
  }

  print(){
    console.log("Stack is ==>", this.items.toString())
  } 
}

const stack = new Stack()
stack.print()

stack.push(20)
stack.push(15)
stack.push(10)
stack.push(5)
stack.print()
console.log("stack size ==>", stack.size())
console.log("is Stack Empty", stack.isEmpty())
console.log("stack peek", stack.peek())
stack.pop()
stack.print()







