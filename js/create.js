(function() {
	// Helper to setup dynamic row behavior
	function setupDynamicRows(options) {
		const container = document.getElementById(options.containerId);
		container.addEventListener('click', function(e) {
			if (e.target && e.target.classList.contains(options.addClass)) {
				const row = e.target.closest(options.rowSelector);
				// For seatingTypes enable inputs (if needed)
				if (options.onAdd) {
					options.onAdd(row);
				}
				// Transform the Add button to a Remove button
				e.target.classList.remove(options.addClass, 'btn-outline-primary');
				e.target.classList.add(options.removeClass, 'btn-outline-danger');
				e.target.textContent = 'Remove';
				// Create and append the new row
				const newRow = document.createElement('div');
				newRow.className = options.rowClassname;
				// For rows that use index (eventDays) pass count; else pass nothing
				const index = container.querySelectorAll(options.rowSelector).length;
				newRow.innerHTML = options.newRowTemplate(index);
				container.appendChild(newRow);
			} else if (e.target && e.target.classList.contains(options.removeClass)) {
				e.target.closest(options.rowSelector).remove();
			}
		});
	}

	// Setup for eventDays
	setupDynamicRows({
		containerId: 'eventDays',
		rowSelector: '.day-row',
		addClass: 'addDay',
		removeClass: 'removeDay',
		rowClassname: 'row gy-2 gx-3 align-items-end mb-2 day-row',
		newRowTemplate: function(index) {
			// Compute current date and time defaults:
			var now = new Date();
			var year = now.getFullYear();
			var month = ("0" + (now.getMonth() + 1)).slice(-2);
			var day = ("0" + now.getDate()).slice(-2);
			var hours = ("0" + now.getHours()).slice(-2);
			var minutes = ("0" + now.getMinutes()).slice(-2);
			return `
            <div class="col-12 col-sm-4 col-md-6">
                <input type="date" class="form-control" id="eventDate${index}" required value="${year}-${month}-${day}">
            </div>
            <div class="col-12 col-sm-4 col-md-4">
                <input type="time" class="form-control" id="eventTime${index}" required value="${hours}:${minutes}">
            </div>
            <div class="col-12 col-sm-4 col-md-2">
                <button type="button" class="btn btn-outline-primary w-100 text-truncate addDay">Add Day</button>
            </div>
          `;
		}
	});

	// Setup for seatingTypes
	setupDynamicRows({
		containerId: 'seatingTypes',
		rowSelector: '.seating-row',
		addClass: 'addSeatingRow',
		removeClass: 'removeSeating',
		rowClassname: 'row gy-2 gx-3 align-items-end mb-2 seating-row',
		onAdd: function(row) {
			row.querySelector('input[type="text"]').disabled = false;
			row.querySelector('input[type="number"]').disabled = false;
		},
		newRowTemplate: function() {
			return `
            <div class="col-12 col-sm-4 col-md-6">
                <input type="text" class="form-control" placeholder="Seat Type" disabled>
            </div>
            <div class="col-12 col-sm-4 col-md-4">
                <input type="number" class="form-control" placeholder="Price" min="0" disabled>
            </div>
            <div class="col-12 col-sm-4 col-md-2">
                <button type="button" class="btn btn-outline-primary w-100 text-truncate addSeatingRow">Add Seating Type</button>
            </div>
          `;
		}
	});

	// New: Handle form submission with redirection using URL parameters and Base64 encoding for description
	document.getElementById("eventCreationForm").addEventListener("submit", function(e) {
		e.preventDefault();
		var title = document.getElementById("eventTitle").value;
		var price = document.getElementById("eventPrice").value;
		var category = document.getElementById("eventCategory").value;
		var location = document.getElementById("eventLocation").value;
		var description = document.getElementById("eventDescription").value;
		var encodedDescription = btoa(description);
		var queryParams = "title=" + encodeURIComponent(title) +
			"&price=" + encodeURIComponent(price) +
			"&category=" + encodeURIComponent(category) +
			"&location=" + encodeURIComponent(location) +
			"&description=" + encodeURIComponent(encodedDescription);
		window.location.href = "event-details.html?" + queryParams;
	});

	document.addEventListener("DOMContentLoaded", function() {
		const now = new Date();
		const year = now.getFullYear();
		const month = ("0" + (now.getMonth() + 1)).slice(-2);
		const day = ("0" + now.getDate()).slice(-2);
		const hours = ("0" + now.getHours()).slice(-2);
		const minutes = ("0" + now.getMinutes()).slice(-2);
		
		// Set default date and time for the first event day
		document.getElementById("eventDate0").value = `${year}-${month}-${day}`;
		document.getElementById("eventTime0").value = `${hours}:${minutes}`;
	});
})();