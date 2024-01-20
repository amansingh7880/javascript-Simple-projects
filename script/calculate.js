function add(){
    first=document.getElementById('a').value;
    second=document.getElementById('b').value;
    sum=Number(first)*Number(second);
    console.log(sum);
    document.querySelector('span').innerText=sum;
}
function sub(){
    first=document.getElementById('a').value;
    second=document.getElementById('b').value;
    subtract=Number(first)-Number(second);
    console.log(subtract);
    document.querySelector('span').innerText=subtract;
}