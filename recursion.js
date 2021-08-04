const factorial = (num) => {
    if (num === 1) return 1;
    return num * factorial(num - 1);
}

// console.log(factorial(2));


// function power(num, pow) {
//     if (pow === 1) return num;
//     // return Math.pow(num, pow)
//     return num * power(num, pow - 1);
// }

function power(base, exponent) {
    if (exponent === 0) return 1;
    return base * power(base, exponent - 1);
}

// console.log(power(6,5))

function fib(n) {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

function reverse(str) {
    if (str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
}

// console.log(reverse('gura'))

function isPalindrome(str) {
    const helper = (str) => {
        if (str.length <= 1) return str;
        return helper(str.slice(1)) + str[0];
    }
    return helper(str) === str
}

// console.log(iFsPalindrome('ara'))

function capitalizeFirst(arr) {
    if (arr.length === 1)
        return [arr[0].charAt(0).toUpperCase() + arr[0].slice(1)];
    return [(arr[0].charAt(0).toUpperCase() + arr[0].slice(1))].concat(capitalizeFirst(arr.slice(1)))
}

// console.log(capitalizeFirst(['car', 'taco', 'banana']))

function capitalizeWords(arr) {
    if (arr.length === 1)
        return [arr[0].toUpperCase()];
    return [arr[0].toUpperCase()].concat(capitalizeWords(arr.slice(1)))
}

// console.log(capitalizeWords(['car', 'taco', 'banana']))

function collectStrings(obj) {
    let arr = [];
    const helper = (objRec) => {
        for (let key in objRec) {
            if (typeof objRec[key] === 'object') helper(objRec[key]);
            else if (typeof objRec[key] === 'string') arr.push(objRec[key]);
        }
    }
    helper(obj);
    return arr;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

// console.log(collectStrings(obj))
