// home.js - Home page specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Add animation to feature cards on hover
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.feature-icon i');
            if (icon) {
                icon.style.transform = 'scale(1.2)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.feature-icon i');
            if (icon) {
                icon.style.transform = 'scale(1)';
            }
        });
    });
    
    // Add click animation to CTA button
    const ctaButton = document.querySelector('.cta-section .btn');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            // Add a ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            // Remove ripple after animation completes
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    }
    
    // Add a typing effect to the hero title
    const heroTitle = document.querySelector('.page-title');
    if (heroTitle && !sessionStorage.getItem('titleAnimated')) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                heroTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            } else {
                sessionStorage.setItem('titleAnimated', 'true');
            }
        };
        
        // Start typing effect after a brief delay
        setTimeout(typeWriter, 500);
    }
});