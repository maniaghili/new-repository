/*

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
*/
let arr = [20,10,23,24,15,63]

let arrr = arr.reduce((aval,dovo)=>{
     console.log(aval,dovo)
       return aval + dovo
    })
console.log(arrr)