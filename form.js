const modal = document.getElementById("modal");
const onSubmit = document.getElementById("onSubmit");
const closeModal = document.getElementById("closeModal");

onSubmit.addEventListener("submit", ()=> {
    modal.style.display = "flex";
    event.preventDefault();
});

closeModal.addEventListener("click", ()=>{
    modal.style.display = "none";
})