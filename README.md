# 🌍 VIHARA - Discover India's Hidden Gems

**Wander the Unseen. Discover the Soul of Bharat.**

VIHARA is an innovative web application designed to help travelers discover lesser-known, off-beat destinations across India. It combines interactive mapping, smart filtering, community submissions, and practical travel tools—all in one beautifully designed platform.

---

## ✨ Features

### 🗺️ **Explore Destinations**
- Browse 28+ hidden gem locations across India
- Filter by state and sub-zone for targeted exploration
- Interactive Leaflet.js map with real-time location tracking
- Get your current location and explore nearby destinations

### 🔍 **Smart Filters**
- Filter by activity type (Adventure, Cultural, Nature, Photography)
- Filter by trip duration (Short: 1-2 days, Medium: 3-5 days)
- Budget-based filtering (set your maximum budget)
- Transport mode filtering (Bus, Train, Flight, Local)

### ✍️ **Community Submission System**
- Users can submit their own hidden gem locations
- Form captures comprehensive details:
  - Place name, location, emoji/icon
  - Description, activity type, duration
  - Budget, transport options, accommodation type
  - Google Maps link, photos, and video links
  - Submitter name and email
- Submitted places appear in "Pending Submissions" section
- Real-time status tracking with submission dates

### 🔐 **Admin Panel (Password Protected)**
- **Secure login** with password authentication
- **Review pending submissions** with full details
- **One-click approval/rejection** of user submissions
- **Approved gems counter** to track contributions
- **View all approved places** with submitter attribution
- **Logout functionality** for session management

### 💱 **Universal Converter**
- **Currency Exchange**: INR, USD, EUR, GBP, JPY
- **Distance Conversion**: km, miles, meters, feet, nautical miles
- **Weight Conversion**: kg, lbs, grams, ounces, stones
- **Temperature Converter**: Celsius, Fahrenheit, Kelvin with weather feeling indicator
- **Speed Conversion**: km/h, mph, m/s, knots
- **Time Zone Converter**: IST, UTC, EST, PST with live updates

### 📍 **Interactive Map**
- Multi-layer state zones with color-coding
- Real-time user location tracking
- Zoom and pan controls
- Get location button for quick positioning
- Recenter to India button for easy navigation

### 💡 **Travel Tips**
- Packing tips
- Money matters advice
- Accommodation recommendations
- Transportation guidance
- Food safety tips
- Connectivity recommendations

---

## 🎯 Destinations Covered

### Andhra Pradesh (11 locations)
- Bheemunipatnam Beach
- Araku Valley
- Uppada Beach & Mangrove Villages
- Bojjana Konda
- Thotlakonda Buddhist Complex
- Ananthagiri Coffee Plantations
- Padmapuram Botanical Garden
- Gandikota Canyons
- Maredumalli Forest Trekking
- Papikondalu
- Bobbili War Memorial
- Penukonda Fort

### Telangana (4 locations)
- Qutub Shah Tombs (Hyderabad)
- Eturnagaran Lakes & Jungle Zone (Warangal)
- Mallela Theertham Waterfalls (Khammam)
- Nallamalla Forest (Mahbubnagar)

### Rajasthan (5 locations)
- Jaipur's Treks
- Khuri Desert
- Kumbhalgarh
- Bahubali Hills
- Mahansar Painted Havelis

### Goa (6 locations)
- Chorao Island
- Corjuem Fort
- Usgalimal Rock Carvings
- Cotigao Wildlife Sanctuary
- Mandovi River Cruises

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No installation required - runs directly in browser
- Internet connection for map functionality

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/VIHARA.git
   cd VIHARA
   ```

2. **Open the HTML file:**
   - Simply double-click `VIHARA-Admin-Password.html` or
   - Open it with your preferred browser

3. **That's it!** The application is ready to use.

---

## 🔐 Admin Access

### Default Credentials
- **Password**: `vihara123`

### Changing the Password
1. Open `VIHARA-Admin-Password.html` in a text editor
2. Find this line in the JavaScript section:
   ```javascript
   const ADMIN_PASSWORD = 'vihara123';
   ```
3. Replace `'vihara123'` with your desired password
4. Save the file

### Admin Features
1. Navigate to **🔐 Admin Panel** in the sidebar
2. Enter the admin password
3. View, approve, or reject user submissions
4. Manage the community-contributed destinations

---

## 💾 Data Storage

### LocalStorage Usage
- **Submissions**: All user submissions are stored locally in browser's LocalStorage
- **No server required**: Data persists even after page refresh
- **Privacy**: Data is stored only in user's browser

### Export Data
To backup submissions:
1. Open browser DevTools (F12)
2. Go to Console
3. Run: `JSON.stringify(JSON.parse(localStorage.getItem('viharaSubmissions')), null, 2)`
4. Copy and save the output

---

## 🎨 Design & Technology

### Frontend Stack
- **HTML5**: Semantic markup
- **CSS3**: Custom design system with CSS variables
- **JavaScript**: Vanilla JS (no frameworks required)
- **Libraries**:
  - Leaflet.js 1.9.4 - Interactive mapping
  - OpenStreetMap - Map tiles

### Design Features
- Dark theme with gold accents (#FAC496)
- Fully responsive (mobile, tablet, desktop)
- Smooth animations and transitions
- Accessibility-focused UI
- Professional color scheme

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## 📱 Responsive Design

- ✅ Mobile-first approach
- ✅ Tablet optimized
- ✅ Desktop experience
- ✅ Touch-friendly interface
- ✅ Adaptive layouts

---

## 🛣️ Roadmap

### Upcoming Features
- [ ] User authentication system
- [ ] Database backend (Firebase/MongoDB)
- [ ] Rating and review system
- [ ] Photo gallery for each destination
- [ ] Itinerary builder
- [ ] Offline map downloads
- [ ] Multi-language support
- [ ] Weather integration
- [ ] Booking integrations
- [ ] Social sharing features

---

## 🤝 Contributing

We welcome contributions! Here's how to contribute:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/YourFeature`
3. **Commit your changes**: `git commit -m 'Add YourFeature'`
4. **Push to the branch**: `git push origin feature/YourFeature`
5. **Open a Pull Request**

### Contribution Ideas
- Add more destinations
- Improve UI/UX
- Fix bugs
- Add new converters
- Enhance documentation
- Suggest features

---

## 📝 File Structure

```
VIHARA/
├── README.md                    # Documentation
├── VIHARA-Admin-Password.html   # Main application file
└── assets/
    └── vihara-logo.png         # App logo (hosted online)
```

---

## 📸 Screenshots

### Home Page
- Hero section with feature cards
- Call-to-action button
- Feature highlights

### Explore Section
- Interactive map with state zones
- Smart filters
- Destination cards grid
- Location-based filtering

### Submit Hidden Gem Section
- Comprehensive submission form
- Pending submissions display
- Form validation

### Admin Panel
- Password-protected login
- Pending approvals dashboard
- Approved gems gallery
- Admin controls (Approve/Reject)

---

## 🐛 Bug Reports

Found a bug? Please create an issue with:
- Description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Browser and OS information
- Screenshots (if applicable)

---

## 📧 Contact & Support

- **Email**: your-email@example.com
- **GitHub Issues**: Create an issue for bugs and features
- **Discord**: Join our community server (coming soon)

---

## 📄 License

This project is licensed under the **MIT License** - see the LICENSE file for details.

```
MIT License

Copyright (c) 2025 VIHARA Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 🙏 Acknowledgments

- **Leaflet.js** - Interactive mapping library
- **OpenStreetMap** - Map tile provider
- **Community Contributors** - For submitting hidden gems
- **Design Inspiration** - Modern travel and tourism apps

---

## 📊 Statistics

- **Total Destinations**: 28+
- **States Covered**: 4 (Andhra Pradesh, Telangana, Rajasthan, Goa)
- **Features**: 10+
- **Converters**: 6 types
- **User Submissions**: Unlimited
- **Response Time**: Instant (client-side processing)

---

## 🌟 Why VIHARA?

### For Travelers
- Discover authentic, off-beat experiences
- Save time with smart filtering
- Get practical travel information
- Connect with a community of explorers

### For Developers
- Clean, well-organized code
- Easy to customize and extend
- No backend required (can add later)
- Great learning project
- Fully responsive design

### For Contributors
- Help discover India's hidden gems
- Share your travel experiences
- Shape the future of travel discovery
- Be part of a growing community

---

## 🚀 Quick Start Command

```bash
# Clone repo
git clone https://github.com/yourusername/VIHARA.git

# Navigate to project
cd VIHARA

# Open in browser (macOS)
open VIHARA-Admin-Password.html

# Open in browser (Linux)
xdg-open VIHARA-Admin-Password.html

# Or simply open the file in your browser
```

---

## 📞 Support

If you encounter any issues:
1. Check the FAQ section
2. Search existing GitHub issues
3. Create a new issue with detailed information
4. Contact the development team

---

## 🎉 Version History

### v1.0.0 (Current)
- ✅ Core destination explorer
- ✅ Interactive mapping
- ✅ Smart filtering system
- ✅ Community submissions
- ✅ Admin panel with authentication
- ✅ Universal converter tools
- ✅ Travel tips section
- ✅ Fully responsive design

---

## 🔗 Links

- **Live Demo**: [https://yourusername.github.io/VIHARA/](https://yourusername.github.io/VIHARA/)
- **GitHub Repository**: [https://github.com/yourusername/VIHARA](https://github.com/yourusername/VIHARA)
- **Issues & Features**: [GitHub Issues](https://github.com/yourusername/VIHARA/issues)

---

## 💡 Tips for Users

### Best Practices
- Update your profile location for accurate recommendations
- Share your experiences to help others
- Check approved submissions regularly for new gems
- Use filters to narrow down search results
- Convert currency before planning trips

### Admin Best Practices
- Review submissions regularly
- Provide feedback to contributors (coming soon)
- Verify submission details before approval
- Maintain data quality
- Keep password secure

---

Made with ❤️ for Travel Enthusiasts

**VIHARA** - *Wander the Unseen. Discover the Soul of Bharat.*

---

*Last Updated: December 2025*
*Current Version: 1.0.0*
