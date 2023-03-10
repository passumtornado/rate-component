let btns = document.querySelectorAll('.btn');
let btnSubmit = document.getElementById('submit');
let result = document.querySelector('.result')
let cardShow = document.querySelector('.card')
let cardThankyou = document.querySelector('.card-thankyou')

btns.forEach(btn=>{
    btn.addEventListener('click',()=>{
       let selected = btn.value
       result.textContent = `You have selected ${selected} out of 5`
    })
    
})


btnSubmit.addEventListener('click',()=>{
    cardShow.classList.remove('active');
    cardThankyou.classList.add('active')
})