let tabs = document.querySelectorAll('[data-tab-target]');
let tabContents = document.querySelectorAll('[data-tab-content]')

//popup modal
let openPopup = document.querySelectorAll('[data-popup-target]');
let closePopup = document.querySelectorAll('[data-close-button]');
let overlay = document.getElementById('overlay');

// Menu Mobil
let sidebar = document.querySelector(".sidebar");
let menu_mobil = document.querySelector(".menu_mobile");
let menu_icon = document.querySelector(".menu");


if(menu_mobil){

    menu_mobil.addEventListener('click', () => {
        sidebar.classList.toggle("active");
        menu_mobil.classList.toggle("show")
        console.log(menu_icon)
    })
}

// menu_icon.addEventListener('click', () => {
//     menu_icon.classList.toggle("active")
//     console.log(menu_icon)
// })

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

// spalide slider
var elms = document.getElementsByClassName( 'splide' );

for ( var i = 0; i < elms.length; i++ ) {
  new Splide( elms[ i ],
        {
            perPage: 6,
            rewind : true,
            // type   : 'loop',
            gap    : '2rem',
                breakpoints: {

                
                    768: {
                        perPage: 4,
                        gap    : '.7rem',
                        // height : '6rem',
                    },
                    576: {
                        perPage: 3,
                        gap    : '.7rem',
                        // pagination: true
                        // height : '6rem',
                    },
                    480: {
                        perPage: 3,
                        gap    : '.7rem',
                        // pagination: true
                        // height : '6rem',
                    },
                    320: {
                        perPage: 2,
                        // gap    : '.7rem',
                        // pagination: true
                        // height : '6rem',
                    }
            },

        }
    ).mount();
}