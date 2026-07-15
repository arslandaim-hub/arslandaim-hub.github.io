document.addEventListener('DOMContentLoaded', () => {
    // Reveal app cards on scroll
    const appCards = document.querySelectorAll('.app-card');

    // Initial state for animation
    appCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });

    const revealCards = () => {
        const triggerBottom = window.innerHeight * 0.85;

        appCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < triggerBottom) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };

    // Run once on load and listen for scroll
    revealCards();
    window.addEventListener('scroll', revealCards);
});
