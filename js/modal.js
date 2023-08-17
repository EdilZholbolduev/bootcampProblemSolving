const btn = document.querySelector('#btn-get')
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('.modal_close')

btn.onclick=()=>{
   modal.style.display = 'block'
   document.body.style.overflow = 'hidden'
}
setTimeout(()=>{
   modal.style.display = 'block'
   document.body.style.overflow = 'hidden'
}, 10000)
closeModal.onclick=()=>{
   modal.style.display = 'none'
   document.body.style.overflow = ''
}
modal.onclick=(event)=>{
   if (event.target === modal){
      modal.style.display = 'none'
      document.body.style.overflow = ''
   }
}
