let buttons= document.querySelectorAll('.btn');
let counter= document.querySelector('#count');
let count=0;
buttons.forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == 'Increase')
        {
            count++;
        }
        if(e.target.innerHTML == 'Decrease')
        {
            count--;
        }
        if(e.target.innerHTML == 'Reset')
        {
            count=0;
        }
        counter.textContent=count;
        if(count>0){
            counter.style.color= 'green';
        }
        else if(count<0){
            counter.style.color= 'red';
        }
        else{
            counter.style.color= 'darkgrey';
        }
    })
})