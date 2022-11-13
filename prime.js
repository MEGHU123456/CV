prime(20);
function prime(limit)
{
    for(let i=2;i<=limit;i++)
    {
        flag=0;
        for(let j=2;j<=i/2;j++)
        {
            if(i%j===0)
            flag=1;
        }
        if(flag===0)
        console.log(i+" ");
    }
}