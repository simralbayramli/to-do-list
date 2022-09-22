const addToDoButton=document.getElementById('addToDo')
const toDoContainer=document.getElementById('toDoContainer')
const inputText=document.getElementById('inputText')
const clearToDo=document.getElementById('clearToDo')
addToDoButton.addEventListener('click', click)


function click(e){
    e.preventDefault()
    const paragraf=document.createElement('p');
    paragraf.innerHTML=inputText.value;
    
    paragraf.classList.add('text')
    console.log(paragraf)

    toDoContainer.appendChild(paragraf);
    inputText.value=''
    paragraf.addEventListener('click',function(){
        paragraf.style.textDecoration='line-through'
        paragraf.style.opacity=0.5

    })
    paragraf.addEventListener('dblclick',function(){
        toDoContainer.removeChild(paragraf)
    })

    clearToDo.addEventListener('click',function(){
        paragraf.remove()
    })

    
}


    
    
