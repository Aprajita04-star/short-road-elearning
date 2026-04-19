document.addEventListener("DOMContentLoaded", () => {
    const flowItems = document.querySelectorAll(".flow-item");

    // Add smooth scale effect on hover
    flowItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.style.transform = "scale(1.05)";
        });
        item.addEventListener("mouseleave", () => {
            item.style.transform = "scale(1)";
        });
    });

    // Scroll animation for the steps (optional)
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
