const obj = {
    name: 'Jasmin',
    surname: 'Alieva',
    age: 18,
}

const name = JSON.stringify(obj)
console.log(name)
localStorage.setItem('person', name)
const person = localStorage.getItem('person')
const result = JSON.parse(person)
console.log(result)

function deleteAll () {
    localStorage.clear()
}

function del() {
    localStorage.removeItem(`${document.getElementById('input1').value}`, name)
}

function add (){
    localStorage.setItem(`${document.getElementById('input2').value}`, name)
}

document.getElementById('deleteAll').addEventListener('click', deleteAll)
document.getElementById('add').addEventListener('click', add)
document.getElementById('del').addEventListener('click', del)