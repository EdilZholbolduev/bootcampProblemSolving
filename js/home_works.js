
// homework (part 1)
let input = document.querySelector('#gmail_input')
let btn = document.querySelector('#gmail_button')
let result = document.querySelector('#gmail_result')

// let regExp = /[0-9a-zA-Z.@]/gi

// btn.onclick=()=>{
//    if(input.value.match(regExp) ){
//       alert("Your email was SELECTED")
//       input.value = ""
//    }else{
//       alert('Sorry invalid email')
//       input.value = ""
//    } 
// }

btn.addEventListener('click', ()=>{
   let inputEmail = input.value.trim()

   if(checkEmail(inputEmail)){
      result.innerHTML = 'Successfully added'
      result.style.color = 'green'
      input.value = ""
   }else{
      result.innerHTML ='NOT TRUE!'
      result.style.color ='red'
      input.value = ""
      
   }   

})

function checkEmail(email){
   let regExp = /^[0-9a-zA-Z._%+-]+@gmail\.com$/
   return regExp.test(email)
}
// homework (part 2)
let parentBlock = document.querySelector('.parent_block')
let childBlock = document.querySelector('.child_block')

let blockPlace = 0 
let go = 2

let moves = () =>{
   blockPlace += go 
   childBlock.style.left = `${blockPlace}px`

   if(blockPlace < parentBlock.clientWidth - childBlock.clientWidth){
      requestAnimationFrame(moves)
   }
   
}
moves()
 
