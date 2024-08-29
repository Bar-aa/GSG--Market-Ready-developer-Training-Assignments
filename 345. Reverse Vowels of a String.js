/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    const chars = s.split('');
    let left = 0;
    let right = chars.length - 1;
    while (left < right) {
        if (!vowels.has(chars[left])) {
            left++;
        }
        else if (!vowels.has(chars[right])) {
            right--;
        }
        else {
            let temp = chars[left];
            chars[left]=chars[right]
            chars[right] = temp
            left++;
            right--;
        }
    }
    return chars.join('');
};
