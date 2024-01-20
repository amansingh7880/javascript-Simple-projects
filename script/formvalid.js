// function validation()
// {
//   let name=document.querySelector("#nm").value;
//    console.log(name);
//     return false;
// }



document.querySelector("#myform").addEventListener('submit',validation);
    function validation(e){
        name=document.querySelector('#nam').value;
        if(!name){
            document.querySelector('span').innerHTML="Please fill the name";
        }
        passw=document.querySelector('#pwd').value
        if(!passw)
        {

            document.querySelector('.passmsg').innerHTML="please fill the password!";
        }
        contact=document.querySelector("#contact").value;
        if(!contact)
        {
           document.querySelector('.contmsg').innerHTML="please fill in the  contact number!";
        }
        hobb=document.querySelector("#hob").checked;
        console.log(hobb);
        if(!hobb)
        {
            document.querySelector('.check').innerHTML="please tick on checkbox!";
        }
        gende=document.querySelector("#gender").checked;
        console.log(gende);
        if(!gende)
        {
            document.querySelector('.gen').innerHTML="please tick on radiobtn!";
        }
        field=document.querySelector("#msg").value;
        console.log(gende);
        if(!field)
        {
            document.querySelector('.boxmsg').innerHTML="please fill in somthing about your self!";
        }

        e.preventDefault();
    }