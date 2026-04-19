document.addEventListener("DOMContentLoaded", () => {
    const flowItems = document.querySelectorAll(".flow-item");

    flowItems.forEach((item, index) => {
        // Add delay based on index to stagger animations
        item.style.animationDelay = `${index * 0.3}s`;
        item.classList.add("animate");
    });

    // Scroll animation for sections
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const flowItemsSection = document.querySelectorAll(".flow-item");
    flowItemsSection.forEach(item => {
        observer.observe(item);
    });
});
