document.addEventListener('DOMContentLoaded', () => {
    // Reveal app cards and hero content on load/scroll
    const glassPanels = document.querySelectorAll('.glass-panel');

    // Initial state for animation
    glassPanels.forEach((panel, index) => {
        panel.style.opacity = '0';
        panel.style.transform = 'translateY(40px)';
        panel.style.transition = `opacity 0.8s cubic-bezier(0.25, 0.8, 0.25, 1) ${index * 0.1}s, 
                                  transform 0.8s cubic-bezier(0.25, 0.8, 0.25, 1) ${index * 0.1}s`;
    });

    const revealPanels = () => {
        const triggerBottom = window.innerHeight * 0.85;

        glassPanels.forEach(panel => {
            const panelTop = panel.getBoundingClientRect().top;

            if (panelTop < triggerBottom) {
                panel.style.opacity = '1';
                panel.style.transform = 'translateY(0)';
            }
        });
    };

    // Run immediately for the hero section
    setTimeout(revealPanels, 100);
    
    // Listen for scroll for the rest of the page
    window.addEventListener('scroll', revealPanels);
});
