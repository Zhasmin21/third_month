const url = 'https://jsonplaceholder.typicode.com/users'

const name = document.getElementById('name');
const username = document.getElementById('username');
const email = document.getElementById('email');
const send = document.getElementById('send');

function sendUserInfo () {
    const xhr = new XMLHttpRequest();
    if (!name.value.trim() || !username.value.trim() || !email.value.trim()) {
         alert('Заполните пустое поле!')
    }

    else {
        const d = {
            name: name.value,
            username: username.value,
            email: email.value
        }

        xhr.open('POST', url)

        xhr.responseType = 'json'

        xhr.onload = function () {
            console.log(xhr.response)
        }

        xhr.setRequestHeader('Content-Type', 'application/json')

        xhr.send(JSON.stringify(d))
    }
}
send.addEventListener('click', sendUserInfo)