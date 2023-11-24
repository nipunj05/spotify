console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songName: "Choo lo", filePath:"song/choolo.mp3", coverPath: "covers/choolo.jpg"},
    {songName: "Aaoge Tum Kabhi", filePath:"song/AaogeTumKabhi.mp3", coverPath: "covers/aaogetum.jpg"},
    {songName: "Numb", filePath:"song/Numb.mp3", coverPath: "covers/numb.jpg"},
    {songName: "With You", filePath:"song/WithYou.mp3", coverPath: "covers/withyou.jpg"},
    {songName: "Ranjha", filePath:"song/Ranjha.mp3", coverPath: "covers/ranjha.jpg"},
    {songName: "Saibo", filePath:"song/Saibo.mp3", coverPath: "covers/saibo.jpg"},
    {songName: "Bad Liar", filePath:"song/BadLiar.mp3", coverPath: "covers/badliar.jpg"},
    {songName: "Happier", filePath:"song/Happier.mp3", coverPath: "covers/happier.jpg"},
    {songName: "Older", filePath:"song/older.mp3", coverPath: "covers/older.jpg"},
    {songName: "Stereo Hearts", filePath:"song/StereoHearts.mp3", coverPath: "covers/stereo.jpg"},
    
]


// audioElement.play();
//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;

    }
})
// Listen To Events
audioElement.addEventListener('timeupdate',()=>{
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays =  ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `song/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

    })
})
// const makeAllpause =  ()=>{
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//         element.classList.remove('fa-circle-play');
//         element.classList.add('fa-circle-pause');
//     })
// }

// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//     element.addEventListener('click', (e)=>{
//         makeAllpause();
//         songIndex = parseInt(e.target.id);
//         e.target.classList.remove('fa-circle-play');
//         e.target.classList.add('fa-circle-pause');
//         audioElement.src = `song/${songIndex+1}.mp3`;
//         masterSongName.innerText = songs[songIndex].songName;
//         audioElement.currentTime = 0;
//         audioElement.paused();
//         gif.style.opacity = 0;
//         masterPlay.classList.remove('fa-circle-pause');
//         masterPlay.classList.add('fa-circle-play');

//     })
// })
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex +=1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

