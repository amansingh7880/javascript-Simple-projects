function showpwd()
{
    a=document.getElementById('show').checked;
    console.log(a);
    if(a==true)
    {
     document.querySelector('#pwd').type="text";   
    }
    else{
        document.getElementById('pwd').type="password";
    }

}