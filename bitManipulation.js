// check the number iseven or not wothoutusing modules

const checkEven=(num)=>{
    if((num &1)==0){
        return true
    }
    else{
       return false
    }
}

console.log(checkEven(234));

//check if the number is power of two

const powerofTwo=(num)=>{
    if(typeof num !=='number'){
        return "not a number"
    }
    return num && (num& (num-1))===0
}

console.log(powerofTwo(16));
