# Prism Infoways Website - Design System Analysis

> Complete design documentation covering typography, colors, spacing, and consistency patterns.

---

## 1. Typography

### Fonts

| Usage | Font Family | CSS Variable | Weights |
|-------|-------------|--------------|---------|
| **Headings (h1-h6)** | Montserrat | `--font-heading` | Extra Bold, Bold, Semi Bold, Medium, Regular |
| **Body Text** | Open Sans | `--font-body` | 300, 400, 600, 700 |
| **Buttons** | Poppins | `--font-button` | Bold |

### Typography Scale

| Element | Font Size | Weight | Usage |
|---------|-----------|--------|-------|
| **Super Headline** | 70px | Extra Bold | Main hero headlines, "Order online" |
| **Heading (Super 1)** | 40px | Bold | Section headings |
| **Heading (Super 2)** | 24px | Bold | Booking Summary headings |
| **Subheading** | 20px | Semi Bold | Sub-section titles |
| **Body Copy** | 20px | Medium | Main paragraph text |
| **Body Copy Small** | 14px | Regular | Fine print, captions |

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

### Primary Colors

| Name | Hex Code | Usage |
|------|----------|-------|
| **Bright Fiery Red** | `#E92228` | Primary brand color, CTAs, Icons, Hover states |
| **Seashell** | `#F9F1F0` | Background sections, Cards |
| **White** | `#FFFFFF` | Page backgrounds, Button text |

### Secondary Colors

| Name | Hex Code | Usage |
|------|----------|-------|
| **Eerie Black** | `#1F1F1F` | Footer background, Dark text |
| **Light Grey** | `#D1D1D1` | Disabled text, Borders, Dividers |
| **Deep Red** | `#bd202e` | Hero section stats |

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
Seashell BG:        bg-[#F9F1F0]
Light Grey:         text-[#D1D1D1], border-[#D1D1D1]
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

### Buttons & Links

#### Font
- **Font Family:** Poppins Bold

#### Button States

| State | Background | Text Color | Border |
|-------|------------|------------|--------|
| **Active** | `#E92228` | `#FFFFFF` | None |
| **Disabled** | `#E92228` (muted) | `#D1D1D1` | None |
| **Mouse Over** | `#FFFFFF` | `#E92228` | `1px solid #E92228` |

#### Primary CTA
```
bg-red-500 hover:bg-white hover:text-red-500 hover:border-red-500
border-2 rounded-full px-4 py-3 font-bold font-poppins
```

#### Ghost Button
```
hover:bg-red-50 hover:text-red-600 transition-all duration-200
```

### Tab Navigation

| State | Font Weight | Font Size | Underline |
|-------|-------------|-----------|-----------|
| **Active** | Bold | 24px | 3px solid `#E92228` |
| **Disabled** | Medium | 24px | None |

```css
/* Active Tab */
.tab-active {
    font-weight: 700;
    font-size: 24px;
    color: #E92228;
    border-bottom: 3px solid #E92228;
}

/* Disabled Tab */
.tab-disabled {
    font-weight: 500;
    font-size: 24px;
    color: #D1D1D1;
}
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

## 5. Form Elements

### Input Fields

| State | Border Color | Text Color | Description |
|-------|--------------|------------|-------------|
| **Unfilled** | `#D1D1D1` | `#D1D1D1` (placeholder) | Empty input field |
| **Typing** | `#1F1F1F` | `#1F1F1F` | User actively typing |
| **Filled** | `#1F1F1F` | `#1F1F1F` | Completed input |
| **Error** | `#E92228` | `#E92228` | Validation error with "Invalid details" message |

```css
/* Input Base */
.input-field {
    border: 1px solid #D1D1D1;
    border-radius: 10px;
    padding: 12px 16px;
}

/* Input States */
.input-filled {
    border-color: #1F1F1F;
    color: #1F1F1F;
}

.input-error {
    border-color: #E92228;
    color: #E92228;
}

.input-error-message {
    color: #E92228;
    font-size: 12px;
    text-align: right;
}
```

### Checkboxes

| State | Border | Background | Icon |
|-------|--------|------------|------|
| **Unchecked** | `#D1D1D1` | `#FFFFFF` | None |
| **Checked** | `#E92228` | `#E92228` | White checkmark ✓ |

```css
/* Checkbox Styles */
.checkbox {
    width: 24px;
    height: 24px;
    border: 2px solid #D1D1D1;
    border-radius: 4px;
}

.checkbox-checked {
    background: #E92228;
    border-color: #E92228;
}
```

### Radio Buttons

| State | Border | Fill |
|-------|--------|------|
| **Unselected** | `#D1D1D1` | None |
| **Selected** | `#E92228` | `#E92228` (center dot) |

```css
/* Radio Button Styles */
.radio {
    width: 24px;
    height: 24px;
    border: 2px solid #D1D1D1;
    border-radius: 50%;
}

.radio-selected {
    border-color: #E92228;
}

.radio-selected::after {
    background: #E92228;
    width: 12px;
    height: 12px;
    border-radius: 50%;
}
```

### Action Icons

| Icon | Style | Color | Usage |
|------|-------|-------|-------|
| **Arrow (Solid)** | Filled chevron | `#E92228` | Navigation |
| **Arrow (Outlined)** | Circle with chevron | `#E92228` | Secondary navigation |
| **Close** | Circle with X | `#E92228` | Modal/dialog close |

---

## 6. Animation & Transitions

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

## 7. Poster/Card Design

### Corner Radius
- **Standard:** 10 pts curve on all four corners
- **CSS:** `border-radius: 10px`

### Background Pattern
- Subtle watermark/pattern using brand logo at low opacity

---

## 8. Icon System

### Library
- **Lucide React** for all icons

### Brand Color Application
```tsx
const BRAND_COLOR = '#E92228';

<Phone style={{ color: BRAND_COLOR }} />
```

### Social Media Icons

| Platform | Icon Style |
|----------|------------|
| **X (Twitter)** | Solid red |
| **Facebook** | Solid red |
| **YouTube** | Solid red |
| **WhatsApp** | Solid red |
| **Instagram** | Solid red |
| **LinkedIn** | Solid red |

### Functional Icons

| Icon | Usage |
|------|-------|
| **Phone** | Contact, calls |
| **Phone Ringing** | Active call state |
| **Location Pin** | Address, maps |
| **Hand Wave** | Greeting, hello |
| **Mail/Envelope** | Email, messages |
| **Mail Open** | Notification, new message |
| **Shield Check** | Security, verified |
| **Building** | Office, corporate |
| **Target** | Goals, objectives |
| **Horse/Knight** | Strategy |
| **Monitor** | Desktop, web |
| **Calendar** | Events, scheduling |
| **Clipboard Check** | Tasks, verification |
| **User Group** | Team, community |
| **Arrow Right** | Navigation, proceed |
| **Close (X)** | Cancel, close |

### Icon Sizes
```
h-5 w-5       /* Small */
h-6 w-6       /* Default */
lg:h-7 lg:w-7 /* Large screens */
xl:h-8 xl:w-8 /* Extra large */
```

---

## 9. Design Consistency Checklist

| Aspect | Status | Notes |
|--------|--------|-------|
| Font consistency | ✅ | Montserrat headings, Open Sans body, Poppins buttons |
| Color consistency | ✅ | #E92228 red accent throughout |
| Spacing consistency | ✅ | Responsive padding system |
| Border radius | ✅ | 10px base radius |
| Hover states | ✅ | Red-50 bg + Red-600 text pattern |
| Transitions | ✅ | 200-300ms smooth animations |
| Responsive design | ✅ | sm/md/lg/xl breakpoints |
| Dark mode support | ✅ | OKLCH color variables |
| Form elements | ✅ | Complete input, checkbox, radio specs |
| Button states | ✅ | Active, Disabled, Hover defined |

---

## 10. Quick Reference

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
font-family: Poppins
```

**Card:**
```
bg-white rounded-xl shadow-lg p-6
```

**Link Hover:**
```
text-gray-600 hover:text-red-600 transition-colors duration-200
```

**Form Input:**
```
border border-[#D1D1D1] rounded-[10px] px-4 py-3
focus:border-[#1F1F1F]
```

---

*Document generated: January 2026*
*Website: Prism Infoways Pvt. Ltd.*
