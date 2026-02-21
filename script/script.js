
const buttons = document.querySelectorAll('.int-button'); 
const display = document.getElementById('int-count');
let count = 0;

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        count++;
        display.innerText = count;
    });
});

const totalCountElem = document.getElementById("total-count");

let totalCount = parseInt(totalCountElem.textContent);

// সব delete button select
const deleteButtons = document.querySelectorAll(".btn-circle");

deleteButtons.forEach(button => {
    button.addEventListener("click", function () {

        const card = this.closest(".card");
        card.remove(); // UI থেকে remove

        // total কমাও
        totalCount--;
        totalCountElem.textContent = totalCount;

    });
});
