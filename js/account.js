// Sidebar position management
let animationFrameId = null;

const updateSidebarPosition = () => {
    const navbar = document.querySelector('.sticky-top');
    const sidebar = document.getElementById('desktopSidebar');
    if (navbar && sidebar) {
        sidebar.style.top = `${navbar.getBoundingClientRect().height}px`;
    }
};

const startSidebarTracking = () => {
    if (!animationFrameId) {
        const track = () => {
            updateSidebarPosition();
            animationFrameId = requestAnimationFrame(track);
        };
        track();
    }
};

const stopSidebarTracking = () => {
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
    }
};

// Initialize observers and event listeners
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.sticky-top');
    if (navbar) {
        new MutationObserver(updateSidebarPosition).observe(navbar, {
            attributes: true,
            childList: true,
            subtree: true,
            characterData: true
        });
    }

    document.querySelectorAll('.collapse').forEach(collapse => {
        ['show', 'hide'].forEach(event => 
            collapse.addEventListener(`${event}.bs.collapse`, startSidebarTracking));
        ['shown', 'hidden'].forEach(event => 
            collapse.addEventListener(`${event}.bs.collapse`, stopSidebarTracking));
    });

    // Handle same as home address checkbox
    const sameAsHomeCheckbox = document.getElementById('sameAsHome');
    const shippingFields = document.querySelectorAll('#shippingAddress input:not(#sameAsHome)');
    
    if(sameAsHomeCheckbox) {
        sameAsHomeCheckbox.addEventListener('change', (e) => {
            shippingFields.forEach(field => {
                field.disabled = e.target.checked;
                if(e.target.checked) {
                    const homeField = document.getElementById(field.id.replace('shipping', 'home'));
                    if(homeField) {
                        field.value = homeField.value;
                    }
                }
            });
        });
    }

    updateSidebarPosition();
});

window.addEventListener('resize', updateSidebarPosition);
