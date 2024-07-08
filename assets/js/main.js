let menu = document.getElementById('menu-icon');
let nav = document.querySelector('header .navbar');

menu.addEventListener('click', () =>{
    nav.classList.toggle('toggle');
    menu.classList.toggle('fa-times');
});


// Back to top
let toTop = document.querySelector('#back-to-top');

window.onscroll = () =>{
    // back to top
    if(scrollY >= 600){
        toTop.style.display = 'block';
    }else{
        toTop.style.display = 'none';
    }
    //menu and nav  
    nav.classList.remove('toggle');
    menu.classList.remove('fa-times');
}

// btn to top onclick

toTop.addEventListener('click', () =>{
    scroll({
        top:0,
        left:0,
        behavior:'smooth'
    });
});


// Active class

let link = document.querySelectorAll('.navbar a');

for(let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', () =>{
        let current = document.getElementsByClassName("active");

        current[0].className = current[0].className.replace("active", "");
        this.className += " active";  
    });
}
