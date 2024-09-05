/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    const map = new Map();
    let max=0;
    let ret=0;
   for (let i = 0;i<edges.length;i++){
    for (let j = 0;j<2;j++){
        let node = edges[i][j];
        if (map.has(node)){
            map.set(node,map.get(node)+1);
        }else {
            map.set(node,1);
        }
        if (map.get(node)>max) {
            max= map.get(node);
            ret=node;
        }
    }
   }
   return ret;

};

