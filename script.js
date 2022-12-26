let meme =document.getElementById('meme')
let title =document.getElementById('title')
let getMemeBtn=document.getElementById('get-meme-btn')
//API
let url ="https://meme-api.com/gimme/";
//Subreddist you want memes from
let subreddits = ['catmemes','wholesomememes','dogmemes','me_irl','memes']

//function to get random meme
let getMeme=()=>{
    let randomSubreddit=subreddits[Math.floor(Math.random() * subreddits.length)]
    // console.log(randomSubreddit)

    //fetch data from api
    fetch(url+randomSubreddit)
    .then(resp=>resp.json())
    .then(data=>{
        // console.log(data)
        let memeImg= new Image();
        memeImg.onload=()=>{
            meme.src =data.url;
            title.innerHTML=data.title;
        }
        memeImg.src=data.url;
    })
}

//call the getMeme fn on btn click
getMemeBtn.addEventListener('click',getMeme)
window.addEventListener("load",getMeme)