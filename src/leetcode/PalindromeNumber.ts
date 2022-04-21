function isPalindrome(x: number): boolean {
    let xStr = x.toString()
    let xStrReversed = ''
    for (let char of xStr) {
        xStrReversed = char + xStrReversed
    }
    return xStr === xStrReversed
}

console.log('isPalindrome')
console.log(isPalindrome(212))
console.log(isPalindrome(-212))
console.log(isPalindrome(213))
console.log(isPalindrome(4554))

