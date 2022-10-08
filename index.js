

let ham = document.querySelector('#ham').onclick = hamOpen
let cross = document.getElementById('ham-cross').onclick = hamOpen

let textChoice = document.querySelector('#text-choice')
let imageChoice = document.querySelector('#image-choice')
let videosChoice = document.querySelector('#videos-choice')

textChoice.onclick = textSelect
imageChoice.onclick = imageSelect
videosChoice.onclick = videosSelect

let open = false
let text = false
let image = false
let videos = false


function hamOpen() {

    open = !open

    let sidebar = document.querySelector('.sidebar')

    if (open) {
        sidebar.style.transform = "translateX(0%)"
    }
    else {
        sidebar.style.transform = "translateX(100%)"
    }
}

function textSelect() {

    if (textChoice.classList.contains("sub-nav-items-active")) {

        textChoice.classList.remove("sub-nav-items-active")
        console.log(textChoice.classList);
        return
    }

    textChoice.classList += " sub-nav-items-active"
    console.log(textChoice.classList);

}

function imageSelect() {

    if (imageChoice.classList.contains("sub-nav-items-active")) {

        imageChoice.classList.remove("sub-nav-items-active")
        console.log(imageChoice.classList);
        return
    }

    imageChoice.classList += " sub-nav-items-active"
    console.log(imageChoice.classList);

}

function videosSelect() {

    if (videosChoice.classList.contains("sub-nav-items-active")) {

        videosChoice.classList.remove("sub-nav-items-active")
        console.log(videosChoice.classList);
        return
    }

    videosChoice.classList += " sub-nav-items-active"
    console.log(videosChoice.classList);

}
