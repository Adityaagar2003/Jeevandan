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