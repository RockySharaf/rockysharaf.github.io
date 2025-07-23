// Particles.js Configuration
const particlesConfig = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#8b4513"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.8,
      random: false
    },
    size: {
      value: 4,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#8b4513",
      opacity: 0.6,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      }
    }
  },
  retina_detect: true
};

// Dark mode particles configuration
const darkParticlesConfig = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.4,
      random: false
    },
    size: {
      value: 3,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.3,
      width: 1
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      }
    }
  },
  retina_detect: true
};

// Initialize particles
let particlesInstance = null;

function initParticles() {
  console.log('Attempting to initialize particles...');
  
  // Wait for particles.js to load
  if (typeof particlesJS !== 'undefined') {
    const currentTheme = document.body.getAttribute('data-theme') || 'light';
    const config = currentTheme === 'dark' ? darkParticlesConfig : particlesConfig;
    
    console.log('Initializing particles with theme:', currentTheme);
    console.log('Particles container:', document.getElementById('particles-js'));
    
    try {
      particlesJS('particles-js', config);
      console.log('Particles initialized successfully');
    } catch (error) {
      console.error('Error initializing particles:', error);
    }
  } else {
    console.log('particlesJS not loaded yet, retrying...');
    // Retry after a short delay if particles.js hasn't loaded yet
    setTimeout(initParticles, 500);
  }
}

// Update particles when theme changes
function updateParticles() {
  const currentTheme = document.body.getAttribute('data-theme');
  const config = currentTheme === 'dark' ? darkParticlesConfig : particlesConfig;
  
  console.log('Updating particles with theme:', currentTheme);
  
  if (typeof particlesJS !== 'undefined') {
    // Destroy existing instance if it exists
    if (window.pJSDom && window.pJSDom.length > 0) {
      window.pJSDom[0].pJS.fn.vendors.destroypJS();
      window.pJSDom = [];
    }
    
    particlesJS('particles-js', config);
  }
}

// Export functions for use in main script
window.particlesUtils = {
  initParticles,
  updateParticles
}; 