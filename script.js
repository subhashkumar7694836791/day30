
const textval=document.getElementById('text')
const speedval=document.getElementById('speed')
const text='we love web developing programming'
let idx=1
let speed=300/speedval.value
writeText()
function writeText(){
    textval.innerHTML=text.slice(0,idx)
    idx++
    if(idx > text.length){
        idx=1
    }
    setTimeout(writeText,speed)
}
speedval.addEventListener('input',(e)=> speed=300 /e.target.value)