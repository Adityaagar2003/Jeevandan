const emoji = document.getElementById('emoji');

emoji.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        emoji.textContent = '🌜'; // Moon emoji for dark mode
    } else {
        emoji.textContent = '🌞'; // Sun emoji for light mode
    }
});

// Ensure the correct emoji is shown on initial load based on the current theme
window.addEventListener('DOMContentLoaded', () => {
    if (document.body.classList.contains('dark-mode')) {
        emoji.textContent = '🌜'; // Moon emoji for dark mode
    } else {
        emoji.textContent = '🌞'; // Sun emoji for light mode
    }
});


// first year
document.addEventListener('click', function(event) {
    const menu = document.getElementById('menu');
    if (!menu.contains(event.target)) {
        document.querySelectorAll('.menu-item').forEach(item => {
            item.classList.remove('active');
            const nested = item.querySelector('.nested');
            if (nested) {
                nested.classList.remove('active');
            }
        });
    }
});

document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function (e) {
        e.stopPropagation();
        let parent = this.parentElement;
        // Close all other nested lists on the same level
        Array.from(parent.children).forEach(child => {
            if (child !== this && child.classList.contains('menu-item')) {
                child.querySelector('.nested').classList.remove('active');
                child.classList.remove('active');
            }
        });
        // Toggle the clicked item
        let nested = this.querySelector('.nested');
        if (nested) {
            nested.classList.toggle('active');
            this.classList.toggle('active');
        }
    });
});


