const btnEl= document.getElementById("btn");
const quoteEl= document.getElementById("quote");
const authorEl= document.getElementById("author");

const apiURL='https://api.quotable.io/random';

async function getQuote(){

try{ 
    btn.innerText="Loading...";
    btn.disabled=true;
    quoteEl.innerText= "Generating...";
    authorEl.innerText= "Generating...";
    const response= await fetch(apiURL);
    const data=  await response.json();
    const quoteContent=data.content;
    const quoteAuthor=data.author;
quoteEl.innerText=quoteContent;
authorEl.innerText='~ ' + quoteAuthor;
}catch (error){
    console.log(error);
    quoteE1.innerText='Error, try again later';
    authorEl.innerText='Error, try again later';
    btn.innerText="Get a quote";
btn.disabled=false;
}


    const response= await fetch(apiURL);
    const data=  await response.json();
    const quoteContent=data.content;
    const quoteAuthor=data.author;
quoteEl.innerText=quoteContent;
authorEl.innerText='~ ' + quoteAuthor;
btn.innerText="Get a quote";
btn.disabled=false;
console.log(data);
}

getQuote()


btnEl.addEventListener("click", getQuote)