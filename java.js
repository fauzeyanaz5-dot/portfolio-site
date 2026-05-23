document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Production App Loading Architecture
    const loader = document.querySelector('.loader-wrapper');
    if (loader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.classList.add('fade-out');
            }, 400); 
        });
    }

    // 2. Responsive Mobile Navigation Hamburger System
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    const toggleMenu = () => {
        hamburger.classList.toggle('open');
        navMenu.classList.toggle('open');
    };

    hamburger.addEventListener('click', toggleMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('open')) toggleMenu();
        });
    });

    // 3. Dynamic Header Sticky Navigation Scroll Event
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 4. Smooth Anchor Target Link Observer Architecture
    const observerOptions = {
        root: null,
        threshold: 0.25,
        rootMargin: "0px"
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }, observerOptions);

    document.querySelectorAll('section[id]').forEach(section => {
        sectionObserver.observe(section);
    });

    // 5. Native Text Typing Animation Module
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        const words = JSON.parse(typingElement.getAttribute('data-words'));
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 100;

        const typeEngine = () => {
            const currentWord = words[wordIndex];
            if (isDeleting) {
                typingElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
                typeSpeed = 40; 
            } else {
                typingElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
                typeSpeed = 120;
            }

            if (!isDeleting && charIndex === currentWord.length) {
                typeSpeed = 1800; // Delay cycle at word completion boundary
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 400; // Reset delay before typing next keyword loop
            }

            setTimeout(typeEngine, typeSpeed);
        };
        setTimeout(typeEngine, 600);
    }

    // 6. Premium Scroll Reveal Trigger Engine
    const revealElements = document.querySelectorAll('.reveal');
    const skillsSection = document.querySelector('#skills');
    const progressBars = document.querySelectorAll('.progress');

    const revealEngine = () => {
        const triggerBottom = (window.innerHeight / 5) * 4.2;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < triggerBottom) {
                element.classList.add('active');
            }
        });

        // Unique dynamic handler for Skill Metric Progress bars
        if (skillsSection) {
            const skillsTop = skillsSection.getBoundingClientRect().top;
            if (skillsTop < triggerBottom) {
                progressBars.forEach(bar => {
                    // Triggers transition from zero state layout inside CSS variables
                    bar.style.width = bar.parentElement.previousElementSibling.querySelector('.skill-percentage').textContent;
                });
            }
        }
    };

    window.addEventListener('scroll', revealEngine);
    revealEngine(); // Initial execution invocation loop

    // 7. Interactive Testimonial Slider System
    const cards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');
    const track = document.querySelector('.testimonial-track');

    if (track && cards.length > 0) {
        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                const targetIndex = parseInt(e.target.getAttribute('data-index'));
                
                // Track transition positioning metric calculation
                track.style.transform = `translateX(-${targetIndex * 100}%)`;
                
                dots.forEach(d => d.classList.remove('active'));
                cards.forEach(c => c.classList.remove('active'));
                
                e.target.classList.add('active');
                cards[targetIndex].classList.add('active');
            });
        });
    }

    // 8. Dark/Light System Theme Engine Configuration Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle.querySelector('i');
    const htmlElement = document.documentElement;

    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            htmlElement.setAttribute('data-theme', 'light');
            icon.className = 'fas fa-sun';
        } else {
            htmlElement.setAttribute('data-theme', 'dark');
            icon.className = 'fas fa-moon';
        }
    });

    // 9. Back To Top Component Anchor Logic
    const scrollTopBtn = document.getElementById('scroll-top');
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 10. Forms Submission Module Control Hook Simulation
    const form = document.getElementById('portfolio-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you! Your message has been sent successfully (Mock System Interface Activity).');
            form.reset();
        });
    }
});