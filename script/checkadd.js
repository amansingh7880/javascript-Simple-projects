function address()
{
   a=document.querySelector("#show").checked;
   console.log(a);
   peradd=document.querySelector("#pa").value;
   if(a==true)
   {
    document.querySelector("#ca").value=peradd;
   }
   else
   {
    document.querySelector("#pa").value="";
   }
}