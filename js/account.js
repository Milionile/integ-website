document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const offset = 20;

    // Update active link based on scroll position
    const updateActiveLink = () => {
        const scrollPosition = window.scrollY + offset;
        sections.forEach(section => {
            const { offsetTop, offsetHeight, id } = section;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    };

    // Handle nav link clicks
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
        });
    });

    window.addEventListener('scroll', updateActiveLink);
});

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

    updateSidebarPosition();
});

window.addEventListener('resize', updateSidebarPosition);

// Form enhancements
document.addEventListener('DOMContentLoaded', () => {
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

    // Section highlighting on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const observerOptions = {
        rootMargin: '-20% 0px -80% 0px'
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').includes(entry.target.id)) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => observer.observe(section));
});
