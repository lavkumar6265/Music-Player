const music = new Audio('img/arjit_audio/1.mp3');
// music.play();

const songs = [

    {
        id:1,
        songName:`On My Way <br>
         <div class="subtitle">Alan Walker</div>`,
        poster: "img/arjit_img/1.jpg"
    },

    {
        id:2,
        songName:`arjit singh <br>
         <div class="subtitle">main hero</div>`,
        poster: "img/arjit_img/2.jpg"
    },

    {
        id:3,
        songName:`udit narayan <br> <div class="subtitle">old song</div>`,
        poster: "img/arjit_img/3.jpg"
    },

    {
        id:4,
        songName:`ajju <br> <div class="subtitle">thats why</div>`,
        poster: "img/arjit_img/4.jpg"
    },

    {
        id:5,
        songName:`love bro <br> <div class="subtitle">love</div>`,
        poster: "img/arjit_img/5.jpg"
    },

    {
        id:6,
        songName:`chandu <br> <div class="subtitle">thats goood</div>`,
        poster: "img/arjit_img/6.jpg"
    },

    {
        id:7,
        songName:`akshy <br> <div class="subtitle">not bed</div>`,
        poster: "img/arjit_img/7.jpg"
    },

    {
        id:8,
        songName:`neha kakkar <br> <div class="subtitle">hamsafar</div>`,
        poster: "img/arjit_img/8.jpg"
    },

    {
        id:9,
        songName:`sonu nigam <br> <div class="subtitle">oo la la </div>`,
        poster: "img/arjit_img/9.jpg"
    },

    {
        id:10,
        songName:`why that <br> <div class="subtitle">Alan Walker</div>`,
        poster: "img/arjit_img/10.jpg"
    },

    {
        id:11,
        songName:`On My Way <br> <div class="subtitle">Alan Walker</div>`,
        poster: "img/arjit_img/11.jpg"
    },

    {
        id:12,
        songName:`arjun <br> <div class="subtitle">dhanush</div>`,
        poster: "img/arjit_img/12.jpg"
    },

    {
        id:13,
        songName:`karan <br> <div class="subtitle">shanush2</div>`,
        poster: "img/arjit_img/13.jpg"
    },

    {
        id:14,
        songName:`mahi <br> <div class="subtitle">guru</div>`,
        poster: "img/arjit_img/14.jpg"
    },

    {
        id:15,
        songName:`ajit <br> <div class="subtitle">kajsh dhff</div>`,
        poster: "img/arjit_img/15.jpg"
    },

];
 
Array.from(document.getElementsByClassName('songItem')).forEach((e,i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    // e.getElementsByTagName('img')[1].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
    // console.log(songs[i].songName);

});


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click',()=>{

    if(music.paused || music.currentTime<=0){
        music.play();
        // they active css class
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    }
    else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});


const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background = 'rgb(105,105,105,.0)';
    });
}


const makeAllPlay = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el)=>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    });
}


let index = 0;
let poster_masterplay = document.getElementById('poster_masterplay');
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');


Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click',(el) =>{
        index = el.target.id;
        // console.log(index);
        music.src = `img/arjit_audio/${index}.mp3`;
        poster_masterplay.src = `img/arjit_img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        download_music.href = `img/arjit_audio/${index}.mp3`;

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach((elss)=>{
            let {songName} = elss;
            title.innerHTML = songName;
            download_music.setAttribute('download',songName);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105,105,105,.1)";

        makeAllPlay();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');

    });
});


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];


// set Music time to seekbar
music.addEventListener('timeupdate',() =>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    // console.log(music_dur);

    let min1 = Math.floor(music_dur/60);
    let sec1 = Math.floor(music_dur%60);


    if(sec1 <10){
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;
    
    let min2 = Math.floor(music_curr/60);
    let sec2 = Math.floor(music_curr%60);
    
    if(sec2 <10){
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;


    let progressBar = parseInt((music_curr/music_dur)*100);
    seek.value = progressBar;
    // console.log(seek.value);

    let seekbar = seek.value;

    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;

});

// change music currentTime to click seekBar
seek.addEventListener('change',() =>{
    music.currentTime = seek.value * music.duration/100;
});


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change',() =>{
    if(vol.value == 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    
    if(vol.value >0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
        vol_icon.classList.add('bi-volume-down-fill');
    }
    
    if(vol.value >50){
        vol_icon.classList.remove('bi-volume-off-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
});


let Back = document.getElementById('Back');
let Next = document.getElementById('Next');

Back.addEventListener('click',()=>{
    index -= 1;

    if(index <1){
        index = Array.from(document.getElementsByClassName('songItem')).length;
        
    }
    music.src = `img/arjit_audio/${index}.mp3`;
    poster_masterplay.src = `img/arjit_img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    
    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });
    
    songTitles.forEach(elss=>{
        let{songName} = elss;
        title.innerHTML = songName;
    });
    
});

Next.addEventListener('click',() =>{
    index++;
    
if(index > Array.from(document.getElementsByClassName('songItem')).length){
    index = 1;
}
    music.src = `img/arjit_audio/${index}.mp3`;
    poster_masterplay.src = `img/arjit_img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');


    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach(elss=>{
        let{songName} = elss;
        title.innerHTML = songName;
    });
});


let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_songs = document.getElementsByClassName('pop_songs')[0];

pop_song_right.addEventListener('click',() =>{
    // number of pixels that an element's content is scrolled from its left edge.
    pop_songs.scrollLeft +=330;
});

pop_song_left.addEventListener('click',() =>{
    pop_songs.scrollLeft -=330;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artist_box = document.getElementsByClassName('Artist_box')[0];

pop_art_right.addEventListener('click',() =>{
    // number of pixels that an element's content is scrolled from its left edge.
    Artist_box.scrollLeft +=330;
});

pop_art_left.addEventListener('click',() =>{
    Artist_box.scrollLeft -=330;
});


let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click',() =>{
    let a = shuffle.innerHTML;

    switch(a){
        case "Next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'repeat';
            break;
            
            case "repeat":
                shuffle.classList.remove('bi-arrow-repeat');
                shuffle.classList.remove('bi-music-note-beamed');
                shuffle.classList.add('bi-shuffle');
                shuffle.innerHTML = 'random';
                break;

            case "random":
                shuffle.classList.remove('bi-arrow-repeat');
                shuffle.classList.add('bi-music-note-beamed');
                shuffle.classList.remove('bi-shuffle');
                shuffle.innerHTML = 'Next';
                break;
    }
});

const next_music = () =>{

    if(index == songs.length){
        index = 1;
    }
    else{
        index++;
    }

    music.src = `img/arjit_audio/${index}.mp3`;
    poster_masterplay.src = `img/arjit_img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    download_music.href = `audio/${index}.mp3`;

    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach((elss)=>{
        let {songName} = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download',songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105,105,105,.1)";

    makeAllPlay();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');

}

const repeat_music = () =>{

    index;

    music.src = `img/arjit_audio/${index}.mp3`;
    poster_masterplay.src = `img/arjit_img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    download_music.href = `img/arjit_audio/${index}.mp3`;

    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach((elss)=>{
        let {songName} = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download',songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105,105,105,.1)";

    makeAllPlay();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');

}

const random_music = () =>{

    if(index== songs.length){
        index =1;
    }
    else{
        index = Math.floor((Math.random() *songs.length) +1);
    }

    music.src = `img/arjit_audio/${index}.mp3`;
    poster_masterplay.src = `img/arjit_img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    download_music.href = `img/arjit_audio/${index}.mp3`;

    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach((elss)=>{
        let {songName} = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download',songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105,105,105,.1)";

    makeAllPlay();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');

}

music.addEventListener('ended',() =>{
    let b = shuffle.innerHTML;

    switch (b) {
        case 'repeat':
            repeat_music();
            break;
    
        case 'Next':
            next_music();
            break;

        case 'random':
            random_music();
            break;
    }
});