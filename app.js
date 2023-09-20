var numberOfDeletions = 0;

var r ={};

function equalizeArray(arr){

    r = arr.reduce(function(acc, val){

        if(acc[val]){
            acc[val]++;
        }else {
            acc[val] = 1;
        }

        return acc;

    },{});

    var v = Object.values(r);
    var max =Math.max(...v);

    numberOfDeletions = arr.length - max;

    return numberOfDeletions;
}

console.log(equalizeArray([3, 3, 2, 1, 3]));
console.log(equalizeArray([1, 2, 3, 1, 2, 3, 3, 3]));
