function greeting(greetingHandler,name){
    greetingHandler(name)
    
}
// const number=[4,5,33,66,3]
//  const number1={name:'antu',id:207}
// greeting(number1)
function greetingHandler(name){
    console.log('Good Morning',name)
}
function greetEvening(name){
    console.log('good evening',name)
}
function greetNight(name){
    console.log('good night',name)
}
greeting(greetingHandler,'tom hanks')
greeting(greetingHandler,'tom brady')
greeting(greetingHandler,'tom cruis')
greeting(greetEvening,'tom hardy')
greeting(greetNight,'tom salad')

// function submitBtn(){
//     console.log('clicked the btn')
// }
// document.getElementById('btn-submit').addEventListener('click',submitBtn)