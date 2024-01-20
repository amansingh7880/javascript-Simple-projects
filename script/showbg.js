function show()
{
bg=document.getElementById('fruit').value;
switch(bg)
{
    case 'Mango':
        document.querySelector('span').innerHTML="<img src='../images/mango.jpg'>";
        break;
    case 'Banana':
        document.querySelector('span').innerHTML="<img src='../images/banana.jpg'height='200px'width='200px'>";
        break;

    case 'Orange':
        document.querySelector('span').innerHTML="<img src='../images/orange.jpg'>";
        break;
    case 'Carrot':
        document.querySelector('span').innerHTML="<img src='../images/carrot.jpg'>";
        break;
    case 'Guava':
        document.querySelector('span').innerHTML="<img src='../images/lichi.jpg'>";
        break;
    case 'Lichi':
        document.querySelector('span').innerHTML="<img src='../images/lichi.jpg'>";
        break;
    }
}
