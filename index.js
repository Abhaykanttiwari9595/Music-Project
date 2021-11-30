const music = document.querySelector("audio");
const play = document.getElementById("play");

const img = document.querySelector("img");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const songs = [
    {
        name:"song-1",
        title:"hum aur tm",
        artist:"arjit"
    },
    {
        name:"song-2",
        title:"hum sath sath",
        artist:"ram"
    },
    
]
let isPlaying = false;

// for play functionality
const playMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play","fa-pause");
    img.classList.add("anime");
};

// for push functionality
const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause","fa-play");
    img.classList.remove("anime");
};

play.addEventListener("click",()=>{
    if(isPlaying){
        pauseMusic();
    }else{
        playMusic();
    }
});

// changing the music data

// const artist = document.getElementById("artist");
// const title = document.getElementById("title");
// const prev = document.getElementById("prev");
// const next = document.getElementById("next");

// const songs = [
//     {
//         name:"song-1",
//         title:"hum aur tm",
//         artist:"arjit"
//     },
//     {
//         name:"song-2",
//         title:"hum sath sath",
//         artist:"ram"
//     }
// ];
const loadSong = (songs)=>{
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src ="music/" +songs.name+".mp3";
    img.src ="img/"+songs.name+".jpg";
};
// for next and  prev song
songIndex = 0;
const nextSong = () =>{
    songIndex = (songIndex+1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic()
};
songIndex = 0;
const prevSong = () =>{
    songIndex = (songIndex-1+songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

next.addEventListener("click",nextSong);
prev.addEventListener("click",prevSong);
// loadSong(songs[0]);