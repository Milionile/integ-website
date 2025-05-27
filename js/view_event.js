import { events } from './event-data.js';

function getEventIdFromUrl() {
	const params = new URLSearchParams(window.location.search);
	return params.get("id");
}

function formatPrice(price) {
	return `₱${price.toLocaleString('en-PH', { minimumFractionDigits: 2 })}`;
}

document.addEventListener("DOMContentLoaded", () => {
	// helper for DOM lookup
	const getEl = id => document.getElementById(id);

	// Retrieve event data by id
	const eventId = getEventIdFromUrl();
	const event = events.find(e => e.id === eventId);
	if (!event) {
		console.error("Event not found");
		return;
	}
	window.currentEvent = event;

	// Cache DOM elements
	const eventImage = getEl("eventImage"),
		eventTitle = getEl("eventTitle"),
		eventDateEl = getEl("eventDate"),
		eventLocationEl = getEl("eventLocation"),
		eventDescriptionEl = getEl("eventDescription"),
		organizerNameEl = getEl("organizerName"),
		ticketPriceEl = getEl("ticketPrice"),
		salesBadgeEl = getEl("salesBadge"),
		eventDaySelect = getEl("eventDay"),
		seatTypeSelect = getEl("seatType"),
		seatPickerContainer = getEl("seatPicker"),
		quantityInput = getEl("ticketQuantity");

	// Populate basic event info
	eventImage.src = event.image || 'https://placehold.co/600x400';
	eventImage.onerror = () => {
		eventImage.src = 'https://placehold.co/600x400';
	};
	eventTitle.textContent = event.title;
	eventDateEl.textContent = event.date;
	eventLocationEl.textContent = event.location;
	eventDescriptionEl.textContent = event.description;
	organizerNameEl.textContent = event.organizer;
	ticketPriceEl.textContent = formatPrice(event.price);
	if (event.price === 0) {
		salesBadgeEl.style.display = "none";
		// Hide general admission price and service fee display for free events
		ticketPriceEl.textContent = "Free!";
		getEl("serviceFee").classList.add("d-none");
		// Hide fee note if exists
		const feeNote = getEl("feeNote");
		if (feeNote) feeNote.classList.add("d-none");
	}

	// Handle event day selection if event has multiple days
	if (event.days && event.days.length > 1) {
		eventDaySelect.innerHTML = "";
		event.days.forEach(day => {
			const option = document.createElement("option");
			option.value = day;
			option.textContent = day;
			eventDaySelect.appendChild(option);
		});
		eventDaySelect.parentElement.classList.remove("d-none");
		eventDaySelect.addEventListener("change", () => {
			getEl("selectedSeatInput").value = "";
			getEl("selectedSeat").style.display = "none";
			refreshSeatPicker();
		});
	} else {
		eventDaySelect.parentElement.classList.add("d-none");
	}

	// Handle seat type selection if available
	if (event.seatTypes && event.seatTypes.length > 0) {
		const gaHeader = ticketPriceEl.previousElementSibling;
		if (gaHeader) gaHeader.style.display = "none";
		ticketPriceEl.style.display = "none";
		const seatTypeContainer = seatTypeSelect.closest(".d-none");
		if (seatTypeContainer) seatTypeContainer.classList.remove("d-none");
		seatTypeSelect.innerHTML = "";
		event.seatTypes.forEach(st => {
			const option = document.createElement("option");
			option.value = st.price; // store seat price as value
			option.textContent = `${st.type} - ${formatPrice(st.price)}`;
			seatTypeSelect.appendChild(option);
		});
		seatTypeSelect.addEventListener("change", () => {
			updateTotalPrice();
			refreshSeatPicker();
		});
	} else {
		seatTypeSelect.parentElement.classList.add("d-none");
		getEl("seatPicker").parentElement.classList.add("d-none");
	}

	// Set up ticket quantity controls
	getEl("decreaseQuantity").addEventListener("click", () => {
		const newQuantity = Math.max(1, parseInt(quantityInput.value) - 1);
		quantityInput.value = newQuantity;
		updateTotalPrice();
	});
	getEl("increaseQuantity").addEventListener("click", () => {
		const newQuantity = parseInt(quantityInput.value) + 1;
		quantityInput.value = newQuantity;
		updateTotalPrice();
	});

	// Final price update: use seat type price (if available) multiplied by ticket count plus a 5% fee
	const updateTotalPrice = () => {
		if (event.price === 0) {
			getEl("checkoutButton").textContent = "Register for free";
			return;
		}
		const serviceFeeRate = 0.05,
			quantity = parseInt(quantityInput.value),
			basePrice = (event.seatTypes && event.seatTypes.length > 0)
				? (parseFloat(seatTypeSelect.value) || event.price)
				: event.price,
			subtotal = basePrice * quantity,
			serviceFee = subtotal * serviceFeeRate,
			total = subtotal + serviceFee;
		getEl("serviceFee").textContent = `+ ${formatPrice(serviceFee)} fee`;
		getEl("checkoutButton").textContent = `Check out for ${formatPrice(total)}`;
	};

	// Refresh the seat picker: disable occupied seats, always show them
	function refreshSeatPicker() {
		seatPickerContainer.innerHTML = "";
		let selectedDay = event.date;
		if (event.days && event.days.length > 1) {
			selectedDay = eventDaySelect.value;
		}
		let selectedSeatType = null;
		if (event.seatTypes && event.seatTypes.length > 0) {
			const selectedOption = seatTypeSelect.options[seatTypeSelect.selectedIndex];
			if (selectedOption) {
				selectedSeatType = selectedOption.textContent.split(' - ')[0];
			}
		}
		let seats = [];
		if (selectedSeatType && event.seatMap && event.seatMap[selectedSeatType]) {
			seats = event.seatMap[selectedSeatType];
		}
		let occupied = [];
		if (event.occupiedSeats && selectedDay && selectedSeatType && event.occupiedSeats[selectedDay]) {
			occupied = event.occupiedSeats[selectedDay][selectedSeatType] || [];
		}
		seats.forEach(seat => {
			const btn = document.createElement("button");
			btn.type = "button";
			btn.className = "btn btn-outline-secondary";
			btn.textContent = seat;
			if (occupied.includes(seat)) {
				btn.disabled = true;
				btn.classList.add("btn-danger");
			}
			btn.addEventListener("click", () => {
				[...seatPickerContainer.children].forEach(child => child.classList.remove("active"));
				btn.classList.add("active");
				getEl("selectedSeatInput").value = seat;
				const selectedSeatEl = getEl("selectedSeat");
				selectedSeatEl.style.display = "block";
				getEl("seatNumber").textContent = seat;
			});
			seatPickerContainer.appendChild(btn);
		});
	}

	updateTotalPrice();
	if (event.seatTypes && event.seatTypes.length > 0) {
		refreshSeatPicker();
	}
});
