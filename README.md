# Fitness Center Website.

A modern, responsive website for a fitness center featuring services, resources, testimonials, and contact information.

### Color System

**Primary Palette:**
- `--background: #FFE4C4` (bisque) - Used for background and buttons
- `--background: #E2725B` (Coral) - Hero section and key accents
- `--accent: #689F38` (Green) - text
- `--text:  #000000` (black) - Primary text color
- `--white: #FFFFFF` - Background and card colors
- `--light-gray: #f5f5f5` - Page background

**Rationale:**
The palette combines energetic coral with bisque to evoke both vitality and balance. The green accent and black promotes growth and health associations, while neutral tones ensure readability.

### Breakpoint Logic

**Responsive Grid System:**
- **1200px+ (XL):** Full desktop layout (1240px container)
- **992px-1199px (LG):** Adjusted spacing, reduced gaps between nav items
- **768px-991px (MD):** Switches to:
  - 2-column grid for services
  - Stacked layout for testimonials
  - Mobile menu activation
- **576px-767px (SM):** Single column layout for all sections
- **<575px (XS):** Ultra-compact mobile layout

**Key Breakpoint Behaviors:**
- Navigation collapses at 991px
- Hero section image strategy changes at 768px (shows only right image)
- Testimonials become horizontally scrollable at 991px
- Resources grid shifts from 3 → 2 → 1 columns

### Creative Divergences

**Beyond Original Mockups:**
1. **Dynamic Hero Section:**
   - Added transform animations on hover
   - Implemented dual-image strategy with responsive fallbacks
   - Created decorative element interactions

2. **Enhanced Card System:**
   - Added 3D hover effects with and shadow changes

3. **Navigation Innovation:**
   - Implemented a "split navigation" with centered logo
   - Added smooth transitions between states
   - Developed a progressive collapse system

4. **Interactive Elements:**
   - Accordion FAQ with hover effects
   - Testimonial slider with custom controls
   - Partner logo marquee with hidden scrollbar

## Features

- **Responsive Design**: Works on all device sizes
- **Interactive Elements**:
  - Navigation menu with hover effects
  - Testimonial slider
  - FAQ accordion
  - Contact form
- **Sections**:
  - Hero banner with call-to-action
  - Services showcase
  - Testimonials
  - Resources
  - Community information
  - FAQ section
  - Contact details
- **Modern UI** with smooth animations and transitions

## Technologies Used

- HTML5
- CSS
- JavaScript (for interactive elements)
- Font Awesome (for icons)
- Google Fonts (Bricolage Grotesque)

## File Structure
fitness-center/

├── assets/

│ ├── images/ # All website images

│ ├── logos/ # Partner logos
│ 
├── css/

│ └── styles.css # Main stylesheet

├── js/

│ └── script.js # Main JavaScript file

├── index.html # Main HTML file

└── README.md #
