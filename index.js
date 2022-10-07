

let ham = document.querySelector('#ham').onclick = hamOpen
let cross = document.getElementById('ham-cross').onclick = hamOpen


let open = false


function hamOpen(){

    open = !open

    let sidebar = document.querySelector('.sidebar')

    if( open ){
        sidebar.style.transform = "translateX(0%)"
    }
    else{
        sidebar.style.transform = "translateX(100%)"
    }
}