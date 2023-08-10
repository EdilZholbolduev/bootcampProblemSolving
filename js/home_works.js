let input = document.querySelector('#gmail_input')
let btn = document.querySelector('#gmail_button')

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
      alert('Successful')
   }else{
      alert('Not true')
   }   

})

function checkEmail(email){
   let regExp = /^[0-9a-zA-Z._%+-]+@gmail\.com$/
   return regExp.test(email)
}


