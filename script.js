document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.nav-btn');
    const iframe = document.getElementById('html-display');
    const img = document.getElementById('image-display');
    const loading = document.getElementById('loading');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state in UI
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const src = button.getAttribute('data-src');
            const type = button.getAttribute('data-type');

            // Show loading indicator
            loading.classList.remove('hidden');

            if (type === 'html') {
                img.classList.add('hidden');
                iframe.classList.remove('hidden');
                iframe.src = src;
            } else if (type === 'image') {
                iframe.classList.add('hidden');
                img.classList.remove('hidden');
                img.src = src;
            }
        });
    });

    // Hide loading prompt once elements load up
    iframe.addEventListener('load', () => loading.classList.add('hidden'));
    img.addEventListener('load', () => loading.classList.add('hidden'));
});

