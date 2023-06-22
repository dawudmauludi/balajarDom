document.title = 'aku'
const body = document.body 
const btn1 = document.getElementById('btn1')
const btn = document.querySelector('.btn')


const defaultText = 'klik1'
btn1.textContent = defaultText
const p = document.getElementById(p);

const aku = 'dawud'
btn.textContent = aku


btn1.style.border = ' none'
btn1.style.padding = '5px'
btn1.style.fontSize = '27px'
btn1.style.backgroundColor = ' blue'
 


function clikButton(){
    btn1.style.background = 'tomato'
    const newText = document.createElement ('p')
    newText.textContent = 'HALLO BUNG!'    
    body.append(newText)
}

function ubahText (){
    btn1.textContent = 'hahahah'
}

function oriText () {
    btn1.textContent = defaultText
}


const text = document.createElement('a')
function addText(){
    text.innerHTML = 'dawud'
    text.style.color = 'black'
    body.append(text)
}

function removeText(){
    text.innerHTML = 'dawud'
     text.style.color = 'red'
    body.append(text)
}


