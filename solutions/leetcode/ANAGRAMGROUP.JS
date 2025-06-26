var groupAnagrams = function(strs) {
    const resultobject={};
     for (let s of strs) {
            const count = new Array(26).fill(0);
            for (let c of s) {
             count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
             const key = count.join(',');
             if(!resultobject[key])
             {
                resultobject[key] = [];
             }

             resultobject[key].push(s);
     }
return Object.values(resultobject)    
};