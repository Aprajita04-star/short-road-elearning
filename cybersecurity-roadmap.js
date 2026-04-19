document.addEventListener("DOMContentLoaded", () => {
    const flowItems = document.querySelectorAll(".flow-item");

    flowItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.style.transform = "scale(1.05)";
        });
        item.addEventListener("mouseleave", () => {
            item.style.transform = "scale(1)";
        });
    });
});
