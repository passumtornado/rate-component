let radioBtns = document.querySelectorAll('input[name="rating"]');
let btnSubmit = document.getElementById('submit');
let result = document.querySelector('.result')
let cardShow = document.querySelector('.card')
let cardThankyou = document.querySelector('.card-thankyou')

let getSelected=()=>{
  let selected = document.querySelector('input[name="rating"]:checked').value
  console.log(selected)
  result.textContent = `You have selected ${selected} out of 5`
}
radioBtns.forEach(btn=>{
    btn.addEventListener('change',getSelected)
})

btnSubmit.addEventListener('click',()=>{
    cardShow.classList.remove('active');
    cardThankyou.classList.add('active')
    getSelected()
})