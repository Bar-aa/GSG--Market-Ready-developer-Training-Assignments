/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    /*var pre="";
    var x=0;
    var all=1;
    for (let j=0;j<strs[0].length;j++){
        const char = strs[0][j];
        for (let i=1;i<strs.length;i++){
            if(strs[i][j]!=char){
                 x=1;
                break;
            }
            else {
                all++;
            }
            if (all==strs.length) {
             pre=pre+char;
             all=0;
            }
        }
        
        if (x==1) break;
    }
    
    return pre;*/
    let stack=[]
    for (let i=0;i<strs[0].length;i++){
        stack.push(strs[0][i])
    }
    
    for(let j=1;j<strs.length;j++){
        for(let k=0;k<stack.length;k++){
            if (strs[j][k]!=stack[k]){
                let to = stack.length
                for (let x=k ; x<to ; x++){
                    stack.pop()
                }
            }
        }
    }
    return stack.join("");
};
