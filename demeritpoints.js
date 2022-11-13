let points=0;
function checkspeed(speed)
{
const speedlimit=70;
const kms=5;
if(speed<=speedlimit+kms)
console.log('Ok');
else{
points+=Math.floor((speed-speedlimit)/kms);
if(points>=12)
console.log('suspend');
else
console.log(points);
}
}
checkspeed(71);