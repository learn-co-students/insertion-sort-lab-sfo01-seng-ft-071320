function findMinAndRemove(array){
    let min = array[0] 
    // we want our min number to be the smallest num in array
    let minIndex = 0 
    // we eventually want there to be a way to get that min number to splice it
    for(let i = 0; i < array.length; i++){
        if(array[i] < min){
            min = array[i]
            minIndex = i
        }
    }
    array.splice(minIndex, 1)
    return min
}

function selectionSort(array){
    let newMin; 
    let sorted = []
    while(array.length != 0){
        newMin = findMinAndRemove(array)
         //this function has an already sorted array, and assign it to our newMin variable

         //then we can push all the sorted elements to our sorted variable
         sorted.push(newMin)
    }
    return sorted 
    //return our new sorted array
    console.log(sorted)
}
