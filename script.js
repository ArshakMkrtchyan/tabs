let names = document.querySelectorAll('.name')
let text = document.querySelectorAll('.text')

for(let i = 0; i < names.length; i++){
    names[i].addEventListener('click', function(){
        for(let j = 0; j < names.length; j++){
            names[i].classList.remove('activeName')
        } names[i].classList.add('activeName')
        for(let i = 0; i < text.length; i++){
            text[i].classList.remove('activeText')
        } text[i].classList.add('activeText')
    })
}