const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://dummyjson.com/quotes/random";
const newQuoteBtn = document.getElementById("new-quote");
const twitterBtn = document.getElementById("twitter-btn");

async function getQuote(url){
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data.quote;
    author.innerHTML = data.author;
}

newQuoteBtn.onclick =() => getQuote(api_url);
getQuote(api_url);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "-----by  " + author.innerHTML,"Tweet Window", "width = 600, height = 300");
}

twitterBtn.onclick = tweet;