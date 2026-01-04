const button = document.querySelector("#openModal");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-modal");

button.addEventListener("click", (e) => {
	e.preventDefault();
	modal.style.display = "block";
});

// Close when clicking close button
closeBtn.addEventListener("click", () => {
	modal.style.display = "none";
});

// Close when clicking outside modal-content
modal.addEventListener("click", (e) => {
	if (e.target === modal) {
		modal.style.display = "none";
	}
});
