// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', currentTheme);

// Update toggle icon based on current theme
function updateToggleIcon() {
    const icon = darkModeToggle.querySelector('i');
    if (body.getAttribute('data-theme') === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        darkModeToggle.classList.add('active');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        darkModeToggle.classList.remove('active');
    }
}

// Toggle dark mode
function toggleDarkMode() {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateToggleIcon();
    
    // Update particles when theme changes
    if (window.particlesUtils) {
        window.particlesUtils.updateParticles();
    }
}

// Event listener for dark mode toggle
darkModeToggle.addEventListener('click', toggleDarkMode);

// Initialize toggle icon
updateToggleIcon();

// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Change icon
    const icon = navToggle.querySelector('i');
    if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = navToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        const icon = navToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Navbar scroll effect - just add shadow on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px var(--shadow-color)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.project-card, .skill-category, .timeline-content, .education-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Set initial body opacity
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    // Auto fullscreen function
    function requestFullscreen() {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
        }
    }
    
    // Try to enter fullscreen after a short delay
    setTimeout(() => {
        // Only request fullscreen if not already in fullscreen
        if (!document.fullscreenElement && 
            !document.webkitFullscreenElement && 
            !document.msFullscreenElement) {
            requestFullscreen();
        }
    }, 1000);
    
    // Initialize particles after a short delay to ensure everything is loaded
    setTimeout(() => {
        if (window.particlesUtils) {
            window.particlesUtils.initParticles();
        } else {
            // Fallback initialization
            console.log('Particles utils not found, trying direct initialization');
            if (typeof particlesJS !== 'undefined') {
                const currentTheme = document.body.getAttribute('data-theme') || 'light';
                const config = currentTheme === 'dark' ? 
                    { particles: { number: { value: 80 }, color: { value: "#ffffff" }, opacity: { value: 0.6 }, size: { value: 4 }, line_linked: { enable: true, color: "#ffffff", opacity: 0.4 } } } :
                    { particles: { number: { value: 80 }, color: { value: "#8b4513" }, opacity: { value: 0.8 }, size: { value: 4 }, line_linked: { enable: true, color: "#8b4513", opacity: 0.6 } } };
                particlesJS('particles-js', config);
            }
        }
    }, 1000);
    
    // Add some interactive effects
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add typing effect to hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Start typing effect after a delay
        setTimeout(typeWriter, 500);
    }
    
    // Fullscreen button functionality
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', () => {
            if (!document.fullscreenElement && 
                !document.webkitFullscreenElement && 
                !document.msFullscreenElement) {
                // Enter fullscreen
                if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen();
                } else if (document.documentElement.webkitRequestFullscreen) {
                    document.documentElement.webkitRequestFullscreen();
                } else if (document.documentElement.msRequestFullscreen) {
                    document.documentElement.msRequestFullscreen();
                }
                fullscreenBtn.innerHTML = '<i class="fas fa-compress"></i>';
                fullscreenBtn.title = 'Exit Fullscreen';
            } else {
                // Exit fullscreen
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
                fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
                fullscreenBtn.title = 'Enter Fullscreen';
            }
        });
        
        // Update button icon when fullscreen state changes
        document.addEventListener('fullscreenchange', updateFullscreenIcon);
        document.addEventListener('webkitfullscreenchange', updateFullscreenIcon);
        document.addEventListener('msfullscreenchange', updateFullscreenIcon);
        
        function updateFullscreenIcon() {
            if (document.fullscreenElement || 
                document.webkitFullscreenElement || 
                document.msFullscreenElement) {
                fullscreenBtn.innerHTML = '<i class="fas fa-compress"></i>';
                fullscreenBtn.title = 'Exit Fullscreen';
            } else {
                fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
                fullscreenBtn.title = 'Enter Fullscreen';
            }
        }
    }
});

// Auto-moving hero glow with random bouncing and proper angles
let glowX = 50; // Start at center
let glowY = 50;
let glowSpeedX = 0.10; // Speed in percentage per frame
let glowSpeedY = 0.10;
let glowDirectionX = 1; // 1 for right, -1 for left
let glowDirectionY = 1; // 1 for down, -1 for up

function moveHeroGlow() {
    const heroGlow = document.querySelector('.hero-glow');
    if (heroGlow) {
        // Update position
        glowX += glowSpeedX * glowDirectionX;
        glowY += glowSpeedY * glowDirectionY;
        
        // Bounce off edges with proper angle reflection
        if (glowX <= 0 || glowX >= 75) {
            glowDirectionX *= -1; // Reverse X direction (bounce)
            // Add slight randomness to Y direction
            if (Math.random() > 0.7) {
                glowDirectionY *= -1;
            }
            // Keep within bounds
            glowX = Math.max(0, Math.min(75, glowX));
        }
        
        if (glowY <= 15 || glowY >= 75) {
            glowDirectionY *= -1; // Reverse Y direction (bounce)
            // Add slight randomness to X direction
            if (Math.random() > 0.7) {
                glowDirectionX *= -1;
            }
            // Keep within bounds
            glowY = Math.max(15, Math.min(75, glowY));
        }
        
        // Apply position
        heroGlow.style.left = `${glowX}%`;
        heroGlow.style.top = `${glowY}%`;
    }
    
    // Continue animation
    requestAnimationFrame(moveHeroGlow);
}

// Start the animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        moveHeroGlow();
    }, 1000);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroGlow = document.querySelector('.hero-glow');
    
    if (hero && heroGlow) {
        const rate = scrolled * -0.5;
        heroGlow.style.transform = `translateY(${rate}px)`;
    }
});

// Add active state to navigation links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add CSS for active navigation state
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--accent-primary) !important;
    }
    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(style); 