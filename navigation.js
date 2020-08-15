

//const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', ()=> {
        const modal=document.querySelector(button.dataset.modalTarget)
        openModal(modal)})
})

overlay.addEventListener('click', ()=>{
    const modals=document.querySelectorAll('.modal.active')
    modals.forEach(modal => {closeModal(modal)})
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', ()=> {
        const modal = button.closest('.modal')
        closeModal(modal)})
})


function openModal(modal){
    if(modal== null) return 
    
    modal.classList.add('active')
    overlay.classlist.add('active')
}

function closeModal(modal){
    if(modal== null) return
    modal.classList.remove('active')
    overlay.classlist.remove('active')
}
//

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}