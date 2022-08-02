let count;
let countField;
let actionMessageField;
let previousEntriesField;
let popUpConfirm;
let savedCount = [0];
let boolSave;
let previousEntries = "Previous Entries: ";
let index;

function loadDoc() {
	countField = document.getElementById("count-el");
	actionMessageField = document.getElementById("action-message");
	previousEntriesField = document.getElementById("previous-entries");
	popUpConfirm = document.getElementById("pop-up-save");
	count = countField.textContent;
	index = 0;
}

function increment() {
	count++;
	updateCount();
	actionMessageField.textContent = "People count increased!";
}

function decrement() {
	if (count > 0) {
		count--;
		updateCount();
		actionMessageField.textContent = "People count decreased!";
	} else {
		actionMessageField.textContent = "No People!";
	}
}

function updateCount() {
	countField.textContent = count;
}

function saveCountConfirmation () {
	popUpConfirm.classList.remove("hide");
	popUpConfirm.classList.add("show");
}

function saveCount() {

	buildEntries();
	
	previousEntriesField.textContent = previousEntries;
	actionMessageField.textContent = "People count Saved!";

	popUpConfirm.classList.remove("show");
	popUpConfirm.classList.add("hide");

	updateCount();
}

function buildEntries() {
	saveCount[index++] = count;
	previousEntries = previousEntries + count + " - ";
	count = 0;
}

function saveCancel() {
	popUpConfirm.classList.remove("show");
	popUpConfirm.classList.add("hide");
}