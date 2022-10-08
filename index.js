

let ham = document.querySelector('#ham').onclick = hamOpen
let cross = document.getElementById('ham-cross').onclick = hamOpen

let textChoice = document.querySelector('#text-choice')
let imageChoice = document.querySelector('#image-choice')
let videosChoice = document.querySelector('#videos-choice')
let searchBar = document.querySelector('#search-bar')
let output = document.querySelector('.search-output')
let STU = document.querySelector('.stepsToUse')

textChoice.onclick = textSelect
imageChoice.onclick = imageSelect
videosChoice.onclick = videosSelect

let open = false
var text = false
var image = false
var videos = false


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

    text = !text

    if (textChoice.classList.contains("sub-nav-items-active")) {

        textChoice.classList.remove("sub-nav-items-active")
        return
    }


    textChoice.classList += " sub-nav-items-active"

}

function imageSelect() {

    image = !image

    if (imageChoice.classList.contains("sub-nav-items-active")) {

        imageChoice.classList.remove("sub-nav-items-active")
        return
    }

    image = true
    imageChoice.classList += " sub-nav-items-active"

}

function videosSelect() {

    videos = !videos
    if (videosChoice.classList.contains("sub-nav-items-active")) {

        videosChoice.classList.remove("sub-nav-items-active")
        return
    }

    videos = true
    videosChoice.classList += " sub-nav-items-active"

}

function search() {

    output.style.display = "none"
    STU.style.display = "none"

    if (text) {
        output.style.display = "flex"
        document.querySelector('.text-output').style.display = "block"
    }
    else {
        document.querySelector('.text-output').style.display = "none"
    }

    if (image) {
        output.style.display = "flex"
        document.querySelector('.image-output').style.display = "block"
    }
    else {
        document.querySelector('.image-output').style.display = "none"
    }

    if (videos) {
        output.style.display = "flex"
        document.querySelector('.video-output').style.display = "block"
    }
    else {
        document.querySelector('.video-output').style.display = "none"
    }
}