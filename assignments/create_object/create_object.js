function CreateObject(arr) {
    // Write your code here

    var outputObject={}
    for (var i=0;i<arr.length;i++){
        if (i%2==0){
            var key=arr[i];
        }
        else{
            var value=arr[i];
        }
        outputObject[key]=value;
    }    
    return outputObject
}

module.exports = CreateObject;
