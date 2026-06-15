# Super Bharat Seeds Company 

A responsive, high-performance static corporate website for **Super Bharat Seeds Company**, a certified manufacturer and distributor of high-quality agricultural seeds (primarily Wheat and Barley) in India. 

**🚀 Live Deployment:** [https://superbharatseeds.vercel.app/](https://superbharatseeds.vercel.app/)


## 🌾 Overview

This project serves as the digital storefront and informational hub for the company. It showcases agricultural excellence, provides detailed product brochures, highlights the company's achievements, introduces the leadership team, and offers a comprehensive contact mechanism for farmers, dealers, and partners.

## ✨ Features

- **Responsive & Modern UI**: Fully responsive layouts optimized for desktops, tablets, and mobile devices. Uses a sleek color palette, dynamic gradients, and smooth micro-animations.
- **Multi-page Architecture**:
  - `index.html`: Engaging landing page with hero section, statistics, product highlights, testimonials, and a partner showcase.
  - `about-us.html`: Deep dive into the company's philosophy, achievements, core values, and dedicated leadership team.
  - `contactus.html`: Comprehensive contact page with an inquiry form, direct WhatsApp integration, Google Maps location, and FAQs.
- **Product Highlights**: Dedicated sections for Rabi Season Wheat and Barley seeds, complete with downloadable brochures.
- **Optimized Assets**: Uses clean, vanilla HTML, CSS, and JS for extremely fast page loads and zero dependency overhead.

## 🛠️ Technology Stack

- **HTML5**: Semantic markup for better accessibility and SEO.
- **CSS3**: Custom styling utilizing CSS Variables (Custom Properties) for a scalable design system (colors, typography, spacing). Flexbox and CSS Grid are used for complex, responsive layouts.
- **Vanilla JavaScript**: Lightweight DOM manipulation for the mobile navigation hamburger menu, scroll-reveal animations, and interactive elements.

## 🚀 How to Run Locally

Since this is a static website, you do not need a complex backend or build process to run it locally.

### Method 1: Direct File Open
You can simply double-click the `index.html` file in your file explorer to open the website directly in your default web browser.

### Method 2: Local Web Server (Recommended)
To ensure all assets and scripts load perfectly as they would on a real server, it is recommended to serve the directory locally.

If you have Node.js installed, you can use `npx`:
```bash
npx serve .
```

Alternatively, if you have Python installed:
```bash
python -m http.server 8000
```
Then navigate to `http://localhost:8000` in your browser.

## 📂 Project Structure

```
Superbharatseeds/
├── index.html        # Main landing page
├── about-us.html     # Company info & team page
├── contactus.html    # Contact form & FAQ page
├── style.css         # Global stylesheet & design system
├── main.js           # Interactive scripts (nav, animations)
├── images/           # Local image assets
│   ├── wheat.jpg
│   └── barley.JPG
└── README.md         # Project documentation
```

## 📜 License

This project is proprietary and built specifically for the Super Bharat Seeds Company. All rights reserved.