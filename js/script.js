// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Accordion functionality
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const accordionItem = header.parentElement;
        const accordionContent = header.nextElementSibling;
        const icon = header.querySelector('i');

        // Close all other accordion items
        document.querySelectorAll('.accordion-item').forEach(item => {
            if (item !== accordionItem) {
                item.querySelector('.accordion-content').classList.remove('active');
                item.querySelector('i').classList.remove('fa-minus');
                item.querySelector('i').classList.add('fa-plus');
            }
        });

        // Toggle current item
        accordionContent.classList.toggle('active');
        if (accordionContent.classList.contains('active')) {
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-minus');
        } else {
            icon.classList.remove('fa-minus');
            icon.classList.add('fa-plus');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider-container');
    const dots = document.querySelectorAll('.slider-dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;
    const testimonialCount = document.querySelectorAll('.testimonial').length;

    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 25}%)`;
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    // Dot click navigation
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            currentIndex = parseInt(this.getAttribute('data-slide'));
            updateSlider();
        });
    });

    // Arrow navigation
    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonialCount - 1;
        updateSlider();
    });

    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex < testimonialCount - 1) ? currentIndex + 1 : 0;
        updateSlider();
    });

    // Optional: Auto-slide
    setInterval(() => {
        currentIndex = (currentIndex < testimonialCount - 1) ? currentIndex + 1 : 0;
        updateSlider();
    }, 5000);
});

// Form submission
const messageForm = document.getElementById('messageForm');
messageForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', { email, message });
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    messageForm.reset();
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();