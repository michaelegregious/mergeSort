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
<<<<<<< HEAD
        }        
    }    
    return (i === left.length)
        ? newArray.concat(right.slice(j))
        : newArray.concat(left.slice(i));
=======
        }
    }
    if (i === left.length){
      return newArray.concat(right.slice(j));
    }
    else{
      return newArray.concat(left.slice(i));
    }
}


function mergeSort(array){
  //call split, then push return into a new newArray until each element has own array
  let newArray = [];
  if (array[0] > 1){
    return split(array) //return an array if 2 items
  }
  else{ //base case
    return newArray.push(array)
  }
  //call split
}

//[1, 7, 9, 3, 67, 11] ===> [[1],[7],[9],[3],[67],[11]] ==> [[1,7], [3,9], [11,67]] ==> [[1,3,7,9], [11,67]]
>>>>>>> 3d1cf0bd113e3b4c6c2eee647eea1d178905ff59

mergeSort([1, 7, 9, 3, 67, 11]);
