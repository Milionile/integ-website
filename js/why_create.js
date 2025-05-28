document.addEventListener('DOMContentLoaded', () => {
    function updateButtonBehavior() {
        const accountDropdown = document.getElementById('accountDropdown');
        const isLoggedIn = accountDropdown?.querySelector('.dropdown-item[href="#logout"]') !== null;
        const params = new URLSearchParams(window.location.search);
        const isPlanner = params.get('planner') === 'true';

        const startHostingBtn = document.getElementById('start-hosting-btn');
        const getStartedBtn = document.getElementById('get-started-btn');

        // Remove existing event listeners
        startHostingBtn.replaceWith(startHostingBtn.cloneNode(true));
        getStartedBtn.replaceWith(getStartedBtn.cloneNode(true));

        // Get fresh references after replacement
        const newStartHostingBtn = document.getElementById('start-hosting-btn');
        const newGetStartedBtn = document.getElementById('get-started-btn');

        if (isLoggedIn && isPlanner) {
            newStartHostingBtn.href = 'create.html';
            newGetStartedBtn.href = 'create.html';
        } else {
            const alertMessage = 'Please log in and select "Creating and managing events" to access this feature.';
            const handleClick = (e) => {
                e.preventDefault();
                alert(alertMessage);
            };
            newStartHostingBtn.addEventListener('click', handleClick);
            newGetStartedBtn.addEventListener('click', handleClick);
        }
    }

    // Initial check
    updateButtonBehavior();

    // Watch for changes in the dropdown content
    const observer = new MutationObserver(() => {
        updateButtonBehavior();
    });

    const accountDropdown = document.getElementById('accountDropdown');
    observer.observe(accountDropdown, { 
        subtree: true, 
        childList: true 
    });
});