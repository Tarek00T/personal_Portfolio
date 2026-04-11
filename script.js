// header

let menu = document.querySelector('#menubtn');
let nav = document.querySelector('nav');

menu.onclick = () =>{
    menu.classList.toggle('fa-x');
    nav.classList.toggle('active')
}
window.onscroll = () =>{
    menu.classList.remove('fa-x');
    nav.classList.remove('active')
}


// typing text

var typed = new Typed(".typing",{
    strings : ["Competitive Programmer","A strong Mathematics thinker","Problem Solver","Aspiring  Full-Stack Developer"],
    typeSpeed : 150,
    backSpeed : 150,
    loop : true
})

const form = document.querySelector('form');
form.onsubmit = () => {
    alert("Thank you! Your email has been sent successfully.");
};