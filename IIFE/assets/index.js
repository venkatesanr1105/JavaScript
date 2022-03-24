(function showTime()
{
    function addZero(number)
    {
        return (number<10)?'0'+number.valueOf() : number.valueOf();
    }
    let time = new Date();
    let format = 'AM';
    let hour = time.getHours();
    if(hour>12)
    {
        hour-=12;
        format = 'PM';
    }
    let minute = time.getMinutes();
    let second = time.getSeconds();
    document.getElementsByClassName('section')[0].textContent = addZero(hour);
    document.getElementsByClassName('section')[1].textContent = addZero(minute);
    document.getElementsByClassName('section')[2].textContent = addZero(second);
    document.getElementsByClassName('section')[3].textContent = format;
    setTimeout(showTime,1000);
})();