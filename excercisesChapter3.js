function minimum(a, b) {
    if (a < b ) {
        return a;
    } else {
        return b;
    }
}

function evenOrOdd(num) {
    if (num === 0) {
        return "even";
    }
    if (num === 1 || num === -1) {
        return "odd";
    } else {
        if (num < 0) {
            return evenOrOdd(num + 2);
        } else {
            return evenOrOdd(num - 2);
        }      
    }
}

function countingBs(word) {
    return countingCharUppercaseInWord('B', word);
}

function countingCharUppercaseInWord(char, word) {
    let uppercases = 0;
    for (let i = 0; i < word.length; i++) {
        let currentChar = word.charAt(i);
        if (currentChar == char) {
            uppercases++;
        }
    }
    return uppercases;
}

console.log(countingCharUppercaseInWord('B', "BaBy Blue"));
console.log(countingBs("Boomer"));
