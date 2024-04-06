
let par = ['ijciscishdchsidhcsalamishdciusdhciusdhcishudcsicshdcsdcushcishcudiucshduchisuhcisdchiusdchu']
let regex = /sala/

//////////////////////////////////////////////////////////////////////////////////


let wik = new WeakSet()
let salam = {id:3 ,name:'zagh'}
wik.add(salam)
console.log(wik);


maniiii={
    name:'mani',
    age:19,
    job:'developer'
}


maniiii = new Proxy(maniiii,{
get: function(target,praa){
return target[praa]
}

})

console.log(maniiii.name)