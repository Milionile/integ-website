import { events } from './data/event-data.js';

/**
 * Parse URL parameters to get ticket purchase information
 */
function getTicketDataFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const ticketData = {};
    
    // Get all possible parameters
    if (params.get('eventId')) ticketData.eventId = params.get('eventId');
    if (params.get('quantity')) ticketData.quantity = parseInt(params.get('quantity'));
    if (params.get('seatType')) ticketData.seatType = params.get('seatType');
    if (params.get('selectedSeat')) ticketData.selectedSeat = params.get('selectedSeat');
    if (params.get('eventDay')) ticketData.eventDay = params.get('eventDay');
    
    return Object.keys(ticketData).length > 0 ? ticketData : null;
}

/**
 * Format date for display
 */
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

/**
 * Load and populate the bought event card template
 */
async function loadEventCardTemplate() {
    try {
        const response = await fetch('../templates/bought_event_card.html');
        if (!response.ok) {
            throw new Error('Failed to load template');
        }
        return await response.text();
    } catch (error) {
        console.error('Error loading template:', error);
        return null;
    }
}

/**
 * Create a bought event card instance
 */
function createEventCard(event, ticketData, template) {
    // Create a temporary container to parse the template
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = template;
    
    // Get the card element
    const cardElement = tempDiv.firstElementChild;
    
    // Generate unique IDs for this card instance
    const uniqueId = `event-${event.id}-${Date.now()}`;
    const elements = {
        image: cardElement.querySelector('#event-image'),
        title: cardElement.querySelector('#event-title'),
        location: cardElement.querySelector('#event-location'),
        date: cardElement.querySelector('#event-date'),
        link: cardElement.querySelector('#event-link'),
        organizer: cardElement.querySelector('#event-organizer'),
        quantity: cardElement.querySelector('#event-quantity'),
        dayItem: cardElement.querySelector('#event-day-item'),
        day: cardElement.querySelector('#event-day'),
        seatTypeItem: cardElement.querySelector('#event-seat-type-item'),
        seatType: cardElement.querySelector('#event-seat-type'),
        seatItem: cardElement.querySelector('#event-seat-item'),
        seat: cardElement.querySelector('#event-seat')
    };
    
    // Update IDs to be unique
    Object.keys(elements).forEach(key => {
        if (elements[key]) {
            const currentId = elements[key].id;
            if (currentId) {
                elements[key].id = `${currentId}-${uniqueId}`;
            }
        }
    });
    
    // Populate the card with event data
    if (elements.image) {
        elements.image.src = event.image || 'https://placehold.co/600x400';
        elements.image.alt = event.title;
        elements.image.onerror = () => {
            elements.image.src = 'https://placehold.co/600x400';
        };
    }
    
    if (elements.title) {
        elements.title.textContent = event.title;
    }
    
    if (elements.location) {
        elements.location.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${event.location}`;
    }
    
    if (elements.date) {
        const displayDate = ticketData.eventDay || event.date;
        elements.date.innerHTML = `<i class="fa-solid fa-calendar"></i> ${formatDate(displayDate)}`;
    }
    
    if (elements.link) {
        elements.link.href = `view_event.html?id=${event.id}`;
    }
    
    if (elements.organizer) {
        elements.organizer.textContent = event.organizer;
    }
    
    if (elements.quantity) {
        elements.quantity.textContent = ticketData.quantity || 1;
    }
    
    // Show event day if it's a multi-day event and a specific day was selected
    if (ticketData.eventDay && elements.dayItem && elements.day) {
        elements.dayItem.classList.remove('d-none');
        elements.day.textContent = formatDate(ticketData.eventDay);
    }
    
    // Show seat type if applicable
    if (ticketData.seatType && elements.seatTypeItem && elements.seatType) {
        elements.seatTypeItem.classList.remove('d-none');
        elements.seatType.textContent = ticketData.seatType;
    }
    
    // Show specific seat if applicable
    if (ticketData.selectedSeat && elements.seatItem && elements.seat) {
        elements.seatItem.classList.remove('d-none');
        elements.seat.textContent = ticketData.selectedSeat;
    }
    
    return cardElement;
}

/**
 * Update the order count display
 */
function updateOrderCount(count) {
    const orderAmountElement = document.getElementById('order-amount');
    if (orderAmountElement) {
        orderAmountElement.textContent = count;
    }
}

/**
 * Show or hide the empty state message
 */
function toggleEmptyState(hasOrders) {
    const boughtEventsContainer = document.getElementById('boughtEventsContainer');
    const emptyStateDiv = boughtEventsContainer.nextElementSibling;
    
    if (hasOrders) {
        boughtEventsContainer.classList.remove('d-none');
        if (emptyStateDiv) {
            emptyStateDiv.style.display = 'none';
        }
    } else {
        boughtEventsContainer.classList.add('d-none');
        if (emptyStateDiv) {
            emptyStateDiv.style.display = 'block';
        }
    }
}

/**
 * Main function to initialize the ticket page
 */
async function initializeTicketPage() {
    const ticketData = getTicketDataFromUrl();
    
    if (!ticketData || !ticketData.eventId) {
        // No ticket data, show empty state
        toggleEmptyState(false);
        updateOrderCount(0);
        return;
    }
    
    // Find the event
    const event = events.find(e => e.id === ticketData.eventId);
    if (!event) {
        console.error('Event not found:', ticketData.eventId);
        toggleEmptyState(false);
        updateOrderCount(0);
        return;
    }
    
    // Load the template
    const template = await loadEventCardTemplate();
    if (!template) {
        console.error('Failed to load event card template');
        return;
    }
    
    // Create the event card
    const eventCard = createEventCard(event, ticketData, template);
    
    // Add the card to the container
    const boughtEventsContainer = document.getElementById('boughtEventsContainer');
    if (boughtEventsContainer) {
        boughtEventsContainer.innerHTML = ''; // Clear any existing content
        boughtEventsContainer.appendChild(eventCard);
        
        // Show the container and hide empty state
        toggleEmptyState(true);
        updateOrderCount(1);
    }
}

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', initializeTicketPage);
