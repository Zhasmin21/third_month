// const one = () => {
//      console.log('HELLO!')
// }
// setTimeout(one,1000)
//
// const two = () => {
//      console.log('BONJOUR!')
// }
// setTimeout(two,2000)
//
// const tree = () => {
//      console.log('MERHABA!')
// }
// setTimeout(tree,3000)
// const btn1 = document.getElementById('btn1')
// const btn2 = document.getElementById('btn2')
// const btn3 = document.getElementById('btn3')
//
// btn1.addEventListener('click', one)
// btn2.addEventListener('click', two)
// btn3.addEventListener('click', tree)


const One = document.getElementById('btn1')
One.addEventListener('click', function (){
    const first = setTimeout(function (){
        console.log('HELLO!')
    },1000)
})

const Two = document.getElementById('btn2')
Two.addEventListener('click', function (){
    const second = setTimeout(function (){
        console.log('BONJOUR!')
    },2000)
})

const tree = document.getElementById('btn3')
tree.addEventListener('click', function (){
    const third = setTimeout(function (){
        console.log('MERHABA!')
    },1000)
})