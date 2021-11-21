const button = document.getElementById('button')
const toast = document.getElementById('toast')

const messages = [
    'Message 1',
    'Message 2',
    'Message 3',
    'Message 4',
]


const types =  ['info' , 'success','danger'];

button.addEventListener('click',() => createDiv());


function createDiv(message = null, type = null) {

    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type : getRandomType())

    notif.innerText = message ? message : getRandomMessage()

    toast.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)]
}



