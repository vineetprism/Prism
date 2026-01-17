# Prism Infoways Website - Design System Analysis

> Complete design documentation covering typography, colors, spacing, and consistency patterns.

---

## 1. Typography

### Fonts

| Usage | Font Family | CSS Variable | Weights |
|-------|-------------|--------------|---------|
| **Headings (h1-h6)** | Montserrat | `--font-heading` | 300, 400, 500, 600, 700, 800 |
| **Body Text** | Open Sans | `--font-body` | 300, 400, 600, 700 |

### Heading Styles

```css
h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading), sans-serif;
    font-weight: 600;
    line-height: 1.15;
}
```

### Font Source
- **Provider:** Google Fonts
- **Loading Strategy:** `display: swap` (prevents FOIT)

---

## 2. Color System

### Brand Colors

| Name | Hex Code | Usage |
|------|----------|-------|
| **Primary Red** | `#E92228` | Icons, CTAs, Hover states |
| **Deep Red** | `#bd202e` | Hero section stats |
| **Footer Dark** | `#1F1F1F` | Footer background |

### Theme Variables (Light Mode)

| Variable | OKLCH Value | Description |
|----------|-------------|-------------|
| `--background` | `oklch(1 0 0)` | White |
| `--foreground` | `oklch(0.145 0 0)` | Near Black |
| `--primary` | `oklch(0.205 0 0)` | Primary shade |
| `--secondary` | `oklch(0.97 0 0)` | Light gray |
| `--muted` | `oklch(0.97 0 0)` | Muted background |
| `--accent` | `oklch(0.97 0 0)` | Accent background |
| `--destructive` | `oklch(0.577 0.245 27.325)` | Error/Red |
| `--border` | `oklch(0.922 0 0)` | Border color |
| `--ring` | `oklch(0.708 0 0)` | Focus ring |

### Theme Variables (Dark Mode)

| Variable | OKLCH Value |
|----------|-------------|
| `--background` | `oklch(0.145 0 0)` |
| `--foreground` | `oklch(0.985 0 0)` |
| `--primary` | `oklch(0.922 0 0)` |
| `--secondary` | `oklch(0.269 0 0)` |
| `--muted` | `oklch(0.269 0 0)` |
| `--destructive` | `oklch(0.704 0.191 22.216)` |

### Tailwind Color Usage

```
Primary Button:     bg-red-500, bg-red-600
Hover Background:   hover:bg-red-50
Hover Text:         hover:text-red-600
Text Colors:        text-gray-600, text-gray-300, text-white
```

---

## 3. Spacing & Layout

### Border Radius

```css
--radius: 0.625rem;          /* 10px - Base */
--radius-sm: calc(var(--radius) - 4px);   /* 6px */
--radius-md: calc(var(--radius) - 2px);   /* 8px */
--radius-lg: var(--radius);               /* 10px */
--radius-xl: calc(var(--radius) + 4px);   /* 14px */
```

### Container Widths

| Type | Width |
|------|-------|
| Main Content | `max-w-8xl` |
| Footer | `max-w-[1440px]` |

### Responsive Padding Pattern

```
px-3 sm:px-4 md:px-6 lg:px-8
```

### Responsive Breakpoints

| Breakpoint | Width |
|------------|-------|
| `sm` | 640px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |

---

## 4. Component Patterns

### Header

```css
/* Sticky header with blur effect */
sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-2xl
```

- Height: `h-20 sm:h-20 md:h-22 lg:h-24`

### Buttons

#### Primary CTA
```
bg-red-500 hover:bg-white hover:text-red-500 hover:border-red-500
border-2 rounded-full px-4 py-3 font-bold
```

#### Ghost Button
```
hover:bg-red-50 hover:text-red-600 transition-all duration-200
```

### Cards

```
rounded-xl sm:rounded-2xl shadow-lg
```

### Hero Section Special Curves

```
rounded-bl-[3rem] sm:rounded-bl-[5rem] md:rounded-bl-[6rem] lg:rounded-bl-[8rem] xl:rounded-bl-[10rem]
```

---

## 5. Animation & Transitions

### Standard Duration

| Duration | Usage |
|----------|-------|
| `duration-150` | Quick feedback |
| `duration-200` | Standard hover |
| `duration-300` | Smooth transitions |

### Hover Effects

```css
/* Text hover */
hover:text-red-600

/* Background hover */
hover:bg-red-50

/* Transform hover */
hover:translate-x-2
hover:scale-110
hover:rotate-6

/* Combined (Footer icons) */
hover:scale-110 hover:rotate-12 hover:shadow-lg hover:shadow-red-600/50
```

---

## 6. Icon System

### Library
- **Lucide React** for all icons

### Brand Color Application
```tsx
const BRAND_COLOR = '#E92228';

<Phone style={{ color: BRAND_COLOR }} />
```

### Sizes
```
h-5 w-5       /* Small */
h-6 w-6       /* Default */
lg:h-7 lg:w-7 /* Large screens */
xl:h-8 xl:w-8 /* Extra large */
```

---

## 7. Design Consistency Checklist

| Aspect | Status | Notes |
|--------|--------|-------|
| Font consistency | ✅ | Montserrat headings, Open Sans body |
| Color consistency | ✅ | #E92228 red accent throughout |
| Spacing consistency | ✅ | Responsive padding system |
| Border radius | ✅ | 10px base radius |
| Hover states | ✅ | Red-50 bg + Red-600 text pattern |
| Transitions | ✅ | 200-300ms smooth animations |
| Responsive design | ✅ | sm/md/lg/xl breakpoints |
| Dark mode support | ✅ | OKLCH color variables |

---

## 8. Quick Reference

### Copy-Paste Styles

**Heading:**
```css
font-family: Montserrat;
font-weight: 600;
line-height: 1.15;
```

**Body:**
```css
font-family: Open Sans;
```

**Primary Button:**
```
bg-red-500 text-white font-bold rounded-full px-6 py-3
hover:bg-white hover:text-red-500 border-2 hover:border-red-500
```

**Card:**
```
bg-white rounded-xl shadow-lg p-6
```

**Link Hover:**
```
text-gray-600 hover:text-red-600 transition-colors duration-200
```

---

*Document generated: January 2026*
*Website: Prism Infoways Pvt. Ltd.*
