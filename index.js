
const itemInput = document.getElementById('in');
const expenseInput = document.querySelector('.expens input');
const saveButton = document.getElementById('submit');
const showButton = document.querySelector('.show');
const showItems = document.getElementById('show-items');
const totalDialogue = document.querySelector(".totalExpense");

totalDialogue.child

let total = 0;

updateTotal();


function deleteExpense(event) {
    let toBeDeleted = event.target.parentNode;
    this_expense = Number(toBeDeleted.childNodes[1].textContent.substring(1));
    total-=this_expense;
    showItems.removeChild(toBeDeleted);
    updateTotal();
}


function displayItems(itemName, expenseAmount) {

    const itemElement = document.createElement('div');
    itemElement.className = "expenseContainer";
    const p1 = document.createElement("p");
    p1.textContent = itemName;
    const p2 = document.createElement("p");
    p2.textContent = `₹${expenseAmount}`;
    const Btn = document.createElement("button");
    Btn.textContent = "Delete";
    Btn.addEventListener("click", deleteExpense);
    itemElement.appendChild(p1);
    itemElement.appendChild(p2);
    itemElement.appendChild(Btn);
    showItems.appendChild(itemElement);

}



function updateTotal() {
    totalDialogue.children[0].textContent = `Total Expense: ${total}`;
}


saveButton.addEventListener('click', Event => {
    Event.preventDefault();

    const itemName = itemInput.value;
    total += Number(expenseInput.value);
    const expenseAmount = String(Number(expenseInput.value));

    
    if (itemName && expenseAmount) {
        displayItems(itemName, expenseAmount);
        updateTotal();
        itemInput.value = '';
        expenseInput.value = '';
    } 
    else {
        alert("Please fill all the elements of the form");
    }
});


showButton.addEventListener("click", (event) => {
    event.preventDefault();
    var showItemsDiv = document.getElementById('show-items');
    showItemsDiv.scrollIntoView({ behavior: 'smooth' });
});
