const music = document.getElementById("music");
const nextBtn = document.getElementById("nextBtn");

/* Resume music */
window.addEventListener("load", () => {
const savedTime = sessionStorage.getItem("songTime");
if(savedTime){
music.currentTime = savedTime;
}
});

/* Save music position */
setInterval(() => {
sessionStorage.setItem("songTime", music.currentTime);
},1000);

/* Play after interaction */
document.body.addEventListener("click", () => {
music.play();
},{once:true});

/* Next page */
if(nextBtn){
nextBtn.addEventListener("click", () => {
document.body.classList.add("fade-out");
setTimeout(()=>{
window.location.href="love.html";
},800);
});
}

/* Typing Love Letter */

const message = `I don’t always know how to perfectly explain what you mean to me.

But meeting you changed something quietly and deeply inside me.

You’ve watched me grow, stumble, learn, and try again… and you stayed.

I admire your strength, your heart, and the way you chase your dreams.

I don’t just love who you are today.
I love who you are becoming.

I want to be beside you while we both grow into better versions of ourselves.

You matter to me in ways words struggle to hold.

And this little page… is just my way of reminding you that you are loved deeply.`;

const typingElement = document.getElementById("typingText");

if(typingElement){
let index = 0;

function type(){
if(index < message.length){
typingElement.innerHTML += message.charAt(index);
index++;
setTimeout(type,35);
}
}

type();
}
