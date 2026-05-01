var genderType = "female";

function printGender()
{
    let color = "brown"
    if(genderType.startsWith("female") )
        {
        var age = 30;
        let color = "Pink"
        console.log("Inside if block color is  ",color);
    }
    console.log("Inside the function outside if block age :  ",age);
    console.log("Inside the function outside if block color :  ",color);
}
printGender();
console.log("Outside function :gendertype",genderType );

//chaning global variable 
genderType = "male";
printGender();
console.log("Updated gendertype",genderType );
