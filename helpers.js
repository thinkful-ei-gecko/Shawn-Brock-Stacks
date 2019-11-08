const _Node = require('./node');

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

//BEGINNING OF ASSIGNMENT
const stackHelpers = {
  peek(stack) {
    return stack.top;
  },

  isEmpty(stack) {
    if (stack.top === null) {
      return "There is no stack";
    }
  },

  display(stack) {
    let currNode = stack.top;
    let currPos = 1;
    while (currNode !== null) {
      console.log("pos:" + currPos);
      console.log("value:" + currNode.data);
      console.log(
        "next:" + (currNode.next !== null ? currNode.next.data : null)
      );
      currNode = currNode.next;
      currPos += 1;
    }
    return;
  },

  is_palindrome(stack) {
    stack = stack.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    // Your code goes here

    var len = Math.floor(stack.length / 2);
    for (var i = 0; i < len; i++)
      if (stack[i] !== stack[stack.length - i - 1]) return false;
    return true;
  },

  // eqToStack(string){
  //   let eqStack = new Stack();
  //   for(let i = 0; i < string.length; i++){
  //     eqStack.push(string[i]);
  //   }
  //   return eqStack;
  // },

  matchPar(string){
    this.eqToStack = function(string){
      let eqStack = new Stack();
      for(let i = string.length; i >= 0; i--){
        eqStack.push(string[i]);
      }
      return eqStack;
    }

    let stack = this.eqToStack(string);
    let openPar = 0;
    let closePar = 0;
    let index = 0;
    let lastClose;
    let lastOpen;
    let current = stack.top;


    console.log(JSON.stringify(stack));
    console.log(stack.length);

    while(current !== null){
      if(current.data === '('){
        console.log('extra (');
        lastOpen = index;
        openPar++;
      }
      if(current.data === ')'){
        console.log('extra )');
        lastClose = index; 
        closePar++;
      }
      current = current.next;
      index++;
    }

    if(openPar > closePar) {
      return `Unbalanced: Detected ${openPar-closedPar} surplus "(".  See position ${lastOpen}`;
    }

    if(closePar > openPar) {
      return `Unbalanced: Detected ${closePar-openPar} surplus ")".  See position ${lastClose}`;
    }

    if(closePar === openPar){
      return 'Your equation has balanced parenthesis';
    }
    return;
  },

  sort(stack){
    let sortedStack = new Stack();
    let temp;

    while(current !== null){
      if(current.data > current.next.data){
        temp = current.data;
        stack.top.pop()
        sortedStack.push(temp);
      }
      else{
        c
      }
    }
    return sortedStack;
  }

};



function main() {
  let Startrek = new Stack();
  let QQ = new Queue();

  Startrek.push("5");
  Startrek.push("2");
  Startrek.push("4");
  Startrek.push("9");
  Startrek.push("1");
  Startrek.push("0");

  console.log(stackHelpers.sort(Startrek))
  //console.log(stackHelpers.matchPar(Startrek));
  //console.log(stackHelpers.matchPar('((3*2)*(5/2))/2))'));
  //console.log(LL);
}
main();

module.exports = stackHelpers;
