// 1
// console.log('start')
//
// const someFunc = () => {
//     console.log('start 1 ')
// }
// const someFuncTwo = () => {
//     console.log('start 2 ')
//     // throw Error()
// }
// setTimeout(function (){
//     console.log('start 3')
// }, 1)
// setTimeout(function (){
//     console.log('start 4')
// }, 2)
//
// someFunc();
// someFuncTwo();
// console.log('end')

// 2
// const SomeFunc = () => {
//      console.log('start 1 ')
// }
// const SomeFuncTwo = () => {
//      console.log('start 2 ')
// }
// const SomeFuncTree = () => {
//      console.log('start 3 ')
// }
//
// const btn1 = document.getElementById('btn1')
// const btn2 = document.getElementById('btn2')
// const btn3 = document.getElementById('btn3')
//
// btn1.addEventListener('click', SomeFunc)
// btn2.addEventListener('click', SomeFuncTwo)
// btn3.addEventListener('click', SomeFuncTree)

// 3 setInterval
const start = document.getElementById('start')
const countPlace = document.getElementById('count')
let count = 0;

start.addEventListener('click', function (){
     // const id = setTimeout(function (){console.log('hello')}, 1000)
     // const id2 = setTimeout(function (){console.log('hello')}, 2000)
     //
     // console.log(id)
     // console.log(id2)

     const id = setInterval(function (){
          count += 1;
          countPlace.textContent = count
               if (count ===3){
               clearInterval(id)
               }
     },1000) 
})


