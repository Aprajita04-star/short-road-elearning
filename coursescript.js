document.addEventListener('DOMContentLoaded', function() {
    const courseCards = document.querySelectorAll('.course-card');

    courseCards.forEach(card => {
        card.addEventListener('mouseover', function() {
            card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        });

        card.addEventListener('mouseout', function() {
            card.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
        });
    });
});
