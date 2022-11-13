const readpersmission=3;
const writepermission=4;
const permission=1;

let mypermission=0;
mypermission=mypermission|readpersmission|writepermission|permission;
console.log(mypermission);