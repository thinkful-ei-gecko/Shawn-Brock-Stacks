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

  matchPar(stack){
    let openPar = 0;
    let closePar = 0;
    let index = 0;
    let lastClose;
    let lastOpen;
    let current = stack.top;


    while(current.next !== null){

      if(current.data === '('){
        lastOpen = index;
        openPar++;
      }
      if(current.data === ')'){
        lastClose = index; 
        closePar++;
        return 'total missing closing parenthesis: ' + closePar;
      }
      index++;
      console.log(index);
    }

    if(openPar > closePar) {
      return 'total missing opening parenthesis: ' + openPar + 'missing at position' + lastOpen;
    }

    if(closePar > openPar) {
      return 'total missing closing parenthesis: ' + closePar + 'missing at position' + lastClose;
    }

    if(closePar === openPar){
      return 'Your equation has balanced parenthesis';
    }
    return stack;
  }
};

module.exports = stackHelpers;
