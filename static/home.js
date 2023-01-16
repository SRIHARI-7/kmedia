//Sidebar
const menuItems=document.querySelectorAll('.menu-item');

//Messages
const messagesNotification=document.querySelector('#messages-notification');
const messages=document.querySelector('.messages');
const message=messages.querySelectorAll('.message');
const messageSearch=document.querySelector('#messages-search');

//Theme Customization
const theme=document.querySelector('#theme');
const themeModel=document.querySelector('.customize-theme');
const fontSizes=document.querySelectorAll('.choose-size span');
var root=document.querySelector(':root');
const colorPalette=document.querySelectorAll('.choose-color span');
const bg1=document.querySelector('.bg-1');
const bg2=document.querySelector('.bg-2');
const bg3=document.querySelector('.bg-3');

//Upload
const upload=document.querySelector("#upload")
const uploadClass=document.querySelector(".upload")
const uploadForm=document.querySelector(".uploadForm")
const fileInput=document.querySelector(".file-input");
const progressArea=document.querySelector(".progress-area");
const uploadedArea=document.querySelector(".uploaded-area");


//For File Uploading

// open model
const openUploadArea=()=>{
    uploadClass.style.display='grid';
}
upload.addEventListener('click', openUploadArea);

//close model
const closeUploadArea=(e)=>{
    if(e.target.classList.contains('upload')){
        uploadClass.style.display='none';
    }
}
uploadClass.addEventListener('click', closeUploadArea);

uploadForm.addEventListener('click', ()=>{
    fileInput.click();
})

fileInput.onchange=({target})=>{
    let file=target.file[0];
    if(file){
        let fileName=file.name;
        if(fileName.length>=12){
            let splitName=fileName.split('.');
            fileName=splitName[0].substring(0,13)+"... ."+splitName[1];
        }
        uploadFile(fileName);
    }
}

function uploadFile(name){
    /* Code for uploading Files */
}

const prev = document.querySelector(".prev i"),
next = document.querySelector(".next i"),
video = document.querySelector(".video-lab video"),
play_pause = document.querySelector(".play_pause"),
text_name = document.querySelector(".name"),
img_box = document.querySelector(".img");
const story1=document.querySelector("#story1")
const story1Class=document.querySelector(".view-story")


// open model
const openStoryArea=()=>{
    story1Class.style.display='grid';
}
story1.addEventListener('click', openStoryArea);

//close model
const closeStoryArea=(e)=>{
    if(e.target.classList.contains('view-story')){
        video.pause();
        story1Class.style.display='none';
    }
}
story1Class.addEventListener('click', closeStoryArea);

// Specify globally used value
let track_index = 0;
let isPlaying = false;

// Create the video element for the player
let curr_track = document.createElement('video');
let track_list = [
    {
        path: "story videos/business-salesman.mp4"
	},
	
];
let track = [
    "story videos/business-salesman.mp4"
]
let radome_track = track[Math.floor(Math.random()*track.length)]; //sorting items one-by-one and picking them randomly
window.onload = (e)=>{
    video.src = radome_track;
}
// Load the first track in the tracklist
loadTrack(track_index);

// calling the loadTrack function
function loadTrack(track_index) {
    // Load new track
    video.src = track_list[track_index].path;
    curr_track.load(); //loading the firsr track
    curr_track.addEventListener("ended", nextTrack);
}
function playpauseTrack() {
    // Switch between playing and pausing
    // depending on the current state
    if(!isPlaying) playTrack();
    else pauseTrack();
}
video.addEventListener("click", e => {
    pauseTrack();
    console.log(e);
});
// function to pause track
function pauseTrack() {
    // pause the loaded track
    video.pause();
    isPlaying = false;
    play_pause.classList.add("show");
    play_pause.innerHTML = "<i class='bx bx-play' ></i>";

    setTimeout(()=>{
        video.play();
        isPlaying = true;
        play_pause.innerHTML = "<i class='bx bx-pause' ></i>";
    },2000);

    setTimeout(()=>{
        play_pause.classList.remove("show");
    }, 800);
}
function nextTrack() {
    // Go forward to the next track if the
	// current one is the last in the track list
    if(track_index < track_list.length - 1)
    track_index += 1;
    else track_index = 0;

    // Load and play the new track
    loadTrack(track_index);
    playTrack();
}
function prevTrack() {
    // Go back to the last track if the
	// current one is the first in the track list
    if(track_index > 0)
    track_index -= 1;
    else track_index = track_list.length;

    // Load and play the new track
    loadTrack(track_index);
    playTrack();
}
function playTrack() {
	// play the loaded track
	curr_track.play();
	isPlaying = true;
}
function backwrd() {
    // storing username in an array
    idArray = new Array()
    idArray [1] = "@techno_logy"
    idArray [2] = "@primal_tech"
    idArray [3] = "@tech_videos"
    idArray [4] = "@PC_Work"
    idArray [5] = "@Meta_verse"
  
    randomParagraph = Math.floor(Math.random()*5);
  
    text_name.innerHTML = idArray[randomParagraph + 1] + "<i class='bx bxs-check-circle' style='color: #24eff2'></i>";
}
function fwrd() {
    // storing username in an array
    idArray = new Array()
    idArray [1] = "@techno_logy"
    idArray [2] = "@primal_tech"
    idArray [3] = "@tech_videos"
    idArray [4] = "@PC_Work"
    idArray [5] = "@Meta_verse"
  
    randomParagraph = Math.floor(Math.random()*5);
  
    text_name.innerHTML = idArray[randomParagraph + 1] + "<i class='bx bxs-check-circle' style='color: #24eff2'></i>";
}
img_box.addEventListener("click", (e) => {
    console.log(e);
    img_box.classList.add("followed");

    setTimeout(()=>{
        img_box.classList.add("fade");
    },2000);
});
  


/*---------Sidebar-------------*/
// remove active class from all menu items
const changeActiveItem=()=>{
    menuItems.forEach(item=>{
        item.classList.remove('active');
    })
}
        
menuItems.forEach(item=>{
    item.addEventListener('click', ()=>{
        changeActiveItem();
        item.classList.add('active');
        if(item.id!='notification'){ 
            document.querySelector('.notification-popup').style.display='none';
        }
        else{
            document.querySelector('.notification-popup').style.display='block';
            document.querySelector('#notification .notification-count').style.display='none';
            
        }
    })
})

/*------------- Messages ---------------*/
// search chat
const searchMessage=()=>{
    const val =messageSearch.value.toLowerCase();
    console.log(val);
    message.forEach((user)=>{
        let name=user.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val)!=-1){
            user.style.display='flex';
        }
        else{
            user.style.display='none';
        }
    })
}

messageSearch.addEventListener('keyup', searchMessage);

// highlight messages card when messages menu item is clicked
messagesNotification.addEventListener('click',()=>{
    messages.style.boxShadow='0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display='none';
    setTimeout(()=>{
        messages.style.boxShadow='none';
    }, 2000)
})

messagesNotification.addEventListener('click',()=>{
    messages.style.boxShadow='0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display='none';
    setTimeout(()=>{
        messages.style.boxShadow='none';
    }, 2000)
})

/*----------- Theme Customization ------------*/

// open model
const openThemeModel=()=>{
    themeModel.style.display='grid';
}
theme.addEventListener('click', openThemeModel);

//close model
const closeThemeModel=(e)=>{
    if(e.target.classList.contains('customize-theme')){
        themeModel.style.display='none';
    }
}
themeModel.addEventListener('click', closeThemeModel);

//remove active class from span or font size selectors
const removeSizeSelector=()=>{
    fontSizes.forEach(size=>{
        size.classList.remove('active');
    })
}

//Fonts
fontSizes.forEach(size=>{

    size.addEventListener('click',()=>{
        removeSizeSelector();
        let fontSize;
         size.classList.toggle('active');
    
        if(size.classList.contains('font-size-1')){
            fontSize='10px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
        }
        else if(size.classList.contains('font-size-2')){
            fontSize='13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        }
        else if(size.classList.contains('font-size-3')){
            fontSize='16px';
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        }
        else if(size.classList.contains('font-size-4')){
            fontSize='19px';
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
        }
        else if(size.classList.contains('font-size-5')){
            fontSize='22px';
            root.style.setProperty('----sticky-top-left', '-12rem');
            root.style.setProperty('----sticky-top-right', '-35rem');
        }
        //change font size of the root html element
        document.querySelector('html').style.fontSize=fontSize;
    })
})


const changeActiveColorClass=()=>{
    colorPalette.forEach(colorPicker=>{
        colorPicker.classList.remove('active');
    })
}

//change  primary color
colorPalette.forEach(color=>{
    color.addEventListener('click', ()=>{
        let primaryHue; 

        // remove active class from colors
        changeActiveColorClass();
        if(color.classList.contains('color-1')){
            primaryHue=252;
        }
        else if(color.classList.contains('color-2')){
            primaryHue=52;
        }
        else if(color.classList.contains('color-3')){
            primaryHue=352;
        }
        else if(color.classList.contains('color-4')){
            primaryHue=152;
        }
        else if(color.classList.contains('color-5')){
            primaryHue=202;
        }
        color.classList.add('active');

        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})
 
//theme background 
let lightColorLightness;
let darkColorLightness;
let whiteColorLightness;

//here changes background color
const changeBg=()=>{
    root.style.setProperty('--dark-color-lightness',darkColorLightness);
    root.style.setProperty('--white-color-lightness',whiteColorLightness);
    root.style.setProperty('--light-color-lightness',lightColorLightness);
}

bg1.addEventListener('click', ()=>{
    //add active class
    bg1.classList.add('active');

    //remove active class from the others
    bg2.classList.remove('active');
    bg3.classList.remove('active');

    //remove customized changes from local storage
    window.location.reload();
})

bg2.addEventListener('click', ()=>{
    darkColorLightness='95%';
    whiteColorLightness='20%';
    lightColorLightness='15%';

    //add active class
    bg2.classList.add('active');

    //remove active class from the others
    bg1.classList.remove('active');
    bg3.classList.remove('active');
    changeBg();
})

bg3.addEventListener('click', ()=>{
    darkColorLightness='95%';
    whiteColorLightness='10%';
    lightColorLightness='0%';

    //add active class
    bg3.classList.add('active');

    //remove active class from the others
    bg1.classList.remove('active');
    bg2.classList.remove('active');
    changeBg();
})