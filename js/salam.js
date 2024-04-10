let qoer = document.querySelector('input')
qoer.addEventListener('click', ()=>{  
      fetch('https://randomuser.me/api/', {method:'post'})
      .then((te)=>{
        return te.json()
      }).then((kir)=>{console.log(kir)})



})
