import { helpContents } from './data/help-data.js';

document.addEventListener("DOMContentLoaded", function () {
	const infoModalEl = document.getElementById("infoModal");
	infoModalEl.addEventListener('show.bs.modal', function (event) {
		// Button that triggered the modal
		const triggerEl = event.relatedTarget;
		// Extract the help key from the clicked element
		const key = triggerEl.getAttribute('data-help-key');
		// Look up stored content from mapping
		const help = helpContents[key] || { title: "Help Center", content: "" };
		// Update modal's title and body
		const modalTitle = infoModalEl.querySelector('.modal-title');
		const modalBody = infoModalEl.querySelector('.modal-body');
		modalTitle.textContent = help.title;
		modalBody.innerHTML = help.content;
	});
});
