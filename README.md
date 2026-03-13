# 🎮 Warzone Resilience - VR Disaster Training Platform

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://your-username.github.io/warzone-resilience)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![HTML](https://img.shields.io/badge/HTML-5-orange)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS-3-blue)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

> Advanced Virtual Reality disaster management training platform built with HTML, CSS, and JavaScript

![Warzone Resilience Banner](https://via.placeholder.com/1200x400/050816/00fff5?text=Warzone+Resilience)

---

## 🚀 Features

### Core Functionality
- 🎮 **Immersive VR Training Modules** - 6+ disaster scenarios (Earthquake, Flood, Fire, Landslide, etc.)
- 🤖 **AI Disaster Assistant** - Bilingual support (Hindi/English) with instant safety tips
- 🔐 **Admin Control Panel** - Manage users, scenarios, and view analytics
- 📱 **Contact Integration** - Phone, Email, and WhatsApp connectivity
- 💫 **Animated UI** - Smooth animations and interactive elements
- 📊 **Performance Tracking** - Monitor training progress and statistics
- 🌐 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile

### Technical Highlights
- Pure HTML/CSS/JavaScript (No frameworks required)
- Animated background with floating particles
- Modal windows for login/signup
- Real-time notifications system
- Scroll-triggered animations
- Mobile-first responsive design

---

## 📁 Project Structure

```
warzone-resilience/
│
├── index.html          # Main HTML file
│
├── css/
│   └── style.css       # All styles and animations
│
├── js/
│   └── script.js       # All JavaScript functionality
│
├── assets/             # Images and media (optional)
│
└── README.md           # This file
```

---

## 🛠️ Installation & Setup

### Option 1: Direct Download
1. Clone or download this repository
```bash
git clone https://github.com/your-username/warzone-resilience.git
cd warzone-resilience
```

2. Open `index.html` in your browser
```bash
# On Mac/Linux
open index.html

# On Windows
start index.html
```

### Option 2: Local Server (Recommended)
```bash
# Using Python
python -m http.server 8000

# Using PHP
php -S localhost:8000

# Using Node.js
npx http-server
```

Then open: `http://localhost:8000`

---

## 🎯 Usage Guide

### For Regular Users
1. **Browse Modules** - Explore 6+ VR disaster training scenarios
2. **AI Assistant** - Ask safety questions in Hindi or English
3. **Sign Up** - Create account to track progress
4. **Contact** - Reach out via phone, email, or WhatsApp

### For Administrators
1. Click **Admin** in navigation or the 🔐 button (bottom-right)
2. Add new VR scenarios
3. View platform statistics
4. Manage training modules

---

## 🎨 Customization

### Change Colors
Edit CSS variables in `css/style.css`:

```css
:root {
    --primary-cyan: #00fff5;      /* Main accent */
    --primary-magenta: #ff006e;   /* Secondary */
    --warning-orange: #ff5722;    /* Alerts */
    --dark-bg: #0a0e27;           /* Background */
}
```

### Add New Training Module
In `index.html`, add to modules section:

```html
<div class="module-card">
    <div class="module-icon">🌋</div>
    <h3>Volcanic Eruption</h3>
    <p>Learn volcanic emergency protocols</p>
    <ul class="module-features">
        <li>✓ Ash fall protection</li>
        <li>✓ Evacuation routes</li>
    </ul>
    <button class="btn btn-primary">Launch Module</button>
</div>
```

### Customize AI Responses
In `js/script.js`, modify `getAIResponse()` function:

```javascript
if (q.includes('tsunami')) {
    return `
        <strong>🌊 Tsunami Safety Tips:</strong><br>
        1. Move to higher ground immediately<br>
        2. Stay away from beaches<br>
        <!-- Add more tips -->
    `;
}
```

---

## 📞 Contact Information

- **Phone/WhatsApp:** +91 8923781885
- **Email:** support@warzoneresilience.com
- **Website:** [warzoneresilience.com](#)

---

## 🚨 Emergency Contacts (India)

- 📞 **All Emergency:** 112
- 🚒 **Fire Brigade:** 101
- 🚑 **Ambulance:** 102
- 👮 **Police:** 100
- 🌊 **Disaster Management:** 108

---

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | 90+     |
| Firefox | 88+     |
| Safari  | 14+     |
| Edge    | 90+     |
| Opera   | 76+     |

---

## 📱 Responsive Breakpoints

- **Desktop:** > 1024px (Full features)
- **Tablet:** 768px - 1024px (Adapted layout)
- **Mobile:** < 768px (Optimized UI)

---

## 🔧 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Animations, Grid, Flexbox
- **JavaScript (ES6+)** - DOM manipulation, Events
- **Google Fonts** - Orbitron & Exo 2

---

## 📈 Future Enhancements

- [ ] Backend integration (Node.js/Express)
- [ ] User authentication system
- [ ] Real VR headset support (WebXR)
- [ ] Database for training records
- [ ] Certificate generation
- [ ] Video tutorials library
- [ ] Mobile app (React Native)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Warzone Resilience Team**
- Website: [warzoneresilience.com](#)
- Email: support@warzoneresilience.com
- Phone: +91 8923781885

---

## 🙏 Acknowledgments

- Google Fonts for typography
- Emoji icons for visual elements
- Indian disaster management protocols

---

## 📊 GitHub Stats

![GitHub stars](https://img.shields.io/github/stars/your-username/warzone-resilience?style=social)
![GitHub forks](https://img.shields.io/github/forks/your-username/warzone-resilience?style=social)
![GitHub issues](https://img.shields.io/github/issues/your-username/warzone-resilience)

---

## 💡 Tips for Deployment

### GitHub Pages
1. Go to repository Settings
2. Navigate to Pages
3. Select `main` branch
4. Save - Your site will be live at `https://your-username.github.io/warzone-resilience`

### Netlify
1. Drag and drop the `warzone-resilience` folder
2. Site will be live instantly with custom domain support

### Vercel
```bash
npm install -g vercel
vercel
```

---

**Made with ❤️ in India | Stay Safe, Stay Prepared**
