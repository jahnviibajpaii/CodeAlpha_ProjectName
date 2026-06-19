document.addEventListener("DOMContentLoaded", () => {

    // 1. High Performance JS Typewriter Script Engine
    const wordsArray = [
        "Building intelligent solutions with code, data, and creativity.",
        "Engineering neural architectures and deep interactive systems.",
        "Developing low-latency pipelines and fluid front-end states."
    ];
    
    let wordIndex = 0;
    let characterCount = 0;
    let isDeleting = false;
    const typewriterElement = document.getElementById("typewriter");

    function executeTypewriterLoop() {
        const currentFullWord = wordsArray[wordIndex];
        
        if (isDeleting) {
            typewriterElement.textContent = currentFullWord.substring(0, characterCount - 1);
            characterCount--;
        } else {
            typewriterElement.textContent = currentFullWord.substring(0, characterCount + 1);
            characterCount++;
        }

        let speedRate = isDeleting ? 35 : 75;

        if (!isDeleting && characterCount === currentFullWord.length) {
            speedRate = 2200; // Hold full sentence frame length visually
            isDeleting = true;
        } else if (isDeleting && characterCount === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % wordsArray.length;
            speedRate = 400; // Delay frame swap rest gap
        }

        setTimeout(executeTypewriterLoop, speedRate);
    }

    // Initialize typewriter cycle
    if (typewriterElement) {
        executeTypewriterLoop();
    }

    // 2. Intersection Observer Script for Structural Smooth Scroll Reveals
    const trackableSections = document.querySelectorAll('.scroll-reveal');
    
    const configurationObserver = {
        threshold: 0.05,
        rootMargin: "0px 0px -40px 0px"
    };

    const viewportTrackingEngine = new IntersectionObserver((entries, observerNode) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active-view');
                observerNode.unobserve(entry.target); // Structural freeze to avoid animation flickering
            }
        });
    }, configurationObserver);

    trackableSections.forEach(sectionBlock => {
        viewportTrackingEngine.observe(sectionBlock);
    });
});