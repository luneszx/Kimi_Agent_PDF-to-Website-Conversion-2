# S.C. INTERNATIONAL - Technical Specification

## Component Inventory

### shadcn/ui Components (Built-in)
| Component | Purpose | Customization |
|-----------|---------|---------------|
| Button | CTAs, navigation | Custom blue color, hover effects |
| Card | Product cards, project cards | Custom shadow, border radius |
| Dialog | Mobile menu, modals | Slide-in animation |
| Sheet | Mobile navigation drawer | Right-side slide |
| Separator | Section dividers | Custom color |
| Badge | Experience badge, tags | Gold variant |

### Third-Party Registry Components
| Component | Registry | Purpose |
|-----------|----------|---------|
| None required | - | Using custom implementations |

### Custom Components to Build
| Component | Purpose | Props |
|-----------|---------|-------|
| DiamondImage | Hexagonal image containers | src, alt, size, className |
| DiamondGrid | Honeycomb logo grid | items, columns |
| ScrollReveal | Scroll-triggered animations | children, delay, direction |
| AnimatedCounter | Number count-up animation | value, duration |
| ProductCard | Alternating product layout | title, description, image, reverse |
| ProjectCard | Project showcase card | title, description, image, client |
| SectionTitle | Consistent section headers | children, className |
| PartnerLogo | Logo with hover effect | src, alt, name |

## Animation Implementation Table

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| Hero load sequence | Framer Motion | AnimatePresence + staggerChildren | Medium |
| Diamond float | CSS Keyframes | @keyframes float, infinite | Low |
| Badge pulse | CSS Keyframes | @keyframes pulse, infinite | Low |
| Scroll reveal | Framer Motion | useInView + motion.div | Medium |
| Card stagger | Framer Motion | staggerChildren variant | Low |
| Button hover | Tailwind + CSS | translateY + shadow transition | Low |
| Card lift | Tailwind | hover:translateY + shadow | Low |
| Logo grayscale | CSS | filter: grayscale, hover transition | Low |
| Number count-up | Custom Hook | useCountUp with requestAnimationFrame | Medium |
| Nav scroll effect | React State | useScroll hook, conditional classes | Low |
| Mobile menu slide | Framer Motion | AnimatePresence + slide animation | Medium |
| Image zoom hover | CSS | transform: scale on hover | Low |

## Animation Library Choices

### Primary: Framer Motion
- React-native integration
- Declarative animation syntax
- Built-in scroll detection (useInView)
- AnimatePresence for mount/unmount
- Stagger animations support

### Secondary: CSS/Tailwind
- Simple hover effects
- Infinite animations (float, pulse)
- Performance-critical micro-interactions
- Grayscale filters

## Project File Structure

```
app/
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn components
│   │   ├── DiamondImage.tsx
│   │   ├── DiamondGrid.tsx
│   │   ├── ScrollReveal.tsx
│   │   ├── AnimatedCounter.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── SectionTitle.tsx
│   │   ├── PartnerLogo.tsx
│   │   └── Navigation.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Message.tsx
│   │   ├── AboutUs.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── Products.tsx
│   │   ├── Projects.tsx
│   │   ├── ChannelPartners.tsx
│   │   ├── BusinessPartners.tsx
│   │   └── Contact.tsx
│   ├── hooks/
│   │   ├── useScrollPosition.ts
│   │   └── useCountUp.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── products/
│   │   ├── projects/
│   │   ├── partners/
│   │   └── icons/
│   └── logos/
├── components.json
├── tailwind.config.js
└── package.json
```

## Dependencies

### Core
- react
- react-dom
- typescript
- vite

### Animation
- framer-motion

### UI
- @radix-ui/react-dialog (shadcn dependency)
- @radix-ui/react-slot
- class-variance-authority
- clsx
- tailwind-merge
- lucide-react

### Styling
- tailwindcss
- postcss
- autoprefixer

## Tailwind Configuration Extensions

```javascript
// tailwind.config.js additions
{
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E5AA8',
          dark: '#0D3B6E',
          light: '#3A7BC8',
        },
        secondary: '#C41E3A',
        accent: {
          gold: '#D4AF37',
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
}
```

## Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Mobile | < 640px | Single column, stacked layout, hamburger menu |
| Tablet | 640-1024px | 2 columns, adjusted spacing |
| Desktop | > 1024px | Full layout, all features |

## Performance Considerations

1. **Image Optimization**
   - Use WebP format where possible
   - Lazy load below-fold images
   - Proper sizing with srcset

2. **Animation Performance**
   - Use transform and opacity only
   - Add will-change sparingly
   - Respect prefers-reduced-motion

3. **Code Splitting**
   - Lazy load sections if needed
   - Optimize bundle size

## Accessibility

1. **Keyboard Navigation**
   - All interactive elements focusable
   - Visible focus indicators
   - Skip navigation link

2. **Screen Readers**
   - Proper heading hierarchy
   - Alt text for all images
   - ARIA labels where needed

3. **Motion**
   - prefers-reduced-motion support
   - Essential animations only when disabled
