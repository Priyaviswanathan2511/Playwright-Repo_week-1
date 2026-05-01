const browserName = "Chrome";//global   

function getBrowserName()
{
    if (browserName==="Chrome")
    {
        //var browserName = "Firefox"
        let browserName = "Firefox"
      console.log("Inside block of let", browserName);  
       
    }
console.log("Inside function of let", browserName);
}
getBrowserName();
console.log("Outside function :",browserName );