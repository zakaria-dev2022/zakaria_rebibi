let menu =document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');
menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};

const sr = ScrollReveal({
    distance:'80px',
    duration:1800,
    reset:true
})
sr.reveal('header',{delay:100,origin:'top'});
sr.reveal('.text,.social',{delay:300,origin:'bottom'})
sr.reveal('.homeimg',{delay:100,origin:'right'});
sr.reveal('.w1',{delay:100,origin:'top'});
sr.reveal('.w2',{delay:300,origin:'top'});
sr.reveal('.w3',{delay:500,origin:'top'});
sr.reveal('.telephone',{delay:100,origin:'right'});
sr.reveal('.email',{delay:350,origin:'right'});
sr.reveal('.localisation',{delay:750,origin:'right'});
sr.reveal('.skill1',{delay:100,origin:'left'});
sr.reveal('.skill2',{delay:100,origin:'right'});



const nav = document.querySelector(".aa");
const arrow = document.querySelector(".arrow");
arrow.onclick = function (){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    });
};

window.onscroll = function(){
    if(window.scrollY>200){
        nav.classList.add("active");
        arrow.style.display='block';
    }else{
        nav.classList.remove("active");
        arrow.style.display='none';

    }
}