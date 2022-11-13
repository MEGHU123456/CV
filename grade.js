const marks=[50,80,80]
console.log(grade(marks));
function grade(marks)
{
    let sum=0;
    for(let index in marks)//of for content in for index 
    {
        sum+=marks[index];
    }
    let avg=sum/marks.length;
    console.log(avg);
    if(avg<60)
    return 'F';
    else if(avg<70)
    return 'D';
    else if(avg<80)
    return 'C';
    else if(avg<90)
    return 'B';
    else if(avg<100)
    return 'A';
}