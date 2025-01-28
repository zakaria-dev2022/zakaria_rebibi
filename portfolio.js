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
















// document.querySelector('.btn-description').addEventListener('click', () => {
//     document.getElementById('carouselOverlay').style.display = 'flex';
//     showImage(0);
//   });
  
//   document.getElementById('closeBtn').addEventListener('click', () => {
//     document.getElementById('carouselOverlay').style.display = 'none';
//   });
  
//   const images = document.querySelectorAll('#carouselImages img');
//   let currentIndex = 0;
  
//   document.getElementById('prevBtn').addEventListener('click', () => {
//     currentIndex = (currentIndex - 1 + images.length) % images.length;
//     showImage(currentIndex);
//   });
  
//   document.getElementById('nextBtn').addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % images.length;
//     showImage(currentIndex);
//   });
  
//   function showImage(index) {
//     images.forEach((img, i) => img.classList.toggle('active', i === index));
//   }
  
// const btnDescription = document.querySelectorAll('.btn-description');
// const carouselOverlay = document.getElementById('carouselOverlay');
// const closeBtn = document.getElementById('closeBtn');
// const prevBtn = document.getElementById('prevBtn');
// const nextBtn = document.getElementById('nextBtn');
// const carouselImages = document.getElementById('carouselImages');
// const carouselDescription = document.getElementById('carouselDescription');
// btnDescription.forEach(button => {
//         button.addEventListener('click', function (e) {
//             e.preventDefault();
//             const carouselId = button.getAttribute('data-carousel-id');
//             openCarousel(carouselId);
//         });
//     });

//  // Open carousel
//  function openCarousel(carouselId) {
//     carouselOverlay.style.display = 'block';
//     // Based on the clicked description button, change images and descriptions
//     switch (carouselId) {
//         case '1':
//             console.log(carouselId);
            
//             carouselImages.innerHTML = 
//             `
//             <img src="img/chichaven dashboard.png" alt="Image 1">
//             <img src="img/chichaven.png" alt="Image 2">
//             <img src="img/clos marsault.png" alt="Image 3">
//             `;
//             carouselDescription.textContent = 'Description for Raja Club Athletic, Clos Marsault, and Ribéry Gym11111111111111';
//             break;
//         case '2':
//             console.log(carouselId);
//             carouselImages.innerHTML = `
//                 <img src="img/chichaven dashboard.png" alt="Image 1">
//             <img src="img/chichaven.png" alt="Image 2">
//             <img src="img/clos marsault.png" alt="Image 3">
//             `;
//             carouselDescription.textContent = 'Description for Nike project';
//             break;
//         case '3':
//             carouselImages.innerHTML = `
//                 <img src="img/chichaven dashboard.png" alt="Image 1">
//             <img src="img/chichaven.png" alt="Image 2">
//             <img src="img/clos marsault.png" alt="Image 3">
//             `;
//             carouselDescription.textContent = 'Description for Clos Marsault project';
//             break;
//         case '4':
//             carouselImages.innerHTML = `
//                 <img src="img/gestion ecole.png" alt="Gestion école">
//             `;
//             carouselDescription.textContent = 'Description for Gestion école project';
//             break;
//         case '5':
//             carouselImages.innerHTML = `
//                 <img src="img/gym.png" alt="Ribéry Gym">
//             `;
//             carouselDescription.textContent = 'Description for Ribéry Gym project';
//             break;
//         default:
//             break;
//     }
// }



const btnDescription = document.querySelectorAll('.btn-description');
const carouselOverlay = document.getElementById('carouselOverlay');
const closeBtn = document.getElementById('closeBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carouselImages = document.getElementById('carouselImages');
const carouselDescription = document.getElementById('carouselDescription');
let currentImageIndex = 0;

// Ajout d'un événement pour chaque bouton de description
btnDescription.forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        const carouselId = button.getAttribute('data-carousel-id');
        openCarousel(carouselId);
    });
});

// Fonction pour ouvrir le carrousel en fonction de l'ID
function openCarousel(carouselId) {
    carouselOverlay.style.display = 'block';
    currentImageIndex = 0; // Réinitialiser l'index des images à chaque ouverture
    // Based on the clicked description button, change images and descriptions
    switch (carouselId) {
        case '1':
            console.log(carouselId);
            carouselImages.innerHTML = `
                <img src="img/RCA.png" alt="">
                <img src="img/RCA1.png" alt="">
                <img src="img/RCA2.png" alt="">
                <img src="img/RCA3.png" alt="">
                <img src="img/RCA4.png" alt="">
            `;
            carouselDescription.textContent = `Pour mon premier projet pratique en programmation web, j'ai choisi de développer un site web dédié au Raja Club Athletic, un club de football emblématique. Ce projet m'a permis de consolider mes connaissances en HTML, CSS.`;
            break;
        case '2':
            console.log(carouselId);
            carouselImages.innerHTML = `
                <img src="img/Nike.png" alt="">
                <img src="img/Nike1.png" alt="">
                <img src="img/Nike2.png" alt="">
                <img src="img/Nike3.png" alt="">
                <img src="img/Nike4.png" alt="">
                <img src="img/Nike5.png" alt="">
                <img src="img/Nike6.png" alt="">
                <img src="img/Nike7.png" alt="">
                <img src="img/Nike8.png" alt="">
            `;
            carouselDescription.textContent = `Dans le cadre de ma formation en programmation web, j'ai développé un site web dédié à Nike, l'une des marques les plus emblématiques dans le domaine du sport et du lifestyle. Ce projet m'a permis d'approfondir mes compétences en HTML, CSS.`;
            break;
        case '3':
            carouselImages.innerHTML = `
            <img  src="img/clos marsault.png" alt="">
            <img src="img/clos marsault1.png" alt="">
            <img src="img/clos marsault2.png" alt="">
            `;
            carouselDescription.textContent = 'Description for Clos Marsault project';
            break;
        case '4':
            carouselImages.innerHTML = `
                <img src="img/gestion ecole.png" alt="">
                <img src="img/gestion ecole1.png" alt="">
                <img src="img/gestion ecole2.png" alt="">
                <img src="img/gestion ecole3.png" alt="">
                <img src="img/gestion ecole4.png" alt="">
                <img src="img/gestion ecole5.png" alt="">
            `;
            carouselDescription.textContent = `Cette application console est conçue pour gérer les principales données et opérations d'une école. Elle offre une interface simple permettant d'effectuer les tâches comme Ajouter, modifier, supprimer et afficher les informations des étudiants ,des professeurs ,les matières ,les absences, les notes  `;
            break;
        case '5':
            carouselImages.innerHTML = `
                <img src="img/gym.png" alt="">
                <img src="img/gym1.png" alt="">
                <img src="img/gym2.png" alt="">
                <img src="img/gym3.png" alt="">
                <img src="img/gym4.png" alt="">
                <img src="img/gym5.png" alt="">
                <img src="img/gym6.png" alt="">
            `;
            carouselDescription.textContent = 'Description for Ribéry Gym project';
            break;
        case '6':
            carouselImages.innerHTML = `
                <img src="img/gestion client.png" alt="">
            `;
            carouselDescription.textContent = 'Description for Ribéry Gym project';
            break;
        case '7':
            carouselImages.innerHTML = `
                <img src="img/gestion commande.png" alt="">
            `;
            carouselDescription.textContent = 'Description for Ribéry Gym project';
            break;
        case '8':
            carouselImages.innerHTML = `
                <img src="img/gestion Cabinet.png" alt="">
            `;
            carouselDescription.textContent = 'Description for Ribéry Gym project';
            break;
        case '9':
            carouselImages.innerHTML = `
                <img src="img/nouhouse.png" alt="">
                <img src="img/nouhouse1.png" alt="">
                <img src="img/nouhouse2.png" alt="">
                <img src="img/nouhouse3.png" alt="">
                <img src="img/nouhouse4.png" alt="">
            `;
            carouselDescription.textContent = 'Description for Ribéry Gym project';
            break;
        case '11':
            carouselImages.innerHTML = `
                <img src="img/mood coffee.png" alt="">
                <img src="img/mood coffee1.png" alt="">
                <img src="img/mood coffee2.png" alt="">
                <img src="img/mood coffee3.png" alt="">
                <img src="img/mood coffee4.png" alt="">
                <img src="img/mood coffee5.png" alt="">
            `;
            carouselDescription.textContent = 'Description for Ribéry Gym project';
            break;
        case '12':
            carouselImages.innerHTML = `
                <img src="img/fastcar wash.png" alt="">
                <img src="img/fastcar wash1.png" alt="">
                <img src="img/fastcar wash2.png" alt="">
                <img src="img/fastcar wash3.png" alt="">
            `;
            carouselDescription.textContent = 'Description for Ribéry Gym project';
            break;
        case '13':
            carouselImages.innerHTML = `
                <img class="w1" src="img/zakaria location.png" alt="">
                <img class="w2" src="img/zakaria location1.png" alt="">
                <img class="w2" src="img/zakaria location2.png" alt="">
                <img class="w2" src="img/zakaria location4.png" alt="">
                <img class="w2" src="img/zakaria location5.png" alt="">
                <img class="w2" src="img/zakaria location6.png" alt="">
                <img class="w2" src="img/zakaria location7.png" alt="">
                <img class="w2" src="img/zakaria location8.png" alt="">
            `;
            carouselDescription.textContent = 'Description for Ribéry Gym project';
            break;
        case '14':
            carouselImages.innerHTML = `
                <img class="w1" src="img/zakaria location site web.png  " alt="">
                <img class="w1" src="img/zakaria location site web1.png  " alt="">
                <img class="w1" src="img/zakaria location site web2.png  " alt="">
                <img class="w1" src="img/zakaria location site web3.png  " alt="">
                <img class="w1" src="img/zakaria location site web4.png  " alt="">
                <img class="w1" src="img/zakaria location site web5.png  " alt="">
                <img class="w1" src="img/zakaria location site web6.png  " alt="">
                <img class="w1" src="img/zakaria location site web7.png  " alt="">
            `;
            carouselDescription.textContent = 'Description for Ribéry Gym project';
            break;
        case '15':
            carouselImages.innerHTML = `
            <img class="w1" src="img/restaurantly_c_sharp.png" alt="">
            <img class="w1" src="img/restaurantly_c_sharp1.png" alt="">
            <img class="w1" src="img/restaurantly_c_sharp2.png" alt="">
            <img class="w1" src="img/restaurantly_c_sharp3.png" alt="">
            <img class="w1" src="img/restaurantly_c_sharp4.png" alt="">
            <img class="w1" src="img/restaurantly_c_sharp5.png" alt="">
            <img class="w1" src="img/restaurantly_c_sharp6.png" alt="">
            `;
            carouselDescription.textContent = 'Description for Ribéry Gym project';
            break;
        case '16':
            carouselImages.innerHTML = `
                <img class="w1" src="img/restaurantly.png" alt="">
                <img class="w1" src="img/restaurantly8.png" alt="">
                <img class="w1" src="img/restaurantly7.png" alt="">
                <img class="w1" src="img/restaurantly1.png" alt="">
                <img class="w1" src="img/restaurantly2.png" alt="">
                <img class="w1" src="img/restaurantly3.png" alt="">
                <img class="w1" src="img/restaurantly4.png" alt="">
                <img class="w1" src="img/restaurantly5.png" alt="">
                <img class="w1" src="img/restaurantly6.png" alt="">
            `;
            carouselDescription.textContent = 'Description for Ribéry Gym project';
            break;
        case '17':
            carouselImages.innerHTML = `
                <img class="w1" src="img/chichaven.png" alt="">
                <img class="w1" src="img/chichaven1.png" alt="">
                <img class="w1" src="img/chichaven2.png" alt="">
                <img class="w1" src="img/chichaven3.png" alt="">
                <img class="w1" src="img/chichaven4.png" alt="">
                <img class="w1" src="img/chichaven5.png" alt="">
            `;
            carouselDescription.textContent = 'Description for Ribéry Gym project';
            break;
        case '18':
            carouselImages.innerHTML = `
                <img class="w1" src="img/chichaven dashboard.png" alt="">
                <img class="w1" src="img/chichaven dashboard1.png" alt="">
                <img class="w1" src="img/chichaven dashboard2.png" alt="">
                <img class="w1" src="img/chichaven dashboard3.png" alt="">
            `;
            carouselDescription.textContent = 'Description for Ribéry Gym project';
            break;
        case '19':
            carouselImages.innerHTML = `
                <img class="w1" src="img/tandiifCom.png" alt="">
                <img class="w1" src="img/tandiifCom1.png" alt="">
                <img class="w1" src="img/tandiifCom2.png" alt="">
                <img class="w1" src="img/tandiifCom3.png" alt="">
                <img class="w1" src="img/tandiifCom4.png" alt="">
                <img class="w1" src="img/tandiifCom5.png" alt="">
            `;
            carouselDescription.textContent = 'Description for Ribéry Gym project';
            break;
        case '20':
            carouselImages.innerHTML = `
                <img class="w1" src="img/tandiifCom_site.png" alt="">
                <img class="w1" src="img/tandiifCom_site1.png" alt="">
                <img class="w1" src="img/tandiifCom_site2.png" alt="">
                <img class="w1" src="img/tandiifCom_site3.png" alt="">
                <img class="w1" src="img/tandiifCom_site4.png" alt="">
                <img class="w1" src="img/tandiifCom_site5.png" alt="">
                <img class="w1" src="img/tandiifCom_site6.png" alt="">
            `;
            carouselDescription.textContent = 'Description for Ribéry Gym project';
            break;
        case '21':
            carouselImages.innerHTML = `
                <img class="w1" src="img/2m .png" alt="">
                <img class="w1" src="img/2m1.png" alt="">
                <img class="w1" src="img/2m2.png" alt="">
                <img class="w1" src="img/2m3.png" alt="">
                <img class="w1" src="img/2m4.png" alt="">
                <img class="w1" src="img/2m5.png" alt="">
                <img class="w1" src="img/2m6.png" alt="">
                <img class="w1" src="img/2m7.png" alt="">
            `;
            carouselDescription.textContent = 'Description for Ribéry Gym project';
            break;

        default:
            carouselDescription.textContent = 'Aucun Element Trouver!';
            break;
    }
    // Afficher la première image active
    updateImage();
}

// Fonction pour mettre à jour l'image affichée
function updateImage() {
    const images = carouselImages.querySelectorAll('img');
    images.forEach((img, index) => {
        img.style.display = index === currentImageIndex ? 'block' : 'none';
    });
}

// Événement de fermeture du carrousel
closeBtn.addEventListener('click', () => {
    carouselOverlay.style.display = 'none';
});

// Boutons de navigation : précédent et suivant
prevBtn.addEventListener('click', () => {
    const images = carouselImages.querySelectorAll('img');
    if (currentImageIndex > 0) {
        currentImageIndex--;
    } else {
        currentImageIndex = images.length - 1;
    }
    updateImage();
});

nextBtn.addEventListener('click', () => {
    const images = carouselImages.querySelectorAll('img');
    if (currentImageIndex < images.length - 1) {
        currentImageIndex++;
    } else {
        currentImageIndex = 0;
    }
    updateImage();
});
