
// GET - получить <<<<< [server]

// POST - оправить >>>>> [server]

// PUT - полное изменение данных >>>>> [server]

// PATCH - частичная  изменение данных >>>>> [server]

// DELETE - удаление данных >>>> [server]

/// 1

// const url = 'https://jsonplaceholder.typicode.com/us5ers'
// const xhr = new XMLHttpRequest();
//
// xhr.open('GET', url);
//
// xhr.responseType = 'json'
//
// xhr.onerror = function () {
//     console.log(xhr.status)
// }
// xhr.onload = function () {
//     if (xhr.status >= 200 && xhr.status <=204) {
//         alert('ЗАПРОС УСПЕШНО ОБРАБОТАН')
//     }
//     else if (xhr.status >= 400 && xhr.status <= 418) {
//         alert('не найдено ' + xhr.status)
//     }
//     console.log(xhr.status)
//     // console.log(JSON.parse(xhr.response))
// }
//
// xhr.send()

/// 2
const url = 'https://jsonplaceholder.typicode.com/users'

const name = document.getElementById('name');
const username = document.getElementById('username');
const email = document.getElementById('email');
const send = document.getElementById('send');

function sendUserInfo () {
    const xhr = new XMLHttpRequest();
    if (!name.value.trim() || !username.value.trim() || !email.value.trim()) {
         alert('заполните все поля')
    }

    else {
        const data = {
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

        xhr.send(JSON.stringify(data))
    }
}
send.addEventListener('click', sendUserInfo)
