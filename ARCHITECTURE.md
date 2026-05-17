# 🏗️ Architecture & Component Reference

## App Structure Overview

```
App.jsx (Router Setup)
│
├─ Navbar (Sticky)
│  ├─ Logo
│  ├─ Nav Links (React Router)
│  └─ Action Buttons (Resume, Hire Me)
│
├─ Routes (React Router)
│  ├─ / → Home
│  │  ├─ Hero Section (Left)
│  │  │  ├─ Badge (Role)
│  │  │  ├─ H1 Heading
│  │  │  ├─ Intro Paragraph
│  │  │  ├─ CTA Buttons
│  │  │  └─ Tech Stack Tags
│  │  └─ Photo Section (Right)
│  │     └─ PhotoCard
│  │        ├─ Profile Image
│  │        └─ 4 Floating Badges
│  │
│  ├─ /about → About
│  │  ├─ Quote Section
│  │  ├─ Stats Section (3 StatPills)
│  │  ├─ Journey Section
│  │  └─ Highlights Grid
│  │
│  ├─ /skills → Skills
│  │  ├─ 6 SkillCards Grid
│  │  ├─ Learning Banner
│  │  └─ Certifications Grid
│  │
│  ├─ /portfolio → Portfolio
│  │  ├─ Filter Tabs
│  │  └─ 6 ProjectCards Grid
│  │
│  ├─ /experience → Experience
│  │  ├─ Timeline (3 TimelineItems)
│  │  └─ Achievements Grid
│  │
│  └─ /contact → Contact
│     ├─ Hero Section
│     ├─ Contact Form
│     ├─ Social Links
│     └─ Quote Section
│
└─ Footer
   ├─ Brand
   ├─ Nav Links
   └─ Copyright
```

---

## Component Inventory

### Layout Components

#### **Navbar.jsx**

- **Props**: None
- **Features**:
  - Sticky positioning
  - Active link highlighting
  - Resume button
  - Hire Me gradient button
- **Styling**: `Navbar.css`
- **Size**: ~50 lines

#### **Footer.jsx**

- **Props**: None
- **Features**:
  - Footer navigation links
  - Copyright text
  - Responsive layout
- **Styling**: `Footer.css`
- **Size**: ~40 lines

---

### Content Components

#### **PhotoCard.jsx**

- **Props**:
  - `photoUrl` (string) - path to image
  - `name` (string) - person's name
  - `role` (string) - job title
  - `badges` (array) - floating badges config
- **Features**:
  - Asymmetric border radius
  - Floating animation
  - Floating badges with positions
  - Pulsing availability indicator
- **Styling**: `PhotoCard.css`
- **Size**: ~60 lines
- **Key Animation**: `float` (6s infinite)

#### **SectionHeader.jsx**

- **Props**:
  - `eyebrow` (string) - small label
  - `heading` (string) - main heading with HTML
- **Features**:
  - Eyebrow styling
  - H2 heading
  - Simple reusable component
- **Size**: ~10 lines

#### **ProjectCard.jsx**

- **Props**:
  - `title` (string)
  - `description` (string)
  - `tech` (array)
  - `gradient` (string) - CSS gradient
  - `type` (string) - frontend/full-stack/ai-ml
  - `isLive` (boolean)
  - `isLearning` (boolean)
  - `liveUrl` (string)
  - `githubUrl` (string)
- **Features**:
  - Gradient thumbnail
  - Tech tags
  - Live badge
  - Type indicator
  - View Live / GitHub buttons
- **Styling**: `ProjectCard.css`
- **Size**: ~60 lines

#### **SkillCard.jsx**

- **Props**:
  - `icon` (string) - Tabler Icon class
  - `title` (string)
  - `skills` (array)
  - `isLearning` (boolean)
- **Features**:
  - Icon display
  - Skill tags
  - Learning state styling
  - Hover effects
- **Styling**: `SkillCard.css`
- **Size**: ~30 lines

#### **TimelineItem.jsx**

- **Props**:
  - `company` (string)
  - `role` (string)
  - `duration` (string)
  - `description` (array)
  - `tech` (array)
- **Features**:
  - Timeline dot
  - Timeline connector line
  - Card display
  - Bullet points
  - Tech tags
- **Styling**: `TimelineItem.css`
- **Size**: ~50 lines

---

### Utility Components

#### **Badge.jsx**

- **Props**:
  - `content` (string)
  - `type` (string) - default/green/pink/purple/amber
  - `position` (string) - static/floating
  - `icon` (element)
  - `children` (element)
- **Features**:
  - Multiple color variants
  - Floating positioning
  - Icon support
  - Hover animation
- **Styling**: `Badge.css`
- **Size**: ~30 lines

#### **StatPill.jsx**

- **Props**:
  - `value` (string) - number or text
  - `label` (string)
  - `type` (string) - primary/purple/amber
- **Features**:
  - Animated count-up effect
  - Color variants
  - Responsive sizing
- **Styling**: `StatPill.css`
- **Size**: ~40 lines
- **Key Animation**: `countUp` (2s)

---

## Page Components

### Home.jsx (~120 lines)

**Purpose**: Hero page - First impression

**Sections**:

- Role badge
- Main heading
- Intro paragraph
- CTA buttons
- Tech stack tags
- Photo card with floating badges

**Key Features**:

- Staggered animations (each element has 100ms delay)
- Two-column layout
- Responsive grid
- Multiple floating badges with positioning

**Edit for**:

- Your name & role
- Your introduction
- Your tech stack
- Your current project info
- Your photo

---

### About.jsx (~100 lines)

**Purpose**: Tell your story

**Sections**:

- Quote section
- 3 stat pills
- Journey paragraphs
- 3 highlight cards

**Key Features**:

- Left border accent on quote
- Animated stat counters
- Readable paragraph layout
- Color-coordinated cards

**Edit for**:

- Your personal quote
- Your stats
- Your journey/story
- Your strengths/highlights

---

### Skills.jsx (~150 lines)

**Purpose**: Showcase technical abilities

**Sections**:

- 6 skill cards grid
- Learning banner
- 6 certification cards grid

**Key Features**:

- Icon-based skill cards
- Skill tags within cards
- Learning state variant
- Certificate display

**Edit for**:

- Your technical skills
- Tool proficiencies
- Certifications
- Learning progress

---

### Portfolio.jsx (~120 lines)

**Purpose**: Showcase projects

**Sections**:

- Filter tabs (All, Frontend, Full Stack, AI/ML)
- 6 project cards in 2-column grid
- Project filtering logic

**Key Features**:

- Dynamic filtering
- Type-based coloring
- Live badges
- Tech tags
- Gradient thumbnails
- Action buttons

**Edit for**:

- Your actual projects
- Project descriptions
- Project URLs
- Tech stack for each project
- Live/learning status

---

### Experience.jsx (~140 lines)

**Purpose**: Show career progression

**Sections**:

- Vertical timeline (3 experiences)
- Achievements grid (4 items)

**Key Features**:

- Timeline dots and connectors
- Experience cards
- Description bullet points
- Tech tags
- Achievement numbering

**Edit for**:

- Your internships/work
- Roles and companies
- Duration
- Key achievements
- Tech used

---

### Contact.jsx (~130 lines)

**Purpose**: Enable communication

**Sections**:

- Hero heading
- Contact form (name, email, message)
- Social links (email, LinkedIn, GitHub, resume)
- Quote section

**Key Features**:

- Form state management
- Mailto fallback
- Styled inputs with focus states
- Social link cards
- Responsive layout

**Edit for**:

- Your contact email
- Your social URLs
- Form submission method (optional)

---

## Global Styles Structure

### globals.css (~400 lines)

**Sections**:

1. **CSS Variables** - All colors defined here

   ```css
   --color-primary: #c4607a --color-primary-dark: #8b3a5a... (16 total);
   ```

2. **Base Styles** - HTML, body, fonts
   - Font family setup
   - Text sizing
   - Default link styling

3. **Scrollbar** - Custom webkit scrollbar
   - Pink track with pink thumb
   - Border radius 10px

4. **Typography** - Heading, paragraph styles
   - Font families (Playfair, Outfit)
   - Sizes and weights
   - Line heights

5. **Interactive Elements**
   - Buttons (primary, outline, gradient)
   - Links and hover states
   - Focus states

6. **Components**
   - Card styling
   - Badge styling
   - Section styling

7. **Animations** - @keyframes

   ```css
   @keyframes float { ... }      /* 6s infinite */
   @keyframes pulse-dot { ... }  /* 2s infinite */
   @keyframes fadeSlideIn { ... }
   @keyframes countUp { ... }
   ```

8. **Utilities** - Helper classes
   - Text colors
   - Grid layouts
   - Spacing
   - Alignment

9. **Responsive** - Mobile breakpoint 768px

---

## File Size Reference

```
Total Codebase: ~2000 lines of code

Components:
├─ Navbar + CSS       (~100 lines)
├─ Footer + CSS       (~80 lines)
├─ PhotoCard + CSS    (~140 lines)
├─ ProjectCard + CSS  (~120 lines)
├─ SkillCard + CSS    (~70 lines)
├─ StatPill + CSS     (~80 lines)
├─ TimelineItem + CSS (~90 lines)
└─ Badge + CSS        (~70 lines)

Pages:
├─ Home + CSS         (~180 lines)
├─ About + CSS        (~150 lines)
├─ Skills + CSS       (~180 lines)
├─ Portfolio + CSS    (~150 lines)
├─ Experience + CSS   (~160 lines)
└─ Contact + CSS      (~160 lines)

Core:
├─ globals.css        (~400 lines)
├─ App.jsx            (~30 lines)
├─ main.jsx           (~10 lines)
└─ Config files       (~50 lines)
```

---

## Data Flow

### Navigation Flow

```
App (BrowserRouter)
  ↓
Navbar (shows active link)
  ↓
Routes (renders active page)
  ↓
Page Component (renders content)
  ↓
Child Components (buttons, cards, etc.)
  ↓
Footer
```

### State Management

- **Minimal state** - Only Portfolio.jsx uses useState for filtering
- **No global state** - Props-based architecture
- **No backend** - All data hardcoded in components

### Styling System

```
globals.css (CSS Variables)
  ↓
Component CSS files (import from globals)
  ↓
Inline styles (gradients, specific colors)
```

---

## Component Usage Examples

### Using ProjectCard

```jsx
<ProjectCard
  title="My Cool Project"
  description="A full-stack app built with React and Node"
  tech={["React", "Node.js", "MongoDB"]}
  type="full-stack"
  gradient="linear-gradient(135deg, #9B4F8A, #D4A5D4)"
  isLive={true}
  liveUrl="https://example.com"
  githubUrl="https://github.com/user/repo"
/>
```

### Using SkillCard

```jsx
<SkillCard
  icon="ti ti-brand-react"
  title="Frontend Development"
  skills={["React", "Tailwind", "JavaScript"]}
  isLearning={false}
/>
```

### Using StatPill

```jsx
<StatPill value="15" label="Projects Built" type="primary" />
```

---

## Responsive Breakpoints

```css
/* Desktop */
@media (min-width: 1024px) {
  .grid-2 {
    grid-template-columns: 1fr 1fr;
  }
  .grid-3 {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Tablet */
@media (768px to 1023px) {
  .grid-2 {
    grid-template-columns: 1fr 1fr;
  }
  .grid-3 {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Mobile */
@media (max-width: 767px) {
  .grid-2 {
    grid-template-columns: 1fr;
  }
  .grid-3 {
    grid-template-columns: 1fr;
  }
}
```

---

## Key Design Patterns

### 1. Card Pattern

Most content uses cards:

```jsx
<div className="card">{/* content */}</div>
```

- 0.5px border
- 16px border-radius
- Hover: translateY(-4px) with shadow

### 2. Section Pattern

Each page follows:

```jsx
<section>
  <SectionHeader eyebrow="..." heading="..." />
  {/* content grid/timeline/etc */}
</section>
```

### 3. Tag Pattern

Skills and techs use tags:

```jsx
<span className="skill-tag">{skill}</span>
```

### 4. Badge Pattern

Small highlights use badges:

```jsx
<span className="badge badge-${type}">{label}</span>
```

---

## Performance Notes

### Build Size

- **minified**: ~150KB JavaScript
- **gzipped**: ~45KB
- **load time**: ~1-2s on 4G

### Optimizations Already Done

- ✅ Vite build optimization
- ✅ CSS minification
- ✅ No unused dependencies
- ✅ Lazy images (if you add them)
- ✅ CSS variables (easy theming)

### Further Optimization (Optional)

- Add image lazy-loading: `loading="lazy"`
- Compress photos to WebP
- Add code splitting for pages (if grows)
- Enable HTTP/2 server push

---

## Common Customization Points

| Goal                | File            | What to Change             |
| ------------------- | --------------- | -------------------------- |
| Change colors       | `globals.css`   | CSS variables              |
| Update copy         | Page files      | Text content               |
| Add/remove sections | Page files      | JSX elements               |
| New projects        | `Portfolio.jsx` | `projects` array           |
| New skills          | `Skills.jsx`    | `skills` array             |
| Animations speed    | `globals.css`   | Animation durations        |
| Font sizes          | `globals.css`   | `font-size` values         |
| Spacing             | Component CSS   | `gap`, `padding`, `margin` |

---

**This architecture is designed to be simple yet scalable. Everything is intentionally straightforward so you can understand and modify it easily!** ✦
