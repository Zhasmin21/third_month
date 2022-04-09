const numbers = document.getElementById('num')
function addNum (){
    const regex = new RegExp(`\\W`, 'g')
    const div = document.getElementById('div')
    const a = document.createElement('a')
    div.append(a)

    a.innerText = numbers.value.replace(regex, '')
    a.setAttribute('href', `tel:${numbers.value.replace(regex, '')}`)
}
btn.addEventListener('click', addNum)