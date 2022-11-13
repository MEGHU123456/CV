const array=[undefined,0,'',2,3,4]
let ans=truthy(array);
console.log(ans);
function truthy(array){
    let count=0;
    for(let index in array)
    {
        if(array[index])
        count++;
        else
        continue;

    }
    return count;
}