
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

// homework (part 2)
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
let parentBlock = document.querySelector('.parent_block')
let childBlock = document.querySelector('.child_block')


let positionX = 0
let positionY = 0

let moves =()=>{
   if(positionX < 447 && positionY === 0){
      positionX++
      childBlock.style.left = `${positionX}px`
      setTimeout(moves, 2)
   }else if(positionX >= 447 && positionY < 447){
      positionY++
      childBlock.style.top =`${positionY}px`
      setTimeout(moves, 2)
   }else if (positionX >= 0 && positionY >= 447){
      positionX--
      childBlock.style.left =`${positionX}px`
      setTimeout(moves, 2)
   }else if(positionX <= 447 && positionY >0){
      positionY--
      childBlock.style.top =`${positionY}px`
      setTimeout(moves, 2)
   }

}
moves()
// HOMEWORK 2

let start = document.querySelector('#start')
let stop = document.querySelector('#stop')
let reset = document.querySelector('#reset')
let resume = document.querySelector('#resume')
let seconds = document.querySelector('#seconds')

let multyFunctions

start.addEventListener('click',()=>{
   count = 0
   multyFunctions = setInterval(()=>{
      count++
      seconds.innerHTML = count 
   },1000)

   start.disabled = true
   stop.disabled = false
})

stop.addEventListener('click',()=>{
   clearInterval(multyFunctions)
   start.disabled = false
   stop.disabled = true
   resume.disabled = false
})

reset.addEventListener('click', ()=>{
   location.reload()
})

resume.addEventListener('click',()=>{
   multyFunctions = setInterval(() => {
      count++
      seconds.innerHTML = count
   }, 1000)

   start.disabled = true
   stop.disabled = false
   resume.disabled = true
})
// working with JSON file (practive json)
const btnJson = document.querySelector('#btn-json')
// part one
btnJson.addEventListener('click', async ()=>{
   const response = await fetch ('../data.json')
   const data = await response.json()
   try{
      
      document.querySelector('.my-name').innerHTML = data.name
      document.querySelector('.my-age').innerHTML = data.age
   }catch{
      console.error('error')
   }
   
})

// people (json)
const btnPeople = document.querySelector('.btn-json')
const peopleContainer = document.querySelector('#people')

const fetchData = async () => {
  try {
    const response = await fetch('../people.json')
    const data = await response.json()

    if (btnPeople) {
      data.forEach((person) => {
        const div = document.createElement('div')
        div.classList.add('card')
        peopleContainer.appendChild(div)
        div.innerHTML = `
          <p>Worker:</p>
          <h3>${person.name}</h3>
          <h3>${person.age}</h3>
        `
      })

      btnPeople.removeEventListener('click', fetchData)
    }
  } catch (error) {
    console.error(error, 'error')
  }
}

btnPeople.addEventListener('click', fetchData)
