// ES6 FEATURES
const digits = [0,1,2,3,4,5,6,7,8,9]

for (let digit of digits){
    console.log(digit)

} 
// spread operator
const myPackage = ['cheese', 'eggs', 'milk', 'bread']
console.log(...myPackage)

printPackageContents('cheese','eggs', 'milk', 'bread');
function printPackageContents(...items){
    for (const item of items){
        console.log(item)
    }
}
// classes
// promises makes it easier to write asynchronous codes and also easier to debug(do now and notify when it's done)
// 
// polyfill
// sets and weaksets
// maps and weakmaps