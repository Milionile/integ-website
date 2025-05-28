function updateDropdownContent(templatePath, errorMessage) {
    return fetch(templatePath)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.text();
        })
        .then(html => {
            const accountDropdown = document.getElementById('accountDropdown');
            accountDropdown.innerHTML = html;
            updateMenuVisibility();
            return html;
        })
        .catch(error => {
            console.error(`Error: ${errorMessage}`, error);
            alert(`${errorMessage}. Please try again later.`);
        });
}

function updateMenuVisibility() {
    const params = new URLSearchParams(window.location.search);
    const isAttendee = params.get('attendee') === 'true';
    const isPlanner = params.get('planner') === 'true';

    if (isAttendee) {
        document.getElementById('tickets')?.classList.remove('d-none');
    }
    
    if (isPlanner) {
        document.getElementById('our-services')?.classList.add('d-none');
        document.getElementById('create-events')?.classList.remove('d-none');
        document.getElementById('manage-events')?.classList.remove('d-none');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Handle signup
    document.getElementById('signupForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const isAttendee = document.getElementById('attendeeCheck').checked;
        const isPlanner = document.getElementById('plannerCheck').checked;

        if (!isAttendee && !isPlanner) {
            alert('Please select at least one preference');
            return;
        }

        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set('attendee', isAttendee);
        searchParams.set('planner', isPlanner);
        
        window.history.pushState({}, '', `${window.location.pathname}?${searchParams.toString()}`);
        bootstrap.Modal.getInstance(document.getElementById('signupModal')).hide();
        alert('Signup successful! You can now login.');
    });

    // Handle login
    document.getElementById('loginForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const params = new URLSearchParams(window.location.search);
        
        if (!params.has('attendee') && !params.has('planner')) {
            alert('Please sign up first!');
            return;
        }

        bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();
        updateDropdownContent('../templates/login/logged_in_dropdown.html', 'Failed to log in');
    });
});

// Handle logout
document.addEventListener('click', e => {
    if (e.target.matches('#accountDropdown .dropdown-item[href="#logout"]')) {
        e.preventDefault();
        // Reset menu visibility
        document.getElementById('tickets')?.classList.add('d-none');
        document.getElementById('create-events')?.classList.add('d-none');
        document.getElementById('manage-events')?.classList.add('d-none');
        document.getElementById('our-services')?.classList.remove('d-none');
        // Update dropdown content
        updateDropdownContent('../templates/login/logged_out_dropdown.html', 'Failed to log out');
    }
});