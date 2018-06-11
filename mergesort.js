

function split(wholeArray){
    const length = wholeArray.length;
    if (length == 0){
        return wholeArray;
    }
    else if (length == 1){
        return wholeArray[0];
    }
    else {
        firstHalf = wholeArray.slice(0, Math.floor(length/2));
        secondHalf = wholeArray.slice(Math.floor(length/2));
    }    
    return [firstHalf, secondHalf];
}

function merge(left, right){
    let newArray = [];
    let i = 0, j = 0;
    
    while (i < left.length && j < right.length){
        console.log(newArray);
        if (left[i] <= right[j]){
            newArray.push(left[i]);
            i++;
        }
        else {
            newArray.push(right[j]);
            j++;
        }        
    }    
    return (i === left.length) 
        ? [...newArray, ...right.slice(j)]
        : [...newArray, ...left.slice(i)];

}