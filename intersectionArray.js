function intersection(arr1,arr2)
{
    let resultarrray= [];
    for (i=0;i<arr1.length;i++)
    {
        if(arr2.includes(arr1[i])){

            if(!resultarrray.includes(arr1[i]))
            {
                resultarrray.push(arr1[i])
            }
        }


    }
    return resultarrray;
}
//No common elements,all elements common and one/two  elements common in the array
console.log("No common elements in the array", intersection([1,2,3],[4,5,6]));
console.log("All elements common in the array", intersection([1,2,3,5],[1,2,3,5]));
console.log("Typical case - intersection of array and removed duplicate",intersection([1,2,3,4],[3,4,5,4]));
