// Minimum
const min = (a, b) => a < b ? a : b;

console.log(min(3, 5));
console.log(min(3, -5));


// Recursion
function isEven(num) {
    if (num < 0)
        return recIsEven(-num);
    return recIsEven(num);
}

function recIsEven(num) {
    if (num == 0)
        return true;
    else if (num == 1) {
        return false;
    }
    return isEven(num - 2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

// Bean counting
function countBs(str) {
    return countChar(str, 'B');
}

function countChar(str, char) {
    Cs = 0;
    for (i = 0; i < str.length; i++) {
        if (str[i] === char)
            Cs++;
    }
    return Cs;
}

testStr = "Bye bye little Bird I will not Bye bye you for Bye.";
console.log(countBs(testStr));