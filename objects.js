// let name='meghu';
// let age=21;
// //the above 2 lines can be codes as object literal syntax like this.
// let person={
//     name:'meghu',
//     age:21
// }
// console.log(person);
// person.name='sai';
// person['name']='teju';
// console.log(person.name);

// const circle=
// {
//     radius:1,
//     location:{
//         x:1,
//         y:1
//     },
//     isvisible:true,
//     draw:function draw(){
//         console.log('draw')
//     }
// }
// //circle.draw();
// function createcircle(){
//     return{
//     radius:1,
//     location:{
//         x:1,
//         y:1
//     },
//     isvisible:true,
//     draw:function draw(){
//         console.log('draw')
//     }
// }
// }
// console.log(createcircle());
//factory function
// function createcircle(radius){
//     return{
//         radius,
//         draw(){
//         console.log('draw');
//     }
// }
// }

// const circle1=createcircle(1);
// console.log(circle1);
// const circle2=createcircle(2);
// console.log(circle2);

function createcircle(radius){
    return{
        radius,
        draw(){
        console.log('draw');
    }
}
}
const circle1=createcircle(1);
console.log(circle1);

 function circle(radius){
    this.radius=radius;
    this.draw=function draw(){
        console.log('draw');
    }
 }
 const cir=circle(1);
console.log(cir);
 delete circle.draw;