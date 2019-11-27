const subArraySum = (arr, n)=>{
    let obj = {};
    let currentSum = 0;

    for(let i = 0; i < arr.length; i++){
        currentSum += arr[i];

        if(currentSum == n){
            return [true]
        }
        obj[currentSum] = i

        if(obj.hasOwnProperty(currentSum - n)){
            return[true, obj[currentSum - n] + 1, i];
        }
        console.log(obj)
    }
    return false
} 
subArraySum([1,4,20,3,10,5], 13)

// CODE TO RETURN THE LARGEST NUMBER IN AN ARRAY

// ALGORITHM TO REVERSE A STRING IN PLACE
const reverseInPlace = (str) =>{
    return str.split('').reverse().join('').split('').reverse().join('');
  }
  
  reverseInPlace('I am the good boy');