// ALGORITHM TO FIND THE HEIGHT OF THE UTOPIAN TREE AFTER N GROWTH CYCLES


// let height = document.querySelector('.utopian').value
// let paragraph = document.querySelector('.result').innerHTML

const getHeight = (cycles) =>{
    let currentHeight = 1
    for (let i=1; i<=cycles; i++){
        if(currentHeight % 2 !== 0){
            currentHeight*=2
        }
        else{
            currentHeight+=1
        }
    }
    return currentHeight
}
getHeight(20)