//// first task
const btn = document.querySelector('button')
const container = document.querySelector('.container')
function getPosts (cb) {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.responseText)
        cb(response)
    });
    xhr.send()
}
function renderPosts(response) {
   const fragment = document.createDocumentFragment()
        response.forEach(post => {
            const card = document.createElement('div')
            card.classList.add('card')
            const cardBody = document.createElement('div')
            cardBody.classList.add('card_body')
            const id = document.createElement('h4')
            id.classList.add('card_id')
            id.textContent = post.id
            const name = document.createElement('h5')
            name.classList.add('card_name')
            name.textContent = post.name
            const username = document.createElement('h5')
            username.classList.add('card_username')
            username.textContent = post.username
            const email = document.createElement('p')
            email.classList.add('card_text')
            email.textContent = post.email
            cardBody.appendChild(id)
            cardBody.appendChild(name)
            cardBody.appendChild(username)
            cardBody.appendChild(email)
            card.appendChild(cardBody)
            fragment.appendChild(card)
        });
        container.appendChild(fragment)
}
btn.addEventListener('click', e => {
    getPosts(renderPosts);
})
