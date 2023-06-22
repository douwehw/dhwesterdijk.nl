const dialog = document.querySelector("#dialog");

function openDialog() {
	dialog.open = true;
}

function closeDialog() {
	dialog.open = false;
}

window.addEventListener("keydown", (e) => {
	if (dialog.open === true && e.key === "Escape") {
		closeDialog();
	}
});
