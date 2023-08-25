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
   element.oninput=()=>{
      const request = new XMLHttpRequest()
      request.open('GET','../converter.json')
      request.setRequestHeader('Content-type','application/json')
      request.send()

      request.onload=()=>{
         const data = JSON.parse(request.response)
         if(isTrue){
            target.value = (element.value / data.usd).toFixed(2)
            euro.value = (element.value / data.euro).toFixed(2)
         }else{
            target.value = (element.value * data.usd).toFixed(2)
         }
         element.value === ''&& (target.value ='')
         element.value === ''&& (euro.value ='')
      }
   }
}
converter(som,usd,eur,true)
converter(usd,som,eur,false)
converter(eur,som,usd,false)


      


