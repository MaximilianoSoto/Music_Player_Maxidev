
let $song = document.querySelector("#song")
let $ctrlIcon = document.querySelector("#ctrlIcon")
let $ctrlSkip = document.querySelector("#ctrlSkipForward")
let $ctrlSkipBack = document.querySelector("#ctrlSkipBack")
let rutaActual = window.location.pathname;


$ctrlIcon.addEventListener('click', ()=> {

    if($ctrlIcon.classList.contains("fa-pause")){
        $song.pause()
        $ctrlIcon.classList.remove("fa-pause")
        $ctrlIcon.classList.add("fa-play")
    }else{
        $song.play()
        $ctrlIcon.classList.add("fa-pause")
        $ctrlIcon.classList.remove("fa-play")
    }

})

$ctrlSkip.addEventListener('click', () =>{
    if(rutaActual == "/index.html" ){
        window.location.href = "song2.html"    
    }else{
        window.location.href = "index.html"
    }
})

$ctrlSkipBack.addEventListener('click', () => {
    if(rutaActual == "/index.html" ){
        window.location.href = "song2.html"    
    }else{
        window.location.href = "index.html"
    }
})