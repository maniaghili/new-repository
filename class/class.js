

class person{
     
      constructor(name,age,job){
     this.namee = name
     this.agee = age
     this.jobe = job
    
      } 

      run = ()=>{
        console.log(`${this.namee}کارشو شروع کرد`)
      }

}


class kerson extends person{
    constructor(kir,name,age,job){
        super(name,age,job)
       this.kir = kir
        console.log(kir,name,age,job)
    }


}
let kkk = new kerson('kir','jaa',77,'web')

'sasxsdssdcdsxxssss'


let bat = document.querySelector('button')

bat.addEventListener('click', ()=>{

window.navigator.clipboard.readText().then((data)=>{console.log(data)})
})

let arr = [20,10,23,24,15,63]

let arrr = arr.reduce((aval,dovo)=>{
     console.log(aval,dovo)
       return aval + dovo
    })
console.log(arrr)//logggg


let template = document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href="cla.css">
<h1>temfani</h1>`


class uzer extends HTMLElement{
constructor(){
  super()
  console.log('کاستوم المنت ساخته شد',this)


  this.attachShadow({mode:'open'})
  this.shadowRoot.appendChild(template.content.cloneNode(true))
}
}

window.customElements.define('uzr-elem',uzer)



let mani = { name : 'ali', age : 24 , job : 'developer' }

let pra = new Proxy(mani,{ 
 get:function(tar , por){console.log('مرور شد')
    return  por
} 
})
console.log(pra.job);

let mشani = new Promise((dor,gal)=>{

  let m = 2
  if(m=2){dor()}else{gal()}
})
mani.then(console.log('kkkkkk'))

