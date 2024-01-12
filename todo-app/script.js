'use strict'

const img = document.querySelector('.img')
const body = document.querySelector('body')
const inputT = document.querySelector('.input')
const inputTask = document.querySelector('.input__task')
const taskCon = document.querySelector('.tasks__con')
const console = document.querySelector('.console')
const btnItems = document.querySelectorAll('.btn__items')




// zmiana tła
img.addEventListener('click', function(e){
    const target = e.target
    target.getAttribute('src')==='images/icon-sun.svg' ? target.src = 'images/icon-moon.svg' : target.src = 'images/icon-sun.svg';
    body.classList.toggle('body__light')
    inputT.classList.toggle('radio__box__ligth')
    inputTask.classList.toggle('input__task__ligth')
    taskCon.classList.toggle('tasks__con__ligth')
    console.classList.toggle('console__ligth')
    btnItems.forEach(el=>{
        el.classList.toggle('btn__items__light')
    })
})

const number = document.querySelector('.number')

// dodawanie zadań do listy
let x = 0
function createNewTask(){   
    let htmlElement = `
                <div class="task">
                    <div class="radio__box ">
                        <div class="radio task__list" > <img  class="check" src="images/icon-check.svg" alt=""></div>
                    </div>
                    <div class="text__con">
                        <span>${inputTask.value}</span> <img class="cross" src="images/icon-cross.svg" alt="">
                    </div>
                </div>`
                x++

taskCon.insertAdjacentHTML('afterbegin',htmlElement)
counter()

const radio = document.querySelector('.radio')
const textCon  = document.querySelector('.text__con')
const task= document.querySelector('.task')

const complited = document.querySelector('.complited')
const active = document.querySelector('.active')
const alla  = document.querySelector('.alla')
const clearAll  = document.querySelector('.clear__all')

active.addEventListener('click', function(){
    if(task.classList.contains('task__done')){
            task.style.display = 'none'
        }else{
            task.style.display = 'flex'
        }
})


complited.addEventListener('click', function(){
        if(task.classList.contains('task__done')){
            task.style.display = 'flex'
        }
        else{
            task.style.display = 'none'
        }
})

alla.addEventListener('click', function(){
        if(task.classList.contains('task__done') || !task.classList.contains('task__done')){
            task.style.display = 'flex'
        }
})
clearAll.addEventListener('click', function(){
        if(task.classList.contains('task__done')){
            task.remove();
        }
})


radio.addEventListener('click',function(e){
    radio.classList.toggle('radio__active')
    textCon.classList.toggle('textCon__active')
    task.classList.toggle('task__done')
    if(radio.classList.contains('radio__active')){
        x--
        counter()
    }else{
        x++
        counter()
    }
})

function change(){
    if(console.classList.contains('console__ligth')){
    textCon.classList.add('text__con__ligth')
    task.classList.add('text__con__ligth')

   
}else{
     textCon.classList.remove('text__con__ligth')
     task.classList.remove('text__con__ligth')
}
}

setInterval(el => change(), 1)

}
// wywoływanie funckji
inputTask.addEventListener('keydown' , (e) =>{
    if(e.key === 'Enter'){
        createNewTask()
    }
})


function counter(){
    number.textContent = x
}
