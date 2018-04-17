let dropdownSelection = document.querySelector(".dropdown-selection");
let dropdownInput = document.querySelector(".dropdown-input");
let dropdownItem = document.querySelectorAll(".dropdown-item");

dropdownInput.addEventListener("click", function(){
    dropdownSelection.classList.toggle("active");
});

for (let i = 0; i < dropdownItem.length; i++){
    dropdownItem[i].addEventListener("click", function (){
        dropdownInput.textContent = dropdownItem[i].textContent;
        dropdownSelection.classList.toggle("active"); 
    });
}
