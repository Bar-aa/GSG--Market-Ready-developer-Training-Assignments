/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let sum=0;
    const hash={
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    var result =0;
    for (let i = 0; i < s.length; i++){
        if(hash[s[i]]<hash[s[i+1]]){
            sum+= hash[s[i+1]] - hash[s[i]]
            i++;
        }
        else {
            sum += hash[s[i]];
        }

    }
    return sum;
};
