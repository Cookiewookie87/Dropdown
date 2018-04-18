let dropdownSelection = document.querySelectorAll(".dropdown-selection");
let dropdownInput = document.querySelectorAll(".dropdown-input");
let dropdownItem = document.querySelectorAll(".dropdown-item");

for (let j = 0; j < dropdownInput.length; j++) {
    dropdownInput[j].addEventListener("click", function(){
        dropdownSelection[j].classList.toggle("active");
    });
}

for (let i = 0; i < dropdownItem.length; i++){
    dropdownItem[i].addEventListener("click", function (){
        dropdownItem[i].parentNode.parentNode.childNodes[1].textContent = dropdownItem[i].textContent;
        dropdownSelection[i].classList.toggle("active"); 
    });
}
