import { events } from './data/event-data.js';

class EventsManager {
    constructor() {
        this.allEvents = events;
        this.filteredEvents = [...events];
        this.currentFilters = {
            search: '',
            category: '',
            price: '',
            date: '',
            sort: 'date'
        };
        
        this.init();
    }

    init() {
        this.bindEventListeners();
        this.renderEvents();
        this.updateEventCount();
    }

    bindEventListeners() {
        // Search inputs
        document.getElementById('searchInput').addEventListener('input', (e) => {
            this.currentFilters.search = e.target.value.toLowerCase();
            this.applyFilters();
        });

        document.getElementById('headerSearchInput').addEventListener('input', (e) => {
            this.currentFilters.search = e.target.value.toLowerCase();
            document.getElementById('searchInput').value = e.target.value;
            this.applyFilters();
        });

        // Header search form
        document.getElementById('headerSearchForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.currentFilters.search = document.getElementById('headerSearchInput').value.toLowerCase();
            document.getElementById('searchInput').value = document.getElementById('headerSearchInput').value;
            this.applyFilters();
        });

        // Category filter
        document.getElementById('categoryFilter').addEventListener('change', (e) => {
            this.currentFilters.category = e.target.value;
            this.applyFilters();
        });

        // Price filter
        document.querySelectorAll('input[name="priceFilter"]').forEach(radio => {
            radio.addEventListener('change', (e) => {
                this.currentFilters.price = e.target.value;
                this.applyFilters();
            });
        });

        // Date filter
        document.querySelectorAll('input[name="dateFilter"]').forEach(radio => {
            radio.addEventListener('change', (e) => {
                this.currentFilters.date = e.target.value;
                this.applyFilters();
            });
        });

        // Sort filter
        document.getElementById('sortFilter').addEventListener('change', (e) => {
            this.currentFilters.sort = e.target.value;
            this.applyFilters();
        });

        // Clear filters
        document.getElementById('clearFilters').addEventListener('click', () => {
            this.clearAllFilters();
        });
    }

    applyFilters() {
        let filtered = [...this.allEvents];

        // Apply search filter
        if (this.currentFilters.search) {
            filtered = filtered.filter(event => 
                event.title.toLowerCase().includes(this.currentFilters.search) ||
                event.organizer.toLowerCase().includes(this.currentFilters.search) ||
                event.description.toLowerCase().includes(this.currentFilters.search)
            );
        }

        // Apply category filter
        if (this.currentFilters.category) {
            filtered = filtered.filter(event => event.category === this.currentFilters.category);
        }

        // Apply price filter
        if (this.currentFilters.price) {
            filtered = filtered.filter(event => {
                switch (this.currentFilters.price) {
                    case 'free':
                        return event.price === 0;
                    case 'under1000':
                        return event.price > 0 && event.price < 1000;
                    case '1000to5000':
                        return event.price >= 1000 && event.price <= 5000;
                    case 'over5000':
                        return event.price > 5000;
                    default:
                        return true;
                }
            });
        }

        // Apply date filter
        if (this.currentFilters.date) {
            const now = new Date();
            const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            
            filtered = filtered.filter(event => {
                const eventDate = new Date(event.date);
                
                switch (this.currentFilters.date) {
                    case 'today':
                        return eventDate.toDateString() === today.toDateString();
                    case 'thisweek':
                        const weekFromNow = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
                        return eventDate >= today && eventDate <= weekFromNow;
                    case 'thismonth':
                        return eventDate.getMonth() === now.getMonth() && eventDate.getFullYear() === now.getFullYear();
                    case 'nextmonth':
                        const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
                        return eventDate.getMonth() === nextMonth.getMonth() && eventDate.getFullYear() === nextMonth.getFullYear();
                    default:
                        return true;
                }
            });
        }

        // Apply sorting
        filtered.sort((a, b) => {
            switch (this.currentFilters.sort) {
                case 'date':
                    return new Date(a.date) - new Date(b.date);
                case 'price-low':
                    return a.price - b.price;
                case 'price-high':
                    return b.price - a.price;
                case 'title':
                    return a.title.localeCompare(b.title);
                default:
                    return 0;
            }
        });

        this.filteredEvents = filtered;
        this.renderEvents();
        this.updateEventCount();
    }

    renderEvents() {
        const container = document.getElementById('eventsContainer');
        const noResults = document.getElementById('noResults');

        if (this.filteredEvents.length === 0) {
            container.innerHTML = '';
            noResults.classList.remove('d-none');
            return;
        }

        noResults.classList.add('d-none');
        
        container.innerHTML = this.filteredEvents.map(event => this.createEventCard(event)).join('');
    }

    createEventCard(event) {
        const formattedPrice = event.price === 0 ? 'Free!' : `₱${event.price.toLocaleString()}.00`;
        const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        return `
            <div class="col">
                <div class="card event-card h-100">
                    <img class="card-img-top object-fit-cover" src="${event.image}" alt="${event.title}" style="height: 200px;">
                    <div class="card-body d-flex flex-column mh-50">
                        <h5 class="card-title text-center">${event.title}</h5>
                        <p class="card-text text-truncate-3">${event.description}</p>
                        <div class="mt-auto">
                            <p class="card-text"><small class="text-muted">${formattedDate}</small></p>
                            <p class="card-text"><small class="text-muted">${event.location}</small></p>
                            <a href="view_event.html?id=${event.id}" class="btn btn-primary mx-auto d-block">Learn More</a>
                        </div>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><strong>Price:</strong> ${formattedPrice}</li>
                        <li class="list-group-item text-truncate-3">
                            <strong>Organizer:</strong> ${event.organizer}
                        </li>
                    </ul>
                </div>
            </div>
        `;
    }

    updateEventCount() {
        const count = this.filteredEvents.length;
        const total = this.allEvents.length;
        const countElement = document.getElementById('eventCount');
        
        if (count === total) {
            countElement.textContent = `Showing all ${total} events`;
        } else {
            countElement.textContent = `Showing ${count} of ${total} events`;
        }
    }

    clearAllFilters() {
        // Reset all filter values
        this.currentFilters = {
            search: '',
            category: '',
            price: '',
            date: '',
            sort: 'date'
        };

        // Reset form elements
        document.getElementById('searchInput').value = '';
        document.getElementById('headerSearchInput').value = '';
        document.getElementById('categoryFilter').value = '';
        document.getElementById('sortFilter').value = 'date';
        
        // Reset radio buttons
        document.getElementById('priceAll').checked = true;
        document.getElementById('dateAll').checked = true;

        // Apply filters (which will show all events)
        this.applyFilters();
    }
}

// Initialize the events manager when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new EventsManager();
});
