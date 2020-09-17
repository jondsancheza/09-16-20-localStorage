const dark = document.getElementById('dark')
const light = document.getElementById('light')

dark.addEventListener('click', ()=>{
    document.getElementById('container').classList.add('dark')
    localStorage.setItem('Tema','dark')
})

light.addEventListener('click', ()=>{
    document.getElementById('container').classList.remove('dark')
    localStorage.setItem('Tema','light')
})

if (localStorage.getItem('Tema')=='dark') {
    document.getElementById('container').classList.add('dark')
} else {
    document.getElementById('container').classList.remove('dark')
}

