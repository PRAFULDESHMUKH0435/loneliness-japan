// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Language toggle functionality
document.querySelector('.language-toggle').addEventListener('click', function() {
    // This would implement language switching functionality
    alert('Language toggle functionality would be implemented here');
});

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Mobile menu toggle (for future implementation)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('mobile-active');
}

// Add fade-in animation on scroll
function fadeInOnScroll() {
    const elements = document.querySelectorAll('.feature-card, .activity-card, .about-content');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('fade-in');
        }
    });
}

// Initialize fade-in animation
window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);

// Add interactive hover effects for cards
document.querySelectorAll('.feature-card, .activity-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// CTA button animation
document.querySelector('.cta-button').addEventListener('click', function(e) {
    // Create ripple effect
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
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
});

// Initialize all interactive features when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('No More Lonely website loaded successfully!');
    
    // Add loading animation
    document.body.classList.add('loaded');
    
    // Preload images for better performance
    const imageUrls = [
        // Add any image URLs here when you replace placeholders with real images
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
});

// Form validation (for future contact forms)
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('error');
            isValid = false;
        } else {
            input.classList.remove('error');
        }
    });
    
    return isValid;
}

// Newsletter signup (placeholder for future implementation)
function handleNewsletterSignup(email) {
    if (email && email.includes('@')) {
        alert('Thank you for subscribing to our newsletter!');
        return true;
    } else {
        alert('Please enter a valid email address.');
        return false;
    }
}

// Social media sharing functions (for future use)
function shareOnSocialMedia(platform, url = window.location.href, text = 'Join our community to combat loneliness in Japan!') {
    let shareUrl = '';
    
    switch(platform) {
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
            break;
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
            break;
        case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
            break;
    }
    
    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }
}

// Add custom cursor effect for interactive elements
document.querySelectorAll('button, .cta-button, .feature-card, .activity-card').forEach(element => {
    element.addEventListener('mouseenter', function() {
        document.body.style.cursor = 'pointer';
    });
    
    element.addEventListener('mouseleave', function() {
        document.body.style.cursor = 'default';
    });
});