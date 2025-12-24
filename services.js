// services.js - Services page specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effect to pricing cards
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const price = this.querySelector('.price');
            if (price) {
                price.style.transform = 'scale(1.1)';
                price.style.transition = 'transform 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const price = this.querySelector('.price');
            if (price) {
                price.style.transform = 'scale(1)';
            }
        });
    });
    
    // Add animation to process steps
    const processSteps = document.querySelectorAll('.process-step');
    processSteps.forEach(step => {
        step.addEventListener('mouseenter', function() {
            const stepNumber = this.querySelector('.step-number');
            if (stepNumber) {
                stepNumber.style.transform = 'rotate(360deg)';
                stepNumber.style.transition = 'transform 0.6s ease';
            }
        });
        
        step.addEventListener('mouseleave', function() {
            const stepNumber = this.querySelector('.step-number');
            if (stepNumber) {
                stepNumber.style.transform = 'rotate(0deg)';
            }
        });
    });
    
    // Add smooth scroll to pricing section when clicking pricing cards CTA
    const pricingButtons = document.querySelectorAll('.pricing-card .btn');
    pricingButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // If the button is inside a pricing card, we don't need to do anything special
            // as it's already a link to the contact page
            // But we can add a small animation
            this.classList.add('clicked');
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 300);
        });
    });
    
    // Add a visual indicator for service items on click
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            serviceItems.forEach(i => i.classList.remove('active'));
            // Add active class to clicked item
            this.classList.add('active');
        });
    });
});