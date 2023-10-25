const play = document.getElementById('play')

const music = document.querySelector('audio')

const img = document.querySelector('img')

const title = document.getElementById('title')

const prev = document.getElementById('prev')

const next = document.getElementById('next')

const artist = document.getElementById('artist')

const progress = document.getElementById('progress')

const total_duration = document.getElementById('duration')

let current_time = document.getElementById('current_time')

const progress_div = document.getElementById('progress_div')

let isPlaying = false;
play.addEventListener("click", ()=>{
    if(isPlaying){
        pauseMusic();
    }
    else{
        playMusic();
    }
})

// for playing the song
const playMusic = () =>{
    isPlaying = true;
    music.play();
    play.classList.replace('fa-play', "fa-pause")
    img.classList.add('anime')
}
// for pausing the song
const pauseMusic = () =>{
        isPlaying = false;
        music.pause();
        play.classList.replace('fa-pause', "fa-play")
        img.classList.remove('anime')
    }


    // function for changing the music

const songs = [
    {
    name: "Blinding_Lights",
    title : "Blinding Lights",
    artists: "The weeknd"
  },
  {
    name: "Busy_Earnin'",
    title : "Busy eanin",
    artists: "Jungle"
  },
  {
    name: "Can_You_Hear_me",
    title : "Can You here me",
    artists: "Munn"
  },
  {
    name: "Daylight",
    title : "Daylight",
    artists: "David Kushner"
  },
  {
    name: "Happy_Man",
    title : "Happy Man",
    artists: "Jungle"
  },
  {
    name: "Hum_katha_Sunate_Shri_Ram_Ki",
    title : " Katha Sunate ",
    artists: "Pinak Dhari"
  },
  {
    name: "Hustler",
    title : "Hustler",
    artists: "Zayde Wolf"
  },
  {
    name: "If You Believe",
    title : "If You Belive",
    artists: "Stephen Schwartz"



  },
  {
    name: "It's_You",
    title : "It's You",
    artists: "Ali Gatie"
  },  
  {
    name: "Mera_Safar",
    title : "Mera Safar",
    artists: "Iqlipse Nova"
  },  
  {
    name: "New_Kings",
    title : "New Kings",
    artists: "Sleeping Wolf"
  },
  {
    name: "Something_In_The_Way",
    title : "Something ",
    artists: "Nirvana"
  },

  {
    name: "Wavin'_Flag",
    title : "Wavins Flag",
    artists: "K'NAAN"
  },

  {
    name: "Whatever_It_Takes",
    title : "Whatever ",
    artists: "Dragons"
  },

  {
    name: "Wrecked",
    title : "Wrecked",
    artists: "Dragons"
  },


]

const loadSongs = (songs)=>{
    title.textContent = songs.title
    artist.textContent = songs.artists
    music.src = `../musics/${songs.name}.mp3`; // Use backticks for string interpolation
    img.src = `../images/${songs.name}.jpeg`;
}
songIndex = 0;

// loadSongs(songs[5]);

const nextSong = ()=>{
    songIndex = (songIndex+1) % songs.length;
    loadSongs(songs[songIndex])
    playMusic()
}

const prevSong = ()=>{
    songIndex = (songIndex -  1 + songs.length) % songs.length
  
    loadSongs(songs[songIndex])
    playMusic()


}
//  progres bar js
music.addEventListener('timeupdate', (event)=>{
  // console.log(event)
  const {currentTime, duration} = event.target
  // console.log(currentTime);
  // console.log(duration);
  let progress_time = (currentTime / duration) * 100;
  progress.style.width  = `${progress_time}%`;

// music duration update
let minute_duration = Math.floor(duration/60)
let second_duration = Math.floor(duration%60)
if(second_duration<10){
  second_duration = `${second_duration}0`
}
let tot_duration = `${minute_duration} : ${second_duration}`
if(duration){

  total_duration.textContent = `${tot_duration}`
}
//  current time setting
let minute_currentTime = Math.floor(currentTime /60)
let second_currentTime = Math.floor(currentTime %60)
if(second_currentTime < 10){
  second_currentTime = `0${second_currentTime}`
}
let tot_currentTime = `${minute_currentTime} : ${second_currentTime}`


current_time.textContent = `${tot_currentTime}`



});
//  funcion when click on progress div
progress_div.addEventListener('click', (event)=>{
  const { duration} = music;
  let move_progress = (event.offsetX / event.target.clientWidth) 
   * duration;
  music.currentTime = move_progress
  // console.log(move_progress)
  // console.log(event.target.clientWidth);
  // console.log(event.offsetX);
  
})


// if music end the call 
music.addEventListener('ended', nextSong);

next.addEventListener('click', nextSong)
prev.addEventListener('click', prevSong)


