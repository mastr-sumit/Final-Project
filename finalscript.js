// Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
    
    // Change icon
    const icon = menuToggle.querySelector('i');
    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close menu on link click
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
        
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Scroll to section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Fixed header on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.padding = '0.5rem 0';
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.padding = '1rem 0';
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 1px 10px rgba(0, 0, 0, 0.1)';
    }
    
    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
});

// Back to top button click
const backToTop = document.querySelector('.back-to-top');
backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Modal
const modal = document.getElementById('bookingModal');
const bookBtn = document.querySelector('.book-btn');
const modalClose = document.querySelector('.modal-close');

bookBtn.addEventListener('click', () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Form submission
const contactForm = document.getElementById('contactForm');
const bookingForm = document.getElementById('bookingForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for booking! We will confirm your appointment shortly.');
    bookingForm.reset();
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Testimonial slider functionality
const testimonials = [
    {
        text: "Elegant Salon has been my go-to place for years. The team is incredibly talented and always makes me feel welcome. My hair has never looked better!",
        author: "Amanda K.",
        role: "Regular Client"
    },
    {
        text: "I had my bridal hair and makeup done here and couldn't have been happier. The stylists understood exactly what I wanted and made me feel so beautiful on my special day.",
        author: "Jessica R.",
        role: "Bride"
    },
    {
        text: "The nail technicians here are true artists! I always leave with perfect nails that last for weeks. The salon is clean, relaxing, and the staff is so friendly.",
        author: "Michael T.",
        role: "Loyal Customer"
    }
];

let currentTestimonial = 0;
const testimonialText = document.querySelector('.testimonial-text');
const testimonialAuthor = document.querySelector('.testimonial-author');
const testimonialRole = document.querySelector('.testimonial-role');

function changeTestimonial() {
    const { text, author, role } = testimonials[currentTestimonial];
    
    testimonialText.textContent = text;
    testimonialAuthor.textContent = author;
    testimonialRole.textContent = role;
    
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
}

// Change testimonial every 5 seconds
setInterval(changeTestimonial, 5000);