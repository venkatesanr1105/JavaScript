let color = document.querySelector('select');
let box = document.getElementsByClassName('color');
color.onchange = ()=>{
    if(color.value=='Red')
    {
        box[0].style.backgroundColor = 'red';
        box[1].style.backgroundColor = '';
        box[2].style.backgroundColor = '';
    }
    else if(color.value == 'Orange')
    {
        box[0].style.backgroundColor = '';
        box[1].style.backgroundColor = 'orange';
        box[2].style.backgroundColor = '';
    }
    else if(color.value == 'Green')
    {
        box[0].style.backgroundColor = '';
        box[1].style.backgroundColor = '';
        box[2].style.backgroundColor = 'green';
    }
    else
    {
        box[0].style.backgroundColor = '';
        box[1].style.backgroundColor = '';
        box[2].style.backgroundColor = '';
    }
};