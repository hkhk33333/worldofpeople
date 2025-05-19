// Main JavaScript file for World of People

document.addEventListener('DOMContentLoaded', () => {
    console.log('World of People website loaded!');
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add a scroll animation for the header video
    const videoHeader = document.querySelector('.video-header');
    const headerContent = document.querySelector('.header-content');
    
    if (videoHeader && headerContent) {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            
            // Fade out the header content as user scrolls down
            if (scrollPosition > 50) {
                headerContent.style.opacity = Math.max(1 - scrollPosition / 500, 0);
            } else {
                headerContent.style.opacity = 1;
            }
        });
    }
    
    // Future functionality to be added:
    // - Video playback controls
    // - User authentication
    // - Map integration for location-based browsing
    // - Form handling for participation
}); 