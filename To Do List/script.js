const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

document.getElementById("add-btn").addEventListener("click", addTask);
addEventListener("keydown", (e) => {
    if (e.key === "Enter") { // Corrected the key comparison
        addTask(); // Added parentheses
    }
});

function addTask() {
    if (inputBox.value === "") {
        alert("You must write something!!!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        let span = document.createElement("span");
        span.innerHTML = "<i class='bx bxs-trash-alt'></i>";
        li.appendChild(span);
        listContainer.appendChild(li);
        saveData();
        inputBox.value = ""; // Clear the input box after adding the task
    }
}

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

listContainer.addEventListener("click", (e) => {
    if (e.target.tagName.toUpperCase() === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName.toUpperCase() === "SPAN") {
        e.target.parentElement.remove(); // Corrected the typo
        saveData(); // Added parentheses
    }
});

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();