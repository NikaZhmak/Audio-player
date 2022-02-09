let play = document.querySelector('.play_div')
    song_name = document.querySelector('.song_name')
    container = document.querySelector('.container')
    forward_div = document.querySelector('.forward_div')
    backward_div = document.querySelector('.backward_div')
    range = document.querySelector('.range')
    start = document.querySelector('.start')
    end = document.querySelector('.end')
    audio = document.querySelector('.audio')
    background = document.querySelector('.back')
    cover = document.querySelector('.cover')
    song_artist = document.querySelector('.song_artist')
    




// --------------------------------ARRAYS-----------------------------------------

const songsArr = [
    'Don\'t Hurt Yourself',
    'Don\'t Start Now',
]

const artistArr =[
    'Beyonce',
    'Dua Lipa',
]

let songNow = 0
let artistNow =0


let songName = document.querySelector('.song_name')
let NewsongName = songName.innerHTML

let currentSong = function(song_name){
    songName.innerHTML = `${song_name}`;
     audio.src = `files/assets/audio/${song_name}.mp3`;
    cover.src = `files/assets/img/${song_name}.png`;
    background.innerHTML = `<img class="background" src="files/assets/img/${song_name}.png" alt="background">`
  
   }

currentSong(songsArr[songNow])


let artistName = document.querySelector('.song_artist')
let NewArtistName = artistName.innerHTML


let currentArtist = function(song_artist){
    artistName.innerHTML = `${song_artist}`;
       
}

currentArtist(artistArr[artistNow])


// ------------------------------------------------------------------------------
// // --------------------------------BACKGROUND----------------------------------------

// let srcBack = `assets/img/${songNow}`;


// function NewBackground(back){


// background.src = `assets/img/${srcBack}.png`;

// NewBackground(songNow)

// // ----------------------------------------------------------------------------------

// ---------------------------------PAUSE/PLAY---------------------------------

    function pauseAudio() {

      audio.pause();
    //   play.scr = 'assets/svg/pause.png'
    play.classList.remove('pause') 
    play.classList.add('play') 
    
    cover.classList.add('coverPause')

    //   play.classList.toggle(pause)



    }

    function playSong(){
        audio.play()
        audio.currentTime = 0;
        play.classList.remove('play')
        play.classList.add('pause')       
        cover.classList.add('coverPlay')
      
   
        }

    
        play.addEventListener('click',() => {
            
            let isPlay = play.classList.contains('play')
            
            if(isPlay){
              playSong()
            }else {
                pauseAudio()
            }
            
        })



// ----------------------------------------------------------------------------




// --------------------------------FORWARD-------------------------------------
forward_div.addEventListener('click', () =>{

        artistNow++
        songNow++


if (songNow > 1) {
    songNow = 0
    
}


currentSong(songsArr[songNow])



if (artistNow > 1) {
    artistNow = 0
    }
currentArtist(artistArr[artistNow])

//  let isPlay = play.classList.contains('play')
            
//              if(isPlay){
//               playSong()
//                  }else {
//                 pauseAudio()
//              }          
              
 })
  // ----------------------------------------------------------------------------

  // --------------------------------BACKWARD-------------------------------------
backward_div.addEventListener('click', () =>{

                artistNow--
                songNow--
                

    if (songNow < 0) {
        songNow = 1
    } 


    
    currentSong(songsArr[songNow])


    if (artistNow < 0) {
        artistNow = 1        
    } 
    
    currentArtist(artistArr[artistNow])
 
})
  


// -----------------------------------------------------------------------








