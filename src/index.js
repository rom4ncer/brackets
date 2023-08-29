module.exports = function check(str, bracketsConfig) {
  let pairs = '';
  for (let pair of bracketsConfig) {
    if (pair[0] === pair[1]) {
      pairs += pair[0] + ' ';
    } else {
      pairs += pair[0] + pair[1];
    }
  }

  let stack = [];
  for (let i = 0; i < str.length; i++) {
    curr_pair_index = pairs.indexOf(str[i]);

    if (stack.length === 0) {

      if ( curr_pair_index % 2 === 0) {
        stack.push(str[i]);
      } else {
        return false;
      }

    } else {  // stack.length > 0
      let stack_top = stack[stack.length - 1];
      let top_pair_index = pairs.indexOf(stack_top);

      if (str[i] === stack_top && pairs[curr_pair_index + 1] === ' ') {
        stack.pop();
      } else if (curr_pair_index === top_pair_index + 1) {
        stack.pop();
      } else if (curr_pair_index % 2 === 0) {
        stack.push(str[i]);
      } else {
        return false;
      }

    }
    
  }

  return stack.length ? false : true;
}
