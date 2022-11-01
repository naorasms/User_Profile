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