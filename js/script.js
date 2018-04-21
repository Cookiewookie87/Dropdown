let dropdownSelection = document.querySelectorAll(".dropdown-selection");
let dropdownInput = document.querySelectorAll(".dropdown-input");
let dropdownItem = document.querySelectorAll(".dropdown-item");
let body = document.body;

for (let j = 0; j < dropdownInput.length; j++) {
    
    let currentDropdownSelection = dropdownSelection[j];
    dropdownInput[j].addEventListener("click", function(){
        dropdownSelection[j].classList.toggle("active");
        
        dropdownSelection.forEach(function(item) {
            if (event.target.nextSibling.nextElementSibling !== item &&
               item.classList.contains("active")) {
                    item.classList.remove("active")
            }
            console.log(item.classList.contains("active"));
            console.log(event.target.nextElementSibling);
        });
    });
}

for (let i = 0; i < dropdownItem.length; i++){
    dropdownItem[i].addEventListener("click", function (){
        //get li items content, get li item previous sibling
        event.target.parentElement.previousSibling.previousSibling.textContent = event.target.textContent;
        event.target.parentElement.classList.remove("active");
        
        //For testing
        console.log(event.target.textContent);
        console.log(event.target.parentElement.previousSibling.previousSibling);
    });
}
