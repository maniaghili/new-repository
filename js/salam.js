let qoer = document.querySelector('input')
qoer.addEventListener('click', ()=>{  
      fetch('https://randomuser.me/api/')
      .then((te)=>{
        return te.json()
      }).then((te)=>{console.log(te)})



})
