const srcUniformity = function(collection){
    if(collection.isArray){
        return [...collection]
    }else{
        return Object.values(collection)
    }
}



function myEach(collection, callback){
    const copyofCollection = srcUniformity(collection)
    for(let i = 0; i < copyofCollection.length; i++){
        callback(copyofCollection[i]);
    }
    return collection;
}

function myMap(collection, callback){
    const copyofCollection = srcUniformity(collection);
    const mappedArray = [];
    for(let i = 0; i < copyofCollection.length; i++){
        mappedArray.push(callback(copyofCollection[i]));
    }
    return mappedArray
}

function myReduce(collection, callback, acc){
const copyofCollection = srcUniformity(collection)
if(!acc){
   acc = copyofCollection[0];
   let copyofCollection = copyofCollection.slice(1);
}
for(let i = 0; i < newItem.length; i++){
acc = callback(copyofCollection[i],copyofCollection,acc)
};
return acc
}

const myFind = function(collection, predicate){
const copyofCollection = srcUniformity(collection);
for(let i = 0; i < copyofCollection.length; i++){
    if(predicate(copyofCollection[i]))
        return copyofCollection[i]
}
        return undefined
}


let myFilter = function(collection, predicate){
    const copyofCollection = srcUniformity(collection);
    let filteredArray = [];
    for(let i = 0; i < copyofCollection.length; i++){
        if(predicate(copyofCollection[i]))
    filteredArray.push(copyofCollection[i]);
}  return filteredArray;
};

let mySize = function(collection){
    const copyofCollection = srcUniformity(collection);
    return copyofCollection.length 
}

let myFirst = function(array, n){
    
        return (n)? array.slice(0, n) : array[0];
    }
 
let myLast = function(array, n){

        return (n)? array.slice(array.length - n , array.length) : array[array.length-1];
}
   
const myKeys = function(object){
        const returnArray = [];
        for(let item in object){
     returnArray.push(item)}
     return returnArray
        
}
const myValues = function(object){
    const returnValArray = [];
    for(let key in object){
 returnValArray.push(object[key])}
 return returnValArray
    
}
