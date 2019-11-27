// ALGORITHM TO FIND THE MISSING NUMBER IN AN ARRAY OF NUMBERS
const missingNumber = (arr)=>{
let n = arr.length + 1
sum = 0
expectedSum = n*(n+1)/2

for (let i = 0, len = arr.length; i<len; i++){
    sum += arr[i]
}
return expectedSum - sum
}
missingNumber([5,2,6,1,3])

// LONELY NUMBER
const lonelyNumber = arr =>{
    let obj = {}
    for(let i =0; i<arr.length; i++){
        if(obj[arr[i]]){
            delete obj[arr[i]]
        }
        else{
            obj[arr[i]]=true
        }
    }
    return Object.keys(obj)[0]
} 
lonelyNumber([11,22,22,33,33,33])

// SUBSTRING FINDER
// How to match the substring of a string
const subStringFinder = (str, subStr)=>{
let idx = 0
i = 0
j = 0
len = str.length
subLen = subStr.length

for(i = 0; i<len; i++){
    if(str[i] == subStr[j]){
        j++;
    }
    else{
        j = 0
    }

    // check starting pointn or a match
    if(j == 0){
        idx = i
    }
    else{
        if(j == subLen)
        return idx
    }
}
return - 1
}
subStringFinder('abbcdabbbbbck', 'ab')

// ANAGRAM
const isAnagram = (str1, str2)=>{
    if(str1.length !== str2.length){
        return false
    }
    if(str1 === str2){
        return true
    }
    return[...str1.toLowerCase()].sort().join("") === [...str2.toLowerCase()].sort().join("")
}
isAnagram("dog","goD")