function  isAnagram(string1,string2)
{
let s1= string1.replaceAll(" ","").toLowerCase();
let s2= string2.replaceAll(" ","").toLowerCase();
console.log(s1,s2);
s1= s1.split("").sort().join("");
s2= s2.split("").sort().join("");
console.log(s1,s2);
return s1 === s2;
}
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));
