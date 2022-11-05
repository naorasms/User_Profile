let tabs = document.querySelectorAll('[data-tab-target]');
let tabContents = document.querySelectorAll('[data-tab-content]')

//popup modal
let openPopup = document.querySelectorAll('[data-popup-target]');
let closePopup = document.querySelectorAll('[data-close-button]');
let overlay = document.getElementById('overlay');

// Menu Mobil
let sidebar = document.querySelector(".sidebar");
let menu_mobil = document.querySelector(".menu_mobile");


if(menu_mobil){

    menu_mobil.addEventListener('click', () => {
        sidebar.classList.toggle("active")
    })
}
console.log(menu_mobil)
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        let target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')       
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
})
console.log("sssssssssssssss")

openPopup.forEach(btn => {
    btn.addEventListener('click', () =>{
        let target = document.querySelector(btn.dataset.popupTarget)
        openModel(target)
    })
})

if(overlay){
    overlay.addEventListener('click', () => {
        let modals = document.querySelectorAll('.modal.active')
        modals.forEach(modal =>{
            closeModel(modal)
        })
    })
}

closePopup.forEach(btn => {
    btn.addEventListener('click', () =>{
        let target = btn.closest('.modal')
        closeModel(target)
    })
})


function openModel (target) {
    if(target == null) return
    target.classList.add('active')
    overlay.classList.add('active')
}

function closeModel (target) {
    if(target == null) return
    target.classList.remove('active')
    overlay.classList.remove('active')
}


// swaper slider
// var swiper = new Swiper(".swiper", {
//     slidesPerView: 3,
//     spaceBetween: 20,
//     // slidesPerGroup: 3,
//     loop: true,
//     width: 300,
//     // loopFillGroupWithBlank: true,
//     // pagination: {
//     //   el: ".swiper-pagination",
//     //   clickable: true,
//     // },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });

// const swiper = new Swiper('.swiper', {
//     // Default parameters
//     slidesPerView: 1,
//     spaceBetween: 10,
//     width: 100,
//     loop: true,
//     // Responsive breakpoints
//     container: {
//       // when window width is >= 320px
//       320: {
//         slidesPerView: 2,
//         spaceBetween: 20
//       },
//       // when window width is >= 480px
//       480: {
//         slidesPerView: 3,
//         spaceBetween: 30
//       },
//       // when window width is >= 640px
//       640: {
//         slidesPerView: 4,
//         spaceBetween: 40
//       }
      
//     }
//   })



// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 1,
//     spaceBetween: 15,
//     width: 100,
//     loop: true,
//     centerSlider: true,
//     grabCursor: 'true',
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
              
//               breakpoints: {
//                 640: {
//                     slidesPerView: 2,
//                     spaceBetween: 20,
//                 },
//                 768: {
//                     slidesPerView: 3,
//                     spaceBetween: 0,
//                 },
//                 1024: {
//                     slidesPerView: 4,
//                     spaceBetween: 0,
//                 },
//             },


//   });


// new Splide( '.splide' ).mount();

// var splide = new Splide( '.splide', {
//     type     : 'loop',
//     height   : '10rem',
//     focus    : 'center',
//     container: HTMLElement,
//     autoWidth: true,
//   } );
  
//   splide.mount();


// var splide = new Splide( '.splide', {
//     perPage: 6,
//     type   : 'loop',
//     gap    : '2rem',
//     // fixedWidth:  "100px",
//     breakpoints: {
//       640: {
//         perPage: 4,
//         gap    : '.7rem',
//         // height : '6rem',
//       },
//       480: {
//         perPage: 3,
//         gap    : '.7rem',
//         // pagination: true
//         // height : '6rem',
//       },
//     },
//   } );
  
//   splide.mount();




// var splide = new Splide( '.splide', {
//     perPage: 5,
//     rewind : true,
//     type   : 'loop',
//     gap    : '2rem',
//         breakpoints: {
//       640: {
//         perPage: 3,
//         gap    : '.7rem',
//         // height : '6rem',
//       },
//       480: {
//         perPage: 2,
//         gap    : '.7rem',
//         // pagination: true
//         // height : '6rem',
//       },
//     },
//   } );
var elms = document.getElementsByClassName( 'splide' );

for ( var i = 0; i < elms.length; i++ ) {
  new Splide( elms[ i ],
        {

            perPage: 5,
            rewind : true,
            type   : 'loop',
            // gap    : '2rem',
                breakpoints: {
                    640: {
                        perPage: 4,
                        gap    : '.7rem',
                        // height : '6rem',
                    },
                    480: {
                        perPage: 3,
                        gap    : '.7rem',
                        // pagination: true
                        // height : '6rem',
                    },
            },

        }
    ).mount();
}