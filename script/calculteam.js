function convert()
{
    pa=document.getElementById('amount').value;
    rate=document.getElementById('bank').value;
    t=document.getElementById('year').value;
    sia=Number(pa)+(Number(pa*rate*t)/100);
    document.querySelector('span').innerHTML=sia;
    console.log(pa);
    console.log(rate);
    console.log(t);
    console.log(sia);
}                                                                                                                                                                                                                                          