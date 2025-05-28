import { events } from './data/event-data.js';
import { categories } from './data/category-data.js';

async function loadTemplate() {
    try {
        const response = await fetch('../templates/event_card.html');
        if (!response.ok) throw new Error('Failed to load template');
        return await response.text();
    } catch (error) {
        console.error('Error loading template:', error);
        return null;
    }
}

function populateEventCard(card, event) {
    const img = card.querySelector('#event-image');
    if (img) {
        img.src = event.image || 'https://placehold.co/600x400';
        img.alt = `Promotional banner for ${event.title}`;
        img.onerror = () => img.src = 'https://placehold.co/600x400';
    }

    const elements = {
        '#event-title': event.title,
        '#event-description': event.description,
        '#event-link': `view_event.html?id=${event.id}`,
        '#event-price': event.price === 0 ? "Free!" : `₱${event.price.toFixed(2)}`,
        '#event-organizer': event.organizer
    };

    Object.entries(elements).forEach(([selector, value]) => {
        const element = card.querySelector(selector);
        if (element) {
            selector === '#event-link' ? element.href = value : element.textContent = value;
        }
    });
}

async function renderCategory() {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryId = urlParams.get('category') || 'featured';
    
    const category = categories[categoryId];
    if (!category) {
        console.error(`Category '${categoryId}' not found`);
        return;
    }

    const elements = {
        title: document.title = `UEvents - ${category.name}`,
        breadcrumb: document.querySelector('.breadcrumb-item.active'),
        header: document.querySelector('h1.display-4'),
        description: document.querySelector('p.fs-5'),
        container: document.getElementById('eventContainer')
    };

    if (!elements.container) {
        console.error('Event container not found');
        return;
    }

    Object.entries(elements).forEach(([key, element]) => {
        if (element && key !== 'title' && key !== 'container') {
            element.textContent = key === 'description' ? category.description : category.name;
        }
    });

    const templateText = await loadTemplate();
    if (!templateText) return;

    const template = document.createElement('template');
    template.innerHTML = templateText;
    
    const categoryEvents = events.filter(event => event.category === categoryId);
    categoryEvents.forEach(event => {
        const card = template.content.cloneNode(true).firstElementChild;
        populateEventCard(card, event);
        elements.container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderCategory);
