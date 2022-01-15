const o = document.querySelector('.o')
const oi = document.querySelector('.overtures-img')
const pp = document.querySelector('.pp')
const ppi = document.querySelector('.pp-img')
const npa = document.querySelector('.npa')
const npai = document.querySelector('.npa-img')

o.addEventListener('mouseenter', function () {
    oi.style.opacity = 1; 
})

o.addEventListener('mouseout', function () {
    oi.style.opacity = 0; 
})

npa.addEventListener('mouseenter', function () {
    npai.style.opacity = 1; 
})

npa.addEventListener('mouseout', function () {
    npai.style.opacity = 0; 
})

pp.addEventListener('mouseenter', function () {
    ppi.style.opacity = 1; 
})

pp.addEventListener('mouseout', function () {
    ppi.style.opacity = 0; 
})
