AOS.init();
const quotes=document.getElementById("quotes")
const author=document.getElementById("author")
const newQ=document.getElementById("newQ")
let realData=" "
let quotesData=" "
 const tweetNow=()=>{
    let tweetPost=`https://twitter.com/intent/tweet?text=${quotesData.text} ${quotesData.author}`;
    window.open(tweetPost)
 }

const tweetMe=document.getElementById("tweetMe")
const getNewQuotes=()=>{
    let rnum=Math.floor(Math.random()*100);
    quotesData=realData[rnum]
   // console.log(realData[rnum].author);
    quotes.innerText=`${quotesData.text}`
    quotesData.author==null ? 
    author.innerText=("UnKnown")
    :author.innerText=`${quotesData.author}`

}

const getQuotes=async()=>{
    const api="https://type.fit/api/quotes";
    try {
        let data=await fetch(api);
        realData= await data.json();
        getNewQuotes();

        //console.log(realData.length);
    } catch (error) {
        
    }
};
tweetMe.addEventListener('click',tweetNow)
newQ.addEventListener('click',getNewQuotes)
getQuotes();