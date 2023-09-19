const board=document.querySelector('#board')
const colors=['red','blue','yellow','green','purple']
const sqearsNumber=500


for(let i=0;i<sqearsNumber;i++){
    const sqeare=document.createElement('div')
    sqeare.classList.add('sqeare')


sqeare.addEventListener('mouseover',()=> 
setColor(sqeare))

sqeare.addEventListener('mouseleave',()=> 
removeColor(sqeare))


board.append(sqeare)
}


function setColor(element){
    const color=generateRandomColor()
    element.style.backgroundColor=color

    element.style.boxShadow=`0 0 2px ${color},0 0 10px  ${color} `
}

function removeColor(element){
    element.style.backgroundColor='#1d1d1d'
    element.style.boxShadow=`0 0 2px #000`

}


function generateRandomColor() {
    const hexCodes = '0123456789ABVDEF';
    let color = '';
    for (let i = 0; i < 6; i++) {
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
    }
    return '#' + color;
}