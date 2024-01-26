const workOnePopUp= document.getElementById('workOnePopUp')
const image= document.getElementById('image')
const workOne= document.getElementById('workOne')
workOne.addEventListener('click',()=>{
    workOnePopUp.classList.add('initial')
    setTimeout(()=>{
        workOnePopUp.classList.remove('initial') 
        image.style.zIndex='-22'
    },5000)
})
workOne.addEventListener('mouseleave',()=>{
    workOnePopUp.classList.remove('initial')
})

const workTwoPopUp= document.getElementById('workTwoPopUp')
const workTwo= document.getElementById('workTwo')
workTwo.addEventListener('click',()=>{
    workTwoPopUp.classList.add('initial')
    image.style.zIndex='-22'
    setTimeout(()=>{
        workTwoPopUp.classList.remove('initial') 
    },5000)
})
workTwo.addEventListener('mouseleave',()=>{
    workTwoPopUp.classList.remove('initial')
})

const workThreePopUp= document.getElementById('workThreePopUp')
const workThree= document.getElementById('workThree')
workThree.addEventListener('click',()=>{
    workThreePopUp.classList.add('initial')
    image.style.zIndex='-22'
    setTimeout(()=>{
        workThreePopUp.classList.remove('initial') 
    },5000)
})
workThree.addEventListener('mouseleave',()=>{
    workThreePopUp.classList.remove('initial')
})
const span= document.getElementById('span')
document.getElementById('btn').addEventListener('click',()=>{
    span.classList.replace('span','initialerror')
    setTimeout(()=>{
        span.classList.replace('initialerror','span') 
    },5000)
})