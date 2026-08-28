document.addEventListener('DOMContentLoaded', () => {
    // 1. Reveal Hero Section immediately on load
    const heroPanel = document.querySelector('.hero-content');
    if (heroPanel) {
        heroPanel.style.opacity = '0';
        heroPanel.style.transform = 'translateY(20px)';
        
        // Slight delay for a smoother entrance
        setTimeout(() => {
            heroPanel.style.transition = 'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)';
            heroPanel.style.opacity = '1';
            heroPanel.style.transform = 'translateY(0)';
        }, 150);
    }

    // 2. High-performance scroll reveal using Intersection Observer
    const animatedElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null, // use viewport
        rootMargin: '0px',
        threshold: 0.15 // trigger when 15% of the element is visible
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once it has faded in to improve performance
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(element => {
        scrollObserver.observe(element);
    });
});
