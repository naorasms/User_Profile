let tabs = document.querySelectorAll('[data-tab-target]');
let tabContents = document.querySelectorAll('[data-tab-content]')

//popup modal
let openPopup = document.querySelectorAll('[data-popup-target]');
let closePopup = document.querySelectorAll('[data-close-button]');
let overlay = document.getElementById('overlay')

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

openPopup.forEach(a => {
    a.addEventListener('click', () =>{
        let target = document.querySelector(a.dataset.popupTarget)
        console.log(target)
        openModel(target)
    })
})

overlay.addEventListener('click', () => {
    let modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal =>{
        closeModel(modal)
    })
})

closePopup.forEach(a => {
    a.addEventListener('click', () =>{
        let target = a.closest('.modal')
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