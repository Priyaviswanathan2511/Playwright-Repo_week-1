import { chromium,firefox, test } from "@playwright/test";

test("To launch two separate browser", async () => { 

    //To launch edge browser
const browserInstanceEdge = await chromium.launch({ headless: false, channel:
"chrome" });

const browserContext1 = await browserInstanceEdge.newContext();

const edgepage = await browserContext1.newPage(); 

await edgepage.goto("https://www.redbus.in");

//get the page title and URL
const redbuspageTitle = await edgepage.title();
const redbusURL =  await edgepage.url();
console.log('Redbus Title :', redbuspageTitle);
console.log('Redbus URL :', redbusURL);

//To lauch Firefox browser
const browserInstancefirefox = await firefox.launch({ headless: false });

const browserContext2 = await browserInstancefirefox.newContext();

const firefoxpage = await browserContext2.newPage(); 

await firefoxpage.goto("https://www.flipkart.com");

//get the page title and URL
const flipcartpageTitle = await firefoxpage.title();
const flipcartURL =  await firefoxpage.url();
console.log('flipkart Title :', flipcartpageTitle);
console.log('flipkart URL :', flipcartURL);

});