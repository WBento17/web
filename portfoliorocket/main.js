/* modal */
const modalViews = document.querySelectorAll('.habimodal'),
    modalBtns = document.querySelectorAll('.modal_open'),
    modalCloses = document.querySelectorAll('.modal_close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) =>{
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})