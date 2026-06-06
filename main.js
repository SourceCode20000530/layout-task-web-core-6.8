const tabs = document.querySelectorAll('.tab');

const brands_tab = document.getElementById("brands");

// Default
window.document.addEventListener('DOMContentLoaded', () => {
    brands_tab.classList.add('active');
});

// After click
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(item => {
            item.classList.remove('active');
        })
        tab.classList.add('active');
    });
})