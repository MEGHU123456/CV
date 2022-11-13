//FOR LOOP
// for(let i=0;i<5;i++)

// {
//    // console.log('Hello World '+i);
//     console.log('Hello World' ,i);
// }

//  for(let i=5;i>=0;i--)
//  {
// if(i%2==0)
// {
//     console.log('even',i);
// }
// else{
//     console.log('odd ',i);
// }

//  }   

//WHILE LOOP

// let i=0;
// while(i<=5)
// {
//     if(i%2==0)
//     console.log(i,'even');
//     else
//     console.log(i,'odd');
//     i++;
// }
// console.log('do-while'+'\n');

//DO-WHILE LOOP

//  let i=0;
// do{
//     if(i%2==0)
//     console.log(i,'even');
//     i++;
// }
// while(i<=5);

//FOR-IN

const person={
    name:'Meghu',
    age:30
}
for(let key in person)
{
    console.log(key+" "+person[key]);
}

let colors=['red','blue','green'];
for(let index in colors)
{
    console.log(index,colors[index]);
}