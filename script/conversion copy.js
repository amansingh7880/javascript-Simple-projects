function convert()
{
range=document.getElementById('rang').value;
console.log(range);
rangevalue=document.getElementById('value').value;
console.log(rangevalue);
if(rangevalue==rangevalue)
{
calculate=Number(range)*Number(rangevalue);
console.log(calculate);
document.getElementById('cavalue').value=calculate;
}
if(rang==range)
{
 km=Number(rang)/1000;
 console.log(km);
}
}