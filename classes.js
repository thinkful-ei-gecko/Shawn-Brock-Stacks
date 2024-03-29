const _Node = require('./node');
const stackHelpers = require('./helpers');

class Stack {
  constructor() {
    this.top = null;
  }
  
  push(data) {
    if(this.top === null){
      this.top = new _Node(data, null)
      return this.top;
    }

    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);
    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }
    //make the new node the last
    //item on the queue
    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }

    const node = this.first;
    this.first = this.first.next;

    if (node === this.last) {
      this.last = null;
    }

    return node.value;
  }
}

function main() {
  let Startrek = new Stack();
  let QQ = new Queue();

  Startrek.push("3");
  Startrek.push("*");
  Startrek.push("4");
  Startrek.push("/");
  Startrek.push("(");
  Startrek.push("4");
  Startrek.push("-");
  Startrek.push("2");
  Startrek.push(")");
  Startrek.push(")");





  //console.log(stackHelpers.matchPar('((3*2)*(5/2))/2))'));
  //console.log(LL);
}
main();

module.exports = Queue, Stack;
