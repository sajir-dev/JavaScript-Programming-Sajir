const noOfDecoding = (num) =>{
    let count = 1;
    for (i = 1; i<num.toString().length; i++){
        if (parseInt(num.toString()[i]+num.toString()[i-1])>=10 && parseInt(num.toString()[i]+num.toString()[i-1])<=26){
            count++
        }
    }
return count
}

console.log(noOfDecoding(1111))