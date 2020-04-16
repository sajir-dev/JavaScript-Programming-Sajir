lcm=(a,b)=>{
  let lcm=a*b
  let div = (a<b?  a : b)
  for (let i=div;i<= div; i--){
    if ((lcm%i===0)&&((lcm/i)%a===0)&&((lcm/i)%b===0)){
      return lcm/i
    }
  }
}

console.log(lcm(9,7))
