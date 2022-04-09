// 1
//
// const text = 'Hello, my name is row, but you need to write Row';
//
// const regex = /row/gi

// let result = text.match(regex);
// console.log(result)

// let result = text.replace(regex, '$& Jasmin')
// console.log(result)

//test
// const result = regex.test(text)
// console.log(result)

// // 2
// const regexTwo = new RegExp('шаблон', 'gi')
//
// console.log(regex)
// console.log(regexTwo)
//
// const text = '+996-555-258-741'
// const regex = /\W/gi
// const result = text.replace(regex, '')
//
// console.log(text);
// console.log(result);


// const phoneNumber = document.getElementById('numerPhone')
// const regex = /\W/gi
// const textPhoneNum = phoneNumber.textContent
// const resultNum = textPhoneNum.replace(regex, '')
//
// phoneNumber.setAttribute('href', `tel:${resultNum}`)

// const phoneNumbers = document.querySelectorAll('.numberPhone')
// const regex = /\W/gi
//
// phoneNumbers.forEach(phoneNumber =>{
//     const textPhoneNumber = phoneNumber.textContent;
//     const resultNumber = textPhoneNumber.replace(regex, '')
//
//     phoneNumber.setAttribute('href', `tel:${resultNumber}`)
//     }
// )


// const user = {
//     name: 'Jasmin',
//     surname:'Alieva'
// }
// const regexUser = /[a-z]/g
// console.log(`${user.name.replace(regexUser, '*')}
// ${user.surname.replace(regexUser, '*')}`)
