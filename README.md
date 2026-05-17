# Girl Developer Portfolio

A beautiful, elegant, multi-page React portfolio website designed specifically for girl developers. This portfolio features a soft, editorial aesthetic with a complete modern tech stack.

## Features

✨ **Modern Design**

- Soft, elegant color palette with pink and purple accents
- Magazine-style editorial aesthetic
- Responsive design that works on all devices
- Smooth animations and transitions

📄 **Complete Pages**

- **Home** - Hero section with photo, stats, and call-to-actions
- **About** - Personal story, journey, and highlights
- **Skills** - Technical capabilities and certifications
- **Portfolio** - Project showcase with filtering
- **Experience** - Timeline of internships and achievements
- **Contact** - Contact form and social links

🔧 **Technical Features**

- React Router for seamless navigation
- Reusable component architecture
- CSS animations and hover effects
- Tabler Icons integration
- Custom scrollbar styling
- Mobile responsive

## Tech Stack

- **Frontend**: React 18
- **Routing**: React Router v6
- **Styling**: Custom CSS with CSS Variables
- **Icons**: Tabler Icons
- **Fonts**: Google Fonts (Playfair Display, Outfit)
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js 14+ and npm/yarn

### Installation

1. **Clone the repository**

```bash
cd d-portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Start development server**

```bash
npm run dev
```

The portfolio will open at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## Customization

### Personal Information

Update the following in your pages:

1. **Navbar.jsx** - Change "Her Name" to your actual name
2. **Home.jsx** - Update introduction text and contact info
3. **About.jsx** - Personalize your story
4. **Portfolio.jsx** - Replace with your actual projects
5. **Experience.jsx** - Add your internships/work experience
6. **Contact.jsx** - Update email and social links

### Adding Your Photo

Place your photo at `public/her-photo.jpg` and update the path in `Home.jsx` PhotoCard component.

### Resume

Place your resume PDF at `public/resume.pdf`

### Color Customization

The color palette is defined in `src/styles/globals.css`. All colors use CSS variables:

```css
--color-primary: #c4607a /* Main pink */ --color-primary-dark: #8b3a5a
  /* Deep rose */ --color-purple: #9b4f8a /* Purple accent */
  --color-amber: #8b5a00 /* Warm amber */ --color-green: #166534
  /* Available green */;
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx & Navbar.css
│   ├── Footer.jsx & Footer.css
│   ├── PhotoCard.jsx & PhotoCard.css
│   ├── SectionHeader.jsx
│   ├── Badge.jsx & Badge.css
│   ├── ProjectCard.jsx & ProjectCard.css
│   ├── SkillCard.jsx & SkillCard.css
│   ├── StatPill.jsx & StatPill.css
│   └── TimelineItem.jsx & TimelineItem.css
├── pages/
│   ├── Home.jsx & Home.css
│   ├── About.jsx & About.css
│   ├── Skills.jsx & Skills.css
│   ├── Portfolio.jsx & Portfolio.css
│   ├── Experience.jsx & Experience.css
│   └── Contact.jsx & Contact.css
├── styles/
│   └── globals.css
├── App.jsx
└── main.jsx
```

## Design System

### Typography

- **Headings**: Playfair Display (serif, elegant)
- **Body**: Outfit (clean, modern)

### Colors

- Primary Pink: `#C4607A`
- Primary Dark: `#8B3A5A`
- Primary Light: `#FDF0F5`
- Purple: `#9B4F8A`
- Amber: `#8B5A00`
- Green: `#166534`

### Component Patterns

- Card borders: `0.5px solid var(--color-primary-border)`
- Border radius: `16px` (cards), `20px` (pills)
- Hover effects: `translateY(-4px)` with subtle shadows
- All animations: smooth 0.3s ease transitions

## Animations

- **float** - Photo card floating animation
- **pulse-dot** - Pulsing availability indicator
- **fadeSlideIn** - Staggered entrance animations
- **countUp** - Animated stat numbers

## Responsive Design

The portfolio is fully responsive with breakpoints at 768px for mobile devices. All components adapt gracefully to smaller screens.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact & Support

For questions or customization help, reach out to the portfolio owner or refer to the embedded contact form.

---

**Made with care** ✦ A beautiful portfolio for developers who code and create.
