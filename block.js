// Highlight branches when clicked
document.querySelectorAll('.branch').forEach(branch => {
    branch.addEventListener('click', () => {
        alert(`You selected: ${branch.querySelector('h2').innerText}`);
    });
});
