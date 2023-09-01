const middleDiv = document.querySelector('.main-middle')

const fetchAsync = async ()=>{
   try{

      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
      const data = await response.json()
      data.forEach((id)=>{        
         const div = document.createElement('div')
         div.classList.add('id')
         middleDiv.append(div)
         div.innerHTML=`
         <img src="../image/regooku.webp">
         <h5>${id.title}</h5>
         <p>${id.body}</p>
         `
      })
   }catch (e){
      console.error(e,'error')
   }
}
fetchAsync()