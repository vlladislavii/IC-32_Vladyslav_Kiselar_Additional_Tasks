function checkBrackets(str) {
    const stack = [];
    const brackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (const char of str) {
        if (char in brackets) {
            stack.push(char);
        }
        else if (Object.values(brackets).includes(char)) {
            const lastOpen = stack.pop();
            if (brackets[lastOpen] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(checkBrackets("function test() { return [1, 2, 3]; }"));   // true
console.log(checkBrackets("function test() { return [1, 2, 3; }"));    // false
console.log(checkBrackets("let arr = [1, 2, 3, (4 + 5)];"));           // true
console.log(checkBrackets("{[()]}"));                                  // true
console.log(checkBrackets("{[(])}"));                                  // false
