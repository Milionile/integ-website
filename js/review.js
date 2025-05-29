document.addEventListener('DOMContentLoaded', function() {
    // Star rating functionality
    const starContainer = document.querySelector('.star-rating');
    const stars = starContainer.querySelectorAll('i');
    let currentRating = 0;

    // Add hover effect and click handling for stars
    stars.forEach((star, index) => {
        // Hover effects
        star.addEventListener('mouseover', () => {
            resetStars();
            highlightStars(index);
        });

        // Click handling
        star.addEventListener('click', () => {
            currentRating = index + 1;
            resetStars();
            highlightStars(index);
        });
    });

    // Reset stars on mouse leave
    starContainer.addEventListener('mouseleave', () => {
        resetStars();
        if (currentRating > 0) {
            highlightStars(currentRating - 1);
        }
    });

    // Helper function to highlight stars
    function highlightStars(index) {
        for (let i = 0; i <= index; i++) {
            stars[i].classList.remove('far');
            stars[i].classList.add('fas');
        }
    }

    // Helper function to reset stars
    function resetStars() {
        stars.forEach(star => {
            star.classList.remove('fas');
            star.classList.add('far');
        });
    }

    // Handle form submission
    const reviewForm = document.getElementById('reviewForm');
    reviewForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            rating: currentRating,
            title: document.getElementById('reviewTitle').value,
            text: document.getElementById('reviewText').value,
            type: document.getElementById('reviewType').value
        };

        // Here you would typically send this data to your backend
        console.log('Review submitted:', formData);
        
        // Close modal and reset form
        const modal = bootstrap.Modal.getInstance(document.getElementById('reviewModal'));
        modal.hide();
        reviewForm.reset();
        currentRating = 0;
        resetStars();
    });
});