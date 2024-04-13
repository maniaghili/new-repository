

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

'sasxxxss'
