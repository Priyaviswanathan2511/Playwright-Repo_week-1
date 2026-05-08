//Finction declaration
function userProfile(name)
{
console.log("Hello," +name + "!");
}
userProfile("Priya");

//Arrow function
const double = (num) => {
    return num *2;
};
console.log(double(5));

//Anonymous Function  
setTimeout (function(){
console.log("This message is delayed by 2 seconds");

},2000);

//Callback Function  
function getUserData(callback){
    setTimeout (function(){
    callback();

},3000);
}
function logmessage(){
    console.log("“Call Back Function");
}
getUserData(logmessage);