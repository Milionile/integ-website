import { events } from './event-data.js';
import { categories } from './category-data.js';

async function loadTemplate() {
    const response = await fetch('../templates/event_card.html');
    const template = await response.text();
    return template;
}

async function renderCategory() {
    // Get category from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const categoryId = urlParams.get('category') || 'featured';
    
    // Get category data
    const category = categories[categoryId];
    if (!category) {
        console.error('Category not found');
        return;
    }

    // Update page title and description
    document.title = `UEvents - ${category.name}`;
    document.querySelector('.breadcrumb-item.active').textContent = category.name;
    document.querySelector('h1.display-4').textContent = category.name;
    document.querySelector('p.fs-5').textContent = category.description;

    // Render events
    const container = document.getElementById('eventContainer');
    const templateText = await loadTemplate();
    
    // Filter events for this category
    const categoryEvents = events.filter(event => event.category === categoryId);
    
    categoryEvents.forEach(event => {
        const temp = document.createElement('div');
        temp.innerHTML = templateText;
        
        const card = temp.firstElementChild;
        const img = card.querySelector('#event-image');
        img.src = event.image || 'https://placehold.co/600x400';
        img.alt = `Promotional banner for ${event.title}`;
        img.onerror = () => {
            img.src = 'https://placehold.co/600x400';
        };
        
        card.querySelector('#event-title').textContent = event.title;
        card.querySelector('#event-description').textContent = event.description;
        card.querySelector('#event-link').href = `view_event.html?id=${event.id}`;
        card.querySelector('#event-price').textContent = event.price === 0 ? "Free!" : `₱${event.price.toFixed(2)}`;
        card.querySelector('#event-organizer').textContent = event.organizer;
        
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderCategory);
