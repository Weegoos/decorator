// var 
let submit_btn = document.querySelector('#submit_btn')
let name_input = document.querySelector('.name_input')
let street_input = document.querySelector('.street_input')
let city_input = document.querySelector('.city_input')

// storage
let name_local = sessionStorage.getItem('name')
let city_local = sessionStorage.getItem('city')
let street_local = sessionStorage.getItem('street')


submit_btn.onclick = function (){
    sessionStorage.setItem('name', name_input.value)
    sessionStorage.setItem('city', city_input.value)
    sessionStorage.setItem('street', street_input.value)
    location.replace(location.href)
}

