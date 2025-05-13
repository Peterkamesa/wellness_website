document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Accordion (Single Implementation)
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement;
            const accordionContent = header.nextElementSibling;
            const icon = header.querySelector('i');

            // Close all other items
            document.querySelectorAll('.accordion-item').forEach(item => {
                if (item !== accordionItem) {
                    item.querySelector('.accordion-content').classList.remove('active');
                    const otherIcon = item.querySelector('i');
                    if (otherIcon) {
                        otherIcon.classList.replace('fa-minus', 'fa-plus');
                    }
                }
            });

            // Toggle current item
            accordionContent.classList.toggle('active');
            if (icon) {
                icon.classList.toggle('fa-plus');
                icon.classList.toggle('fa-minus');
            }
        });
    });

    // Slider (Conditional)
    const slider = document.querySelector('.slider-container');
    if (slider) {
        const dots = document.querySelectorAll('.slider-dot');
        const prevBtn = document.querySelector('.prev');
        const nextBtn = document.querySelector('.next');
        let currentIndex = 0;
        const testimonialCount = document.querySelectorAll('.testimonial').length;

        function updateSlider() {
            slider.style.transform = `translateX(-${currentIndex * 100}%)`; // Updated to 100% per slide
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        dots.forEach(dot => {
            dot.addEventListener('click', function() {
                currentIndex = parseInt(this.getAttribute('data-slide'));
                updateSlider();
            });
        });

        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonialCount - 1;
                updateSlider();
            });
            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex < testimonialCount - 1) ? currentIndex + 1 : 0;
                updateSlider();
            });
        }

        setInterval(() => {
            currentIndex = (currentIndex < testimonialCount - 1) ? currentIndex + 1 : 0;
            updateSlider();
        }, 5000);
    }

    // Form Submission
    const messageForm = document.getElementById('messageForm');
    if (messageForm) {
        messageForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            console.log('Form submitted:', { email, message });
            alert('Thank you for your message! We will get back to you soon.');
            messageForm.reset();
        });
    }

    // Footer Year
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});