/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let stack=[];
    
    for (let i=0;i<s.length;i++){
        if(stack.length>0&&stack[stack.length-1]==s[i]) {
            stack.pop();  
        } else {
            stack.push(s[i]);
        }
    }
    return stack.join('');  
    /*string s2="";
    for (let i=0;i<s.length;i++){
        if (s[i]!=s[i+1]){
            s2+=s[i];
        }
    }
    return s2;*/
};
