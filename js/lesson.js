// validation of phone number
const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp =/^\+996 \d{3} \d{2}-\d{2}-\d{2}$/

phoneButton.addEventListener('click',()=>{
   if (regExp.test(phoneInput.value)){
      phoneResult.innerHTML = 'True'
      phoneResult.style.color = 'Green'
   }else{
      phoneResult.innerHTML = 'False, try again'
      phoneResult.style.color = 'Red'
   }
})

// Tab slider 
const tabBlock = document.querySelectorAll('.tab_content_block')
const tabItem = document.querySelectorAll('.tab_content_item')
const tabItemParent = document.querySelector('.tab_content_items')

const hideContent = ()=>{
   tabBlock.forEach((item)=>{
      item.style.display = 'none'
   })
   tabItem.forEach((item)=>{
      item.classList.remove('tab_content_item_active')
   })
}

const showContent = (index = 0)=>{
   tabBlock[index].style.display = 'block'
   tabItem[index].classList.add('tab_content_item_active')
}
hideContent()
showContent()

tabItemParent.onclick =(event)=>{
   if(event.target.classList.contains('tab_content_item')){
      tabItem.forEach((item,i)=>{
         if(item === event.target){
            hideContent()
            showContent(i)
         }
      })
   }
}

const autoSlide =(i=0)=>{
   setInterval(() => {
   i++
   if(i>tabBlock.length-1){
      i=0
   }
   hideContent()
   showContent(i)
},3000)
}
autoSlide()

// converter 
const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')

// som.addEventListener('input',()=>{
//    const request = new XMLHttpRequest()
//    request.open('GET','../converter.json')
//    request.setRequestHeader('Content-type','application/json')
//    request.send()

//    request.addEventListener('load',()=>{
//       const data = JSON.parse(request.response)
//       usd.value = (som.value / data.usd).toFixed(2)
//       euro.value = (som.value / data.euro).toFixed(2)
//    })
// })

const converter = (element, target, euro, isTrue)=>{
   element.oninput= async ()=>{
      try{ 
         const response = await fetch('../converter.json')
         const data = await response.json()
         if(isTrue){
            target.value = (element.value / data.usd).toFixed(2)
            euro.value = (element.value / data.euro).toFixed(2)
         }else{
            target.value = (element.value * data.usd).toFixed(2)
         }
         element.value === ''&& (target.value ='')
         element.value === ''&& (euro.value ='')
      }catch(e){
      console.error(e,'error')
   }
   }
}

converter(som,usd,eur,true)
converter(usd,som,eur,false)
converter(eur,som,usd,false)

// fetch request
const fun1 = async ()=>{
   const response = await fetch('https://jsonplaceholder.typicode.com/posts')
   const data = response.json()
   console.log(data)
}
fun1()
// card switcher
const btnPrev = document.querySelector('#btn-prev')
const btnNext = document.querySelector('#btn-next')
const card = document.querySelector('.card')
let count = 0

let cardSwitcher = async ()=>{
const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
const data = await response.json()
   try{
      card.innerHTML=`
      <p>${data.title}</p>
      <p>${data.completed}</p>
      <span>${data.id}</span>
      `
   }catch(error){
      console.error(error,'error')
   }
}
btnNext.onclick=()=>{
   if(count<200){
      count++
   }else{
      count = 1
   }
   // count < 200 ? count++ : count = 1
   cardSwitcher()
}
btnPrev.onclick=()=>{
   if(count>1){
      count--
   }else{
      count = 200
   }
   // count > 1 ? count-- : count = 200
   cardSwitcher()
}


// btnNext.onclick=()=>{
//    count++
//    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
//    .then((response)=>response.json())
//    .then((data)=>{
//       card.innerHTML=`
//       <p>${data.title}</p>
//       <p>${data.completed}</p>
//       <span>${data.id}</span>
//       `
//    })
//    if(count >= 200){
//       count = 0 
//    }else{
//       count++
//    }
   
// }


// Weather API

const input = document.querySelector('.cityName')
const city = document.querySelector('.city')
const temp = document.querySelector('.temp')
const keyWeather = 'e417df62e04d3b1b111abeab19cea714'


const citySearch =()=>{
   input.oninput= async (event)=>{
      
   const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&appid=${keyWeather}`)
   const data = await response.json()
      
      city.innerHTML = data?.name ? data?.name : "We dont have such a city"
      temp.innerHTML = data?.main?.temp ? Math.round(data?.main?.temp - 273) + "&deg;C" : 'WRONG'

}
}

citySearch()

      


