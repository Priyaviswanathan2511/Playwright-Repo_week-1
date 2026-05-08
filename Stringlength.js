//Example 1 split the string and find the length of the last word
 const s = "Hello World" 
 const splitArray = s.split(" ");
 const lastword = splitArray[splitArray.length -1];
 const lastwordlength = lastword.length;
console.log("The last word is",lastword, "with length is ",lastwordlength );

//Example 2 Trim the string and find out lenght of the last word
const s1 = "   fly me   to   the moon  " ;
const trimmed = s1.trim();
 const splitArray1 = trimmed.split(" ");
 const arraylastword = splitArray1[splitArray1.length-1];
 const arraylastwordlength= arraylastword.length;
 console.log("The trimmed last word is",arraylastword,"with lenght is",arraylastwordlength);
 
