# 🍔 Burger Restaurant Website

## 📋 Project Overview

The **Burger Restaurant Website** (Food Khazana | Burger House) is a modern, fully responsive web application designed to provide an exceptional digital dining experience. Built with HTML5, CSS3, JavaScript, and Bootstrap 5, this website offers a comprehensive platform for a burger restaurant featuring menu browsing, table reservations, and interactive user engagement.

This project demonstrates modern web development practices with smooth animations, responsive design, mobile-first approach, and user-friendly interface elements that work seamlessly across all devices.

## 📁 Repository Structure

```
Burger-Restaurant/
├── assets/                    # Image and media assets
│   ├── banner-1.png          # Main banner image
│   ├── banner-2.png          # Secondary banner
│   ├── banner-3.png          # Tertiary banner
│   ├── burgermasala.jpg      # Masala burger image
│   ├── burgermirch.jpg       # Mirch burger image
│   ├── event.png             # Events section image
│   ├── footer-bg.png         # Footer background
│   ├── header-bg.png         # Header background
│   ├── header.png            # Header hero image
│   ├── lastone.jpg           # Last burger option
│   ├── logo-dark.png         # Dark theme logo
│   ├── logo-white.png        # Light theme logo
│   ├── masalaburger.jpg      # Another masala burger image
│   ├── mirchburger.jpg       # Another mirch burger image
│   ├── order-1.png           # Order process step 1
│   ├── order-2.png           # Order process step 2
│   ├── order-3.png           # Order process step 3
│   ├── res1.jpg              # Restaurant image 1
│   ├── res2.jpg              # Restaurant image 2
│   ├── res3.jpg              # Restaurant image 3
│   ├── res4.jpg              # Restaurant image 4
│   ├── reservation-bg-1.png  # Reservation background 1
│   └── reservation-bg-2.png  # Reservation background 2
├── index.html                # Main HTML file (368 lines)
├── styles.css                # Main stylesheet (579 lines)
├── main.js                   # JavaScript functionality (124 lines)
└── README.md                 # Project documentation
```

## ✨ Features

### 🎨 **Design & UI/UX**
- **Fully Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern CSS Grid & Flexbox Layout**: Advanced CSS layout techniques
- **Custom Color Scheme**: 
  - Primary: `#42200b` (Dark Brown)
  - Secondary: `#ffc135` (Golden Yellow) 
  - Tertiary: `#df1c1c` (Red)
- **Google Fonts Integration**: Alfa Slab One, Bebas Neue, and Montserrat
- **ScrollReveal Animations**: Smooth scroll-triggered animations
- **Bootstrap 5 Integration**: Modern component framework

### 🍽️ **Restaurant Features**
- **Interactive Menu Section**: Detailed burger listings with prices in Indian Rupees (₹)
- **Table Reservation System**: Complete booking form with date/time selection
- **Restaurant Gallery**: Bootstrap carousel showcasing restaurant images
- **Special Offers Banner**: Highlighted promotional sections
- **Events Section**: Information about upcoming restaurant events

### 🔧 **Technical Features**
- **Smooth Scrolling Navigation**: Anchor-based section navigation
- **Mobile Menu Toggle**: Responsive hamburger menu for mobile devices
- **Form Validation**: Client-side form handling for reservations
- **Authentication Modals**: Sign-in and sign-up modal dialogs
- **Active Navigation Highlighting**: Dynamic nav state based on scroll position
- **Cross-browser Compatibility**: Modern web standards compliance

### 📱 **Interactive Elements**
- **Burger Carousel**: Auto-playing image slideshow
- **Hover Effects**: Enhanced card interactions
- **Modal Windows**: User authentication and information dialogs
- **Responsive Images**: Optimized loading and display
- **Social Media Integration**: Footer social links

## 🛠️ Technology Stack

### **Frontend Technologies**
- **HTML5**: Semantic markup and modern web standards
- **CSS3**: Advanced styling with custom properties and animations
- **JavaScript (ES6+)**: Modern JavaScript features and DOM manipulation
- **Bootstrap 5.3.0**: Responsive framework and components

### **External Libraries & CDNs**
- **Bootstrap CSS**: `https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`
- **Bootstrap JS**: `https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js`
- **Remix Icons**: `https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css`
- **ScrollReveal**: `https://unpkg.com/scrollreveal`
- **Google Fonts**: Alfa Slab One, Bebas Neue, Montserrat

### **Design Features**
- **CSS Variables**: Consistent color scheme management
- **Mobile-First Approach**: Progressive enhancement design
- **CSS Grid & Flexbox**: Modern layout techniques
- **Media Queries**: Responsive breakpoints at 540px, 768px, and 1024px

## 🚀 Setup and Installation

### **Prerequisites**
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### **Quick Start**

1. **Clone the Repository**
   ```bash
   git clone https://github.com/YASHRAJ1012108/Burger-Restaurant.git
   cd Burger-Restaurant
   ```

2. **Open the Project**
   - **Option 1**: Double-click `index.html` to open in your default browser
   - **Option 2**: Use a local development server
     ```bash
     # Using Python (if installed)
     python -m http.server 8000
     # Then visit http://localhost:8000
     
     # Using Node.js live-server (if installed)
     npx live-server
     
     # Using PHP (if installed)
     php -S localhost:8000
     ```

3. **View the Website**
   - Open your browser and navigate to the served URL
   - The website will be fully functional with all features

### **File Structure Explanation**
- **`index.html`**: Main entry point containing all HTML structure
- **`styles.css`**: Complete styling with responsive design
- **`main.js`**: All interactive functionality and animations
- **`assets/`**: All images, logos, and visual assets

## 🎯 Usage Guide

### **Navigation**
- **Home**: Hero section with main branding
- **Special**: Featured promotions and offers
- **Menu**: Complete burger menu with prices
- **Events**: Information about restaurant events
- **Contact**: Table reservation form

### **Features Walkthrough**
1. **Browse Menu**: Scroll to menu section to view available burgers with prices
2. **Book Table**: Fill out the reservation form with your details
3. **View Gallery**: Check out restaurant images in the carousel
4. **Learn About Events**: Discover upcoming restaurant events
5. **Mobile Experience**: Enjoy full functionality on mobile devices

## 🍔 Menu Items (As Featured in Code)

| Burger Name | Price | Description |
|-------------|-------|-------------|
| Chicken Burger | ₹199 | Timeless perfection classic |
| Veggie Delight Burger | ₹179 | Vibrant vegetarian flavors |
| BBQ Bacon Burger | ₹249 | Smoky, savory bacon experience |
| Double Cheese Burger | ₹299 | Double cheese, double fun |
| Mushroom Swiss Burger | ₹259 | Earthy mushrooms with Swiss cheese |
| Spicy Jalapeno Burger | ₹229 | Heat lovers special with jalapenos |
| Classic Beef Burger | ₹279 | Traditional 100% premium beef |

## 📱 Responsive Design

### **Breakpoints**
- **Mobile**: < 540px (Single column layout)
- **Tablet**: 540px - 768px (Two column grid)
- **Desktop**: > 768px (Full navigation, multi-column)
- **Large Desktop**: > 1024px (Optimized spacing)

### **Mobile Features**
- Hamburger menu navigation
- Touch-friendly buttons and forms
- Optimized image sizes
- Vertical stack layout

## 🎨 Color Scheme & Design System

```css
:root {
  --primary-color: #42200b;    /* Dark Brown */
  --secondary-color: #ffc135;  /* Golden Yellow */
  --tertiary-color: #df1c1c;   /* Red */
  --text-dark: #212529;        /* Dark Text */
  --white: #ffffff;            /* White */
}
```

## 🔧 JavaScript Functionality

### **Core Features**
- **ScrollReveal Animations**: Smooth reveal animations on scroll
- **Mobile Menu Toggle**: Responsive navigation handling
- **Smooth Scrolling**: Enhanced anchor navigation
- **Form Handling**: Reservation and authentication forms
- **Carousel Control**: Bootstrap carousel initialization
- **Active Navigation**: Dynamic menu highlighting based on scroll position

## 📞 Contact Information (From Footer)

- **Address**: MG Road, Ahmedabad, 382210
- **Email**: burgerhouse108.com
- **Social Media**: Facebook, Instagram, Twitter, WhatsApp links

## 👨‍💻 Author & Credits

**YASHRAJ1012108**
- **GitHub Profile**: [@YASHRAJ1012108](https://github.com/YASHRAJ1012108)
- **Repository**: [Burger-Restaurant](https://github.com/YASHRAJ1012108/Burger-Restaurant)
- **Portfolio**: Multiple web development projects

### **Project Details**
- **Repository Name**: Burger-Restaurant
- **Visibility**: Public
- **Primary Language**: HTML (51.3%)
- **Secondary Language**: CSS (36.8%)
- **JavaScript**: 11.9%
- **Total Lines of Code**: 1000+ lines
- **Last Updated**: March 2025
- **License**: Open Source

## 🌟 Key Highlights

- ✅ **Modern Web Standards**: HTML5, CSS3, ES6+ JavaScript
- ✅ **Responsive Design**: Mobile-first approach with progressive enhancement
- ✅ **Performance Optimized**: Efficient code structure and asset management
- ✅ **User Experience**: Smooth animations and intuitive navigation
- ✅ **Accessibility**: Semantic HTML and proper ARIA labels
- ✅ **Cross-browser Compatibility**: Works on all modern browsers
- ✅ **SEO Friendly**: Proper meta tags and semantic structure

## 📄 License

This project is open source and available under the standard repository terms. All assets and code are provided for educational and demonstration purposes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/YASHRAJ1012108/Burger-Restaurant/issues).

---

**Copyright © 2024 Web Burger House. All rights reserved.**

*Built with ❤️ by [YASHRAJ1012108](https://github.com/YASHRAJ1012108)*
