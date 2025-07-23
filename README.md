# 🚀 Rocky Sharaf - Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript featuring dynamic particles, theme switching, and auto-fullscreen functionality.

## ✨ Features

### 🎨 **Design & UI**
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Dark/Light Theme Toggle** - Seamless theme switching with persistent preferences
- **Modern Beige/Brown Theme** - Professional color scheme with CSS variables
- **Smooth Animations** - CSS transitions and keyframe animations
- **3D Hover Effects** - Interactive cards with depth and perspective

### 🌟 **Interactive Elements**
- **Particles.js Background** - Dynamic particle system that adapts to theme
- **Auto-Moving Hero Glow** - Animated background element with bouncing physics
- **Auto-Fullscreen** - Click anywhere to enter fullscreen mode
- **Smooth Scrolling** - Navigation with smooth scroll to sections
- **Mobile Navigation** - Hamburger menu for mobile devices

### 📱 **Sections**
- **Hero Section** - Animated introduction with glowing background
- **Browser Image** - Stylized browser window showcasing the hero content
- **Projects** - Interactive project cards with hover effects
- **Skills** - Categorized skills with visual organization
- **Experience** - Timeline-based work experience with skills tags
- **Education** - Academic background with achievements
- **Contact** - Contact information and social links
- **Footer** - Professional footer with branding

## 🛠️ Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Advanced styling with variables, animations, and responsive design
- **JavaScript (ES6+)** - Interactive functionality and dynamic content
- **Particles.js** - Dynamic background particle system
- **Font Awesome** - Icons for UI elements
- **Google Fonts** - Typography (Inter font family)

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles and responsive design
├── script.js           # JavaScript functionality
├── particles.js        # Particles.js configuration
├── README.md           # This file
└── package-lock.json   # Dependencies (if any)
```

## 🚀 Quick Start

### Option 1: Direct File Opening
1. Download all files to a folder
2. Open `index.html` in your web browser
3. The website will load with all features

### Option 2: Local Server (Recommended)
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 🎯 Key Features Explained

### Theme System
- **CSS Variables** - Centralized color management
- **Local Storage** - Theme preference persistence
- **Smooth Transitions** - Instant theme switching
- **Particle Adaptation** - Particles change color with theme

### Responsive Design
- **Mobile-First** - Optimized for mobile devices
- **Flexible Grid** - CSS Grid and Flexbox layouts
- **Breakpoints** - 768px and 480px responsive breakpoints
- **Touch-Friendly** - Optimized for touch interactions

### Performance Optimizations
- **Minimal Dependencies** - Only essential external libraries
- **Efficient CSS** - Optimized selectors and properties
- **Lazy Loading** - Particles load after page content
- **Smooth Animations** - Hardware-accelerated transforms

## 🎨 Customization

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --bg-primary: #f5f5dc;
    --bg-secondary: #f0e6d2;
    --text-primary: #2c1810;
    --accent-primary: #8b4513;
    /* ... more variables */
}
```

### Content
- **Personal Info** - Update in `index.html`
- **Projects** - Add/remove project cards
- **Experience** - Modify timeline items
- **Skills** - Update skill categories
- **Contact** - Change contact information

### Particles
Configure in `particles.js`:
```javascript
const lightConfig = {
    particles: {
        number: { value: 80 },
        color: { value: "#8b4513" },
        // ... more options
    }
}
```

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🔧 Development

### Adding New Sections
1. Add HTML structure in `index.html`
2. Style with CSS in `styles.css`
3. Add responsive rules in media queries
4. Update navigation if needed

### Modifying Animations
- **CSS Animations** - Edit keyframes in `styles.css`
- **JavaScript Animations** - Modify in `script.js`
- **Particle Effects** - Configure in `particles.js`

## 🚀 Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select main branch as source
4. Your site will be available at `username.github.io/repository-name`

### Other Platforms
- **Netlify** - Drag and drop deployment
- **Vercel** - Git-based deployment
- **Firebase Hosting** - Google's hosting platform
- **AWS S3** - Static website hosting

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Contact

- **Email:** rockysharaf@gmail.com
- **Website:** https://rockysharaf.github.io
- **GitHub:** https://github.com/RockySharaf

---

**Built with ❤️ by Rocky Sharaf** 