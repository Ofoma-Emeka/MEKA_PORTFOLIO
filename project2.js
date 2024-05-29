const btnE1 = document.getElementById("btn");
const emojinameE1 = document.getElementById("emoji_name");

const emoji = [];

async function getEmoji(){
    let response = await fetch(
        "https://emoji-api.com/emojis?access_key=773b58f681fb786fafdb8392e8b8a75ddc177fd1"
    );

    data = await response.json();

    for (let i = 0; i < 1500; i++ ){
        emoji.push({
            emojiNAme: data[i].character,
            emojiCode: data[i.unicodeName],
        });
    }
}
getEmoji();

btnE1.addEventListener("click",()=>{
    const randomNum = Math.floor(Math.random() * emoji.length);
    btnE1.innerText = emoji[randomNum].emojiNAme;
    emojinameE1.innerText = emoji[randomNum].emojiCode;
});