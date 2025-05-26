function updateDropdownContent(templatePath, errorMessage) {
    return fetch(templatePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(html => {
            const accountDropdown = document.getElementById('accountDropdown');
            accountDropdown.innerHTML = html;
            return html;
        })
        .catch(error => {
            console.error(`Error: ${errorMessage}`, error);
            alert(`${errorMessage}. Please try again later.`);
        });
}

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    updateDropdownContent('/templates/login/logged_in_dropdown.html', 'Failed to log in')
        .then(() => {
            const loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
            loginModal.hide();
        });
});

document.addEventListener('click', function(e) {
    if (e.target.matches('#accountDropdown .dropdown-item[href="#logout"]')) {
        e.preventDefault();
        updateDropdownContent('/templates/login/logged_out_dropdown.html', 'Failed to log out');
    }
});