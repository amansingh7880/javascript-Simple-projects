function time()
{
    D= new Date();
    H=D.getHours();
    M=D.getMinutes();
    S=D.getSeconds();
    t=H+":"+M+":"+S
    console.log(t);
    day=""
    console.log(t);
    if(H<12)
    {
        day="AM";
    }
    else
    {
        day="PM";
    }
    H=(H%12);
    T=H+":"+M+":"+S+day;

    document.querySelector('span').innerHTML=T;

}